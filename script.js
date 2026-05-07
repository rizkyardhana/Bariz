// Cart functionality
let cart = [];
let cartCount = 0;
let cartTotal = 0;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotalElement = document.getElementById('cartTotal');
const cartCountElement = document.querySelector('.cart-count');
const cartIcon = document.getElementById('cartIcon');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const closeCart = document.querySelector('.close-cart');
const productModal = document.getElementById('productModal');
const productModalBody = document.getElementById('productModalBody');
const closeProductModal = document.querySelector('.close-product-modal');
const loadingSpinner = document.getElementById('loadingSpinner');
const filterButtons = document.querySelectorAll('.filter-btn');
const checkoutBtn = document.getElementById('checkoutBtn');
const contactForm = document.getElementById('contactForm');


// Initialize the website
document.addEventListener('DOMContentLoaded', function () {
    initializeWebsite();
});


function initializeWebsite() {
    // Show loading screen first
    showLoadingScreen();

    // Initialize all website functions
    loadProducts('lukisan', true); // Pass true to indicate initial load - show default Karya Lukisan Asli category
    setupEventListeners();
    initializeCartWithItems();
    updateCartCount();
    setupFilterButtons();

    // Hide loading screen after everything is loaded
    setTimeout(() => {
        hideLoadingScreen();
    }, 2500);
}

// Loading Screen Functions
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        // Ensure it's visible immediately
        loadingScreen.style.display = 'flex';
        loadingScreen.classList.remove('hidden');

        // Reset progress
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (progressFill) progressFill.style.width = '0%';
        if (progressText) progressText.textContent = 'Loading...';

        // Start loading animation
        let progress = 0;
        const loadingInterval = setInterval(() => {
            progress += Math.random() * 15 + 5; // Random progress increment
            if (progress >= 100) progress = 100;

            if (progressFill) {
                progressFill.style.width = progress + '%';
            }

            if (progressText) {
                if (progress < 30) {
                    progressText.textContent = 'Memuat produk...';
                } else if (progress < 60) {
                    progressText.textContent = 'Menyiapkan koleksi...';
                } else if (progress < 90) {
                    progressText.textContent = 'Hampir selesai...';
                } else {
                    progressText.textContent = 'Siap!';
                }
            }

            if (progress >= 100) {
                clearInterval(loadingInterval);
            }
        }, 150);
    }
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');

        // Remove from DOM after animation completes to free resources, but keep layout clean
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 800); // Match CSS transition time
    }
}

function initializeCartWithItems() {
    // Keranjang kosong pada awalnya - pengguna memilih sendiri
    updateCartTotal();
}

// Load products to the page with filtering
function loadProducts(filter = 'all', isInitialLoad = false) {
    // Only show the white spinner if it's NOT the initial load
    if (!isInitialLoad) {
        showLoading();
    }

    setTimeout(() => {
        const filteredProducts = filter === 'all'
            ? products
            : products.filter(product => product.category === filter);

        productsGrid.innerHTML = filteredProducts.map(product => `
            <div class="product-card" data-category="${product.category}">
                <div class="product-image">
                    <div class="image-placeholder loading">
                        <i class="fas fa-spinner fa-spin"></i>
                        <p>Loading...</p>
                    </div>
                    <img src="${product.images[0]}" alt="${product.name}" class="product-img" style="display: none;" onload="this.style.display='block'; this.previousElementSibling.style.display='none';">
                    ${product.originalPrice > product.price ? `
                        <div class="product-badge">Sale</div>
                    ` : ''}
                    ${!product.inStock ? `
                        <div class="product-badge sold-out">Sold Out</div>
                    ` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    
                    <div class="product-meta">
                        <span class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</span>
                        <span class="product-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}">
                            ${product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                        </span>
                    </div>
                    
                    <div class="product-price">
                        ${typeof product.price === 'number' ? `Rp ${product.price.toLocaleString('id-ID')}` : product.price}
                        ${typeof product.originalPrice === 'number' && typeof product.price === 'number' && product.originalPrice > product.price ? `
                            <span class="original-price">Rp ${product.originalPrice.toLocaleString('id-ID')}</span>
                        ` : ''}
                    </div>
                    
                    <div class="product-actions">
                        <button class="add-to-cart" 
                                onclick="addToCart(${product.id})" 
                                ${!product.inStock ? 'disabled' : ''}>
                            <i class="fas fa-shopping-bag"></i>
                            ${product.inStock ? 'Tambah ke Keranjang' : 'Sold Out'}
                        </button>
                        <button class="view-details" onclick="openProductModal(${product.id})">
                            <i class="fas fa-eye"></i> Lihat Detail
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        // Hide white spinner if it was shown
        if (!isInitialLoad) {
            hideLoading();
        }
    }, 500);
}

// Setup filter buttons
function setupFilterButtons() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            loadProducts(filter);
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    hamburger.addEventListener('click', toggleMobileMenu);

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        if (!link.classList.contains('cart-icon')) {
            link.addEventListener('click', closeMobileMenu);
        }
    });

    // Cart functionality
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        openCart();
    });


    closeCart.addEventListener('click', closeCartModal);

    // Close cart when clicking outside
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });

    // Product modal
    closeProductModal.addEventListener('click', closeProductModalFunc);

    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModalFunc();
        }
    });

    // Checkout button
    checkoutBtn.addEventListener('click', proceedToWhatsApp);


    // Contact form
    contactForm.addEventListener('submit', handleContactForm);

    // FAQ accordion
    setupFAQAccordion();

    // Smooth scrolling for navigation links
    setupSmoothScrolling();

    // Header scroll effect
    window.addEventListener('scroll', handleHeaderScroll);

    // Close modals with Escape key
    document.addEventListener('keydown', handleEscapeKey);
}

// Mobile menu functions
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

function closeMobileMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}

// FAQ Accordion functionality
function setupFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const answer = faqItem.querySelector('.faq-answer');

            // Close other open items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').classList.remove('active');
                }
            });

            // Toggle current item
            faqItem.classList.toggle('active');
            answer.classList.toggle('active');
        });
    });
}


// Contact form functionality
function handleContactForm(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const message = contactForm.querySelector('textarea').value;

    // Simple validation
    if (name && email && message) {
        showLoading();

        // Create WhatsApp message with form data
        const whatsappMessage = `Halo Bariz,

Saya ingin menghubungi Anda dengan detail berikut:

Nama: ${name}
Email: ${email}
No. WhatsApp: ${phone || 'Tidak diisi'}

Pesan:
${message}

Mohon respon dan informasi lebih lanjut. Terima kasih.`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/628895673306?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        showNotification('Membuka WhatsApp untuk mengirim pesan...', 'success');

        // Reset form
        contactForm.reset();

        // Hide loading after a short delay
        setTimeout(() => {
            hideLoading();
        }, 1000);
    } else {
        showNotification('Harap lengkapi semua field yang wajib diisi!', 'error');
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Header scroll effect
function handleHeaderScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// Escape key handler
function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeCartModal();
        closeProductModalFunc();
    }
}

// Cart functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.inStock) {
        const existingItem = cart.find(item => item.id === productId);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }

        updateCartCount();
        updateCartTotal();
        showAddToCartAnimation();
        showNotification(`${product.name} berhasil ditambahkan ke keranjang!`, 'success');
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartTotal();
    updateCartDisplay();
    showNotification('Produk dihapus dari keranjang', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            updateCartTotal();
            updateCartDisplay();
        }
    }
}

function updateCartCount() {
    cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

function updateCartTotal() {
    cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    if (cartTotalElement) {
        cartTotalElement.textContent = cartTotal.toLocaleString('id-ID');
    }
}

function updateCartDisplay() {
    if (cartItems) {
        cartItems.innerHTML = cart.length > 0 ? cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-image">
                        <img src="${item.images[0]}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <i class="fas fa-shopping-bag" style="display: none;"></i>
                    </div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>Rp ${item.price.toLocaleString('id-ID')}</p>
                    </div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span style="margin: 0 10px; font-weight: 600;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('') : `
            <div style="text-align: center; padding: 2rem; color: #7f8c8d;">
                <i class="fas fa-shopping-bag" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <p>Keranjang belanja kosong</p>
                <button class="view-details" onclick="closeCartModal(); scrollToSection('products')" 
                        style="margin-top: 1rem;">
                    Mulai Belanja
                </button>
            </div>
        `;

        // Update checkout button state
        checkoutBtn.disabled = cart.length === 0;
    }
}

function openCart() {
    updateCartDisplay();
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}


function proceedToWhatsApp() {
    if (cart.length === 0) {
        showNotification('Keranjang belanja kosong!', 'error');
        return;
    }

    showLoading();

    // Simulate checkout process
    setTimeout(() => {
        hideLoading();

        // Create order summary
        const orderSummary = cart.map(item =>
            `${item.name} (${item.quantity}x) - Rp ${(item.price * item.quantity).toLocaleString('id-ID')}`
        ).join('\n');

        const totalAmount = cartTotal.toLocaleString('id-ID');

        // Create WhatsApp message (lebih formal & jelas)
        const message = `Halo Bariz,
Saya ingin memesan produk dengan rincian sebagai berikut:

${orderSummary}

Total pembayaran: Rp ${totalAmount}

Data pemesan:
Nama:
Alamat:
No. HP:

Mohon konfirmasi ketersediaan produk dan metode pembayaran. Terima kasih.`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/628895673306?text=${encodedMessage}`;

        // Open WhatsApp
        // iOS/Safari sering memblokir window.open berbasis interaksi; gunakan anchor trigger yang lebih aman.
        const a = document.createElement('a');
        a.href = whatsappUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        document.body.appendChild(a);
        a.click();
        a.remove();

        showNotification('Membuka WhatsApp untuk konfirmasi pesanan...', 'success');


        // Clear cart after checkout
        cart = [];
        updateCartCount();
        updateCartTotal();
        closeCartModal();
    }, 2000);
}


// Product Modal functions

function openProductModal(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        window.currentProduct = product; // Store for thumbnail clicks
        showLoading();

        setTimeout(() => {
            productModalBody.innerHTML = `
                <div class="product-modal-images">
                    <div class="product-modal-main-image">
                        <img src="${product.images[0]}" id="mainProductImage" alt="${product.name}">
                    </div>
                    <div class="product-modal-thumbnails">
                        ${product.images.map((image, index) => `
                            <div class="product-modal-thumbnail ${index === 0 ? 'active' : ''}" onclick="changeProductImage(${index + 1})">
                                <img src="${image}" alt="${product.name} ${index + 1}" data-index="${index}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="product-modal-details">
                    <h2>${product.name}</h2>
                    <div class="product-modal-price">
                        ${typeof product.price === 'number' ? `Rp ${product.price.toLocaleString('id-ID')}` : product.price}
                        ${typeof product.originalPrice === 'number' && typeof product.price === 'number' && product.originalPrice > product.price ? `
                            <span class="original-price">Rp ${product.originalPrice.toLocaleString('id-ID')}</span>
                        ` : ''}
                    </div>
                    
                    <p class="product-modal-description">${product.description}</p>
                    
                    <div class="product-modal-features">
                        <h4>Spesifikasi Produk</h4>
                        <ul>
                            ${Object.entries(product.features).map(([key, value]) => `
                                <li>
                                    <span class="feature-label">${key}:</span>
                                    <span class="feature-value">${value}</span>
                                </li>
                            `).join('')}
                            <li>
                                <span class="feature-label">Stok:</span>
                                <span class="feature-value" style="color: ${product.inStock ? '#27ae60' : '#e74c3c'}; font-weight: 600;">
                                    ${product.inStock ? 'Tersedia' : 'Habis'}
                                </span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="product-actions" style="display: flex; gap: 1rem;">
                        <button class="add-to-cart" 
                                onclick="addToCart(${product.id}); closeProductModalFunc();" 
                                style="flex: 2;"
                                ${!product.inStock ? 'disabled' : ''}>
                            <i class="fas fa-shopping-bag"></i>
                            ${product.inStock ? 'Tambah ke Keranjang' : 'Sold Out'}
                        </button>
                        <button class="view-details" onclick="closeProductModalFunc()" style="flex: 1;">
                            <i class="fas fa-times"></i> Tutup
                        </button>
                    </div>
                </div>
            `;

            productModal.style.display = 'block';
            // document.body.style.overflow = 'hidden';
            hideLoading();
        }, 500);
    }
}

function changeProductImage(index) {
    const thumbnails = document.querySelectorAll('.product-modal-thumbnail');
    const product = window.currentProduct; // Store current product globally
    
    // Update main image
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage && product && product.images[index]) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = product.images[index];
            mainImage.style.opacity = '1';
        }, 200);
    }

    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function closeProductModalFunc() {
    productModal.style.display = 'none';
    // document.body.style.overflow = 'auto';
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function showAddToCartAnimation() {
    // Add visual feedback
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 300);
    }
}

function showLoading() {
    if (loadingSpinner) {
        loadingSpinner.style.display = 'flex';
    }
}

function hideLoading() {
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }
}

function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'info': 'info-circle',
        'warning': 'exclamation-triangle'
    };
    return icons[type] || 'info-circle';
}

// Initialize animations when page loads
window.addEventListener('load', function () {
    document.body.classList.add('loaded');

    // Add some interactive effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.product-card, .about-content, .contact-item, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Export functions for global access
window.scrollToSection = scrollToSection;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openProductModal = openProductModal;
window.closeProductModalFunc = closeProductModalFunc;
