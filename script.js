// Sample product data with categories
const products = [
    // Floral (Totebag Lukisan Asli) - 10 items
    {
        id: 1,
        name: "Suasana Candi Prambanan",
        description: "Totebag lukisan asli bertema Suasana Candi Prambanan yang merepresentasikan ikon budaya Jawa. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/1.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "sakura", "romantic"]
    },
    {
        id: 2,
        name: "Kreaton Solo",
        description: "Totebag lukisan asli bertema Kraton Solo yang merepresentasikan ikon budaya dan sejarah Jawa. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/2.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "rose", "passion"]
    },
    {
        id: 3,
        name: "Suasana Kali Code",
        description: "Totebag lukisan asli bertema Suasana Kali Code yang menampilkan keindahan flora dalam karya seni. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/3.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "tulip", "cheerful"]
    },
    {
        id: 4,
        name: "Makam Raja Mataram",
        description: "Totebag lukisan asli bertema Makam Raja Mataram yang merepresentasikan nilai sejarah dan budaya Jawa. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/4.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "lavender", "calming"]
    },
    {
        id: 5,
        name: "Pasar Beringharjo",
        description: "Totebag lukisan asli bertema Pasar Beringharjo yang merepresentasikan aktivitas dan budaya khas Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/5.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "sunflower", "joyful"]
    },
    {
        id: 6,
        name: "Pasar Kota Gede",
        description: "Totebag lukisan asli bertema Pasar Kota Gede yang merepresentasikan suasana dan aktivitas pasar tradisional. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/6.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "orchid", "elegant"]
    },
    {
        id: 7,
        name: "Gereja Gothic Sayidan",
        description: "Totebag lukisan asli bertema Gereja Gothic Sayidan yang merepresentasikan ikon arsitektur dan sejarah kawasan Sayidan. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/7.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "daisy", "fresh"]
    },
    {
        id: 8,
        name: "Suasana Candi Prambanan",
        description: "Totebag lukisan asli bertema Suasana Candi Prambanan yang merepresentasikan keindahan dan nilai sejarah budaya Jawa. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/8.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "peony", "prosperity"]
    },
    {
        id: 9,
        name: "Suasana Kali Code",
        description: "Totebag lukisan asli bertema Suasana Kali Code yang merepresentasikan kehidupan dan lingkungan khas Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/9.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "lily", "graceful"]
    },
    {
        id: 10,
        name: "Chinatown Malioboro",
        description: "Totebag lukisan asli bertema Chinatown Malioboro yang merepresentasikan kawasan budaya dan aktivitas khas Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 500000,
        originalPrice: 600000,
        category: "floral",
        images: ["image/totebag/asli/10.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "42cm x 35cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["floral", "wildflowers", "adventure"]
    },

    // Print (Totebag Print) - 10 items
    {
        id: 11,
        name: "Bahasa Kami",
        description: "Totebag printing bertema Bahasa Kami yang merepresentasikan ekspresi bahasa isyarat. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/bahasa kami/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["best-seller", "floral", "elegant"]
    },
    {
        id: 12,
        name: "Gadis Tuli",
        description: "Totebag printing bertema Gadis Tuli yang menampilkan ekspresi diri dan karakter perempuan Tuli. Cocok untuk penggunaan harian.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/gadis tuli/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["abstract", "modern", "artistic"]
    },
    {
        id: 13,
        name: "Gapura Pecinan Yogyakarta",
        description: "Totebag printing bertema Gapura Pecinan Yogyakarta yang merepresentasikan ikon budaya dan sejarah kota. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/Gapura Pecinan Yogyakarta/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["minimalist", "black-white", "sophisticated"]
    },
    {
        id: 14,
        name: "Kali Code",
        description: "Totebag printing bertema Kali Code yang merepresentasikan kehidupan dan lanskap khas Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/Kali Code/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["vintage", "landscape", "limited-edition"]
    },
    {
        id: 15,
        name: "Makam Raja Mataram",
        description: "Totebag printing bertema Makam Raja Mataram yang merepresentasikan nilai sejarah dan budaya Jawa. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/Makam Raja Mataram/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["ocean", "blue", "calming"]
    },
    {
        id: 16,
        name: "Jalan Maliaboro",
        description: "Totebag printing bertema Jalan Malioboro yang merepresentasikan suasana ikonik pusat kota Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/Maliaboro 1/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["ilustrasi", "kucing", "cute"]
    },
    {
        id: 17,
        name: "Jalan Maliaboro",
        description: "Totebag printing bertema Jalan Malioboro yang merepresentasikan suasana ikonik pusat kota Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/maliaboro 2/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["bahasa", "budaya", "indonesia"]
    },
    {
        id: 18,
        name: "Pinggiran Maliaboro",
        description: "Totebag printing bertema Pinggiran Malioboro yang merepresentasikan sudut khas Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/pinggiran maliaboro/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["malioboro", "yogyakarta", "iconic"]
    },
    {
        id: 19,
        name: "Tugu Pal Putih",
        description: "Totebag printing bertema Tugu Pal Putih yang merepresentasikan ikon dan identitas Kota Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/tugu pal putih/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["borobudur", "temple", "cultural"]
    },
    {
        id: 20,
        name: "Tugu Pal Putih",
        description: "Totebag printing bertema Tugu Pal Putih yang merepresentasikan ikon dan identitas Kota Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 250000,
        originalPrice: 300000,
        category: "print",
        images: ["image/totebag/print/Tugu Pal Putih 1/4.png"],
        features: {
            "Bahan": "Kanvas Blacu Berkualitas",
            "Ukuran": "35cm x 42cm",
            "Teknik": "Printing",
            "Tali": "Jahit kuat",
            "Warna Dasar": "Warna",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["tugu", "yogyakarta", "landmark"]
    },

    // Pouch - 3 items
    {
        id: 21,
        name: "Wisata Yogyakarta",
        description: "Pouch lukisan bertema Wisata Yogyakarta yang merepresentasikan ikon dan ragam destinasi kota Yogyakarta. Cocok digunakan untuk menyimpan barang kecil sehari-hari.",
        price: 100000,
        originalPrice: 120000,
        category: "pouch",
        images: ["image/pouch/5.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "A5",
            "Teknik": "Lukisan tangan oleh seniman Tuli",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Putih / Hitam",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["pouch-lukis", "wisata-yogyakarta", "karya-tuli"]
    },
    {
        id: 21,
        name: "Wisata Yogyakarta",
        description: "Pouch lukisan bertema Wisata Yogyakarta yang merepresentasikan ikon dan ragam destinasi kota Yogyakarta. Cocok digunakan untuk menyimpan barang kecil sehari-hari.",
        price: 100000,
        originalPrice: 120000,
        category: "pouch",
        images: ["image/pouch/5.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "A5",
            "Teknik": "Lukisan tangan oleh seniman Tuli",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Putih / Hitam",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["pouch-lukis", "wisata-yogyakarta", "karya-tuli"]
    },
    {
        id: 21,
        name: "Wisata Yogyakarta",
        description: "Pouch lukisan bertema Wisata Yogyakarta yang merepresentasikan ikon dan ragam destinasi kota Yogyakarta. Cocok digunakan untuk menyimpan barang kecil sehari-hari.",
        price: 100000,
        originalPrice: 120000,
        category: "pouch",
        images: ["image/pouch/5.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "A5",
            "Teknik": "Lukisan tangan oleh seniman Tuli",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Putih / Hitam",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["pouch-lukis", "wisata-yogyakarta", "karya-tuli"]
    },

    // Masker - 4 items
    {
        id: 31,
        name: "Masker Ilustrasi Abstrak",
        description: "Masker kain bertema ilustrasi abstrak yang dicetak dari karya seni sebagai bagian dari produk kreatif Bariz. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 45000,
        originalPrice: 55000,
        category: "masker",
        images: ["image/masker/masker ilustrasi/abstrak/1.png"],
        features: {
            "Bahan": "Katun 3 lapis",
            "Ukuran": "17cm x 10cm",
            "Teknik": "Printing dari karya ilustrasi",
            "Tali": "Karet elastis",
            "Warna Dasar": "Putih / Sesuai desain",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["masker", "ilustrasi", "karya-tuli"]
    },
    {
        id: 32,
        name: "Masker Bahasa Kami",
        description: "Masker kain bertema Bahasa Kami yang merepresentasikan ekspresi bahasa isyarat sebagai identitas komunitas Tuli. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 42000,
        originalPrice: 52000,
        category: "masker",
        images: ["image/masker/masker print/Bahasa Kami/2.png"],
        features: {
            "Bahan": "Katun 3 lapis",
            "Ukuran": "17cm x 10cm",
            "Teknik": "Printing dari karya ilustrasi",
            "Tali": "Karet elastis",
            "Warna Dasar": "Putih / Sesuai desain",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["masker", "bahasa-isyarat", "karya-tuli"]
    },
    {
        id: 33,
        name: "Masker Makam Raja Mataram",
        description: "Masker kain bertema Makam Raja Mataram yang merepresentasikan nilai sejarah dan budaya Jawa. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 38000,
        originalPrice: 48000,
        category: "masker",
        images: ["image/masker/masker print/Makam Raja Mataram Kota Gede/3.png"],
        features: {
            "Bahan": "Katun 3 lapis",
            "Ukuran": "17cm x 10cm",
            "Teknik": "Printing dari karya ilustrasi",
            "Tali": "Karet elastis",
            "Warna Dasar": "Putih / Sesuai desain",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["masker", "budaya", "karya-tuli"]
    },
    {
        id: 34,
        name: "Masker Taman Sari",
        description: "Masker kain bertema Taman Sari yang merepresentasikan ikon sejarah dan budaya Yogyakarta. Cocok digunakan untuk aktivitas sehari-hari.",
        price: 48000,
        originalPrice: 58000,
        category: "masker",
        images: ["image/masker/masker Print/Taman Sari/4.png"],
        features: {
            "Bahan": "Katun 3 lapis",
            "Ukuran": "17cm x 10cm",
            "Teknik": "Printing dari karya ilustrasi",
            "Tali": "Karet elastis",
            "Warna Dasar": "Putih / Sesuai desain",
            "Perawatan": "Disarankan cuci manual"
        },
        inStock: true,
        tags: ["masker", "taman-sari", "karya-tuli"]
    },

    // Lukisan Asli (Karya Lukisan) - 1 item
    {
        id: 40,
        name: "Hotel Tugu Series",
        description: "Karya ini mengeksplorasi arsitektur monumental Hotel Tugu sebagai saksi hidup yang berdialog dengan denyut kehidupan urban kontemporer. Melalui lapisan cat transparan yang mempertahankan ingatan visual, lukisan ini merangkai metafora mendalam tentang stratifikasi sejarah sebuah kota.",
        price: 5000000,
        originalPrice: 6000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/1.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "40cm x 50cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 41,
        name: "Prambanan Series",
        description: "Karya ini mengeksplorasi dialektika antara monumentalitas arsitektur Candi Prambanan dan pusaran energi spiritual yang terus beresonansi di dalamnya. Struktur geometris yang kokoh berdialog dengan medan cahaya dinamis, menghadirkan ketegangan indah antara permanensi bentuk dan fluiditas spiritual.",
        price: 5000000,
        originalPrice: 6000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/2.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "40cm x 50cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 42,
        name: "City Threshold",
        description: "Karya ini memaknai gerbang kota sebagai titik pertemuan dinamis antara warisan arsitektur tradisional dan ritme kehidupan kontemporer. Ambang batas ini ditangkap melalui lapisan tekstur padat, menghadirkan esensi transisi urban sebagai ekosistem hidup yang terus berevolusi.",
        price: "Sold",
        originalPrice: "Sold",
        category: "lukisan",
        images: ["image/karya lukisan asli/3.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "40cm x 40cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: false,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 43,
        name: "Nocturnal Urbanity",
        description: "Karya ini mengeksplorasi kepadatan urban dan ritme visual kota yang tak pernah tidur melalui sapuan gestur ekspresif yang intens. Denyut nadi kehidupan malam direkam dalam lapisan warna berani, memancarkan energi kolektif dari sebuah harmoni pergerakan konstan.",
        price: 7500000,
        originalPrice: 8000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/4.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "60cm x 80cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 44,
        name: "Urban Metabolism",
        description: "Karya ini memetakan sirkulasi jaringan urban untuk memvisualisasikan hiruk-pikuk kota layaknya sebuah organisme hidup yang terus bernapas dan beregenerasi. Kontras antara arsitektur kolonial dan denyut pembangunan kontemporer merepresentasikan ekologi perkotaan tempat segala sesuatu senantiasa runtuh dan bertumbuh.",
        price: 20000000,
        originalPrice: 21000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/5.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "140cm x 85cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 45,
        name: "Between Two Gates",
        description: "Karya ini menyajikan rekonstruksi visual dramatis tentang konfrontasi sejarah antara kedaulatan tradisional dan kekuatan kolonial yang berbenturan keras. Melalui komposisi tegas dan elemen anakronistik, lukisan ini merangkai narasi waktu berlapis tentang kegigihan perlawanan yang melampaui sejarah spesifik.",
        price: 20000000,
        originalPrice: 21000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/6.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "140cm x 85cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 46,
        name: "Collective Navigation",
        description: "Karya ini menghadirkan metafora visual memukau tentang perjalanan kolektif yang berani menembus batas-batas keragaman budaya Nusantara. Berbagai figur tradisional dan kontemporer bersatu dalam perahu simbolis, menggemakan narasi harmoni serta solidaritas sebagai kekuatan abadi dalam menghadapi dinamika zaman.",
        price: 20000000,
        originalPrice: 21000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/7.png"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "140cm x 85cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 47,
        name: "Ethical Dualities",
        description: "Karya ini mengeksplorasi dikotomi etika melalui representasi dua kekuatan mitologis berlawanan yang berbenturan dalam sebuah ketegangan dinamis. Figur simbolik kebajikan dan kegelapan menyatu untuk menciptakan metafora visual yang mendalam tentang konflik batin yang terus bergema dalam jiwa manusia.",
        price: 10000000,
        originalPrice: 11000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/8.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "60cm x 80cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 48,
        name: "Cultural Memory",
        description: "Karya ini mengeksplorasi kedalaman memori kultural melalui sosok feminin elegan yang berdialog dengan keanggunan arsitektur historis. Sapuan garis ekspresif dan perpaduan media yang dinamis menciptakan narasi rekonstruksi visual yang menghidupkan kembali identitas masa lalu sebagai pijakan kultural kini.",
        price: 10000000,
        originalPrice: 11000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/9.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "60cm x 80cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 49,
        name: "Market Pulse",
        description: "Karya ini merekam denyut pasar tradisional sebagai ekosistem kehidupan kolektif yang tak henti digerakkan oleh dinamika interaksi sosial dan ekonomi rakyat. Melalui komposisi padat dan garis ekspresif, kanvas ini mengabadikan kehangatan humanisme dan keaslian denyut budaya lokal.",
        price: 75000000,
        originalPrice: 80000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/10.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "50cm x 80cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 50,
        name: "Cultural Sanctuary",
        description: "Karya ini merenungkan hubungan simbiosis harmonis antara warisan arsitektural purba dan kedamaian kehidupan agraris yang mengitarinya. Pemukiman di kaki candi digambarkan sebagai ruang hidup yang bernaung secara spiritual, menciptakan narasi abadi tentang kontinuitas budaya masa lalu dan kini.",
        price: 15000000,
        originalPrice: 16000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/11.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "70cm x 100cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 51,
        name: "Fungal Fantasy",
        description: "Karya ini menyajikan eksplorasi imajinatif tentang ekosistem jamur fantastis yang mempesona, dihuni oleh berbagai entitas magis yang tersembunyi. Melalui detail alam yang imersif, lukisan ini merangkai dunia alternatif yang menawarkan penyegaran tematik jauh dari kebisingan narasi urban.",
        price: 20000000,
        originalPrice: 21000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/12.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "100cm x 130cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 52,
        name: "Agrarian Vista",
        description: "Karya ini mengeksplorasi lanskap agraris dan arsitektur vernakular dengan palet monokromatik atmosferik yang memancarkan ketenangan mendalam. Tarian sawah yang meliuk dan pegunungan pelindung merajut harmoni visual sempurna yang merepresentasikan kedamaian hidup pedesaan yang sejati.",
        price: 3500000,
        originalPrice: 4000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/13.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "50cm x 60cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 53,
        name: "Cultural Landscape",
        description: "Karya ini merangkai sintesis visual agung yang menyatukan arsitektur monumental, bentang lanskap agraris, dan kehangatan hunian vernakular. Menempatkan struktur bersejarah sebagai penjaga kehidupan kontemporer, lukisan ini menuturkan sebuah epos visual abadi tentang kesinambungan warisan budaya lintas zaman.",
        price: 3500000,
        originalPrice: 4000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/14.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "50cm x 60cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 54,
        name: "Faith Tapestry",
        description: "Karya ini menelusuri keberagaman religius Nusantara melalui pendekatan kolase kanvas yang kaya akan tekstur inovatif dan berlapis. Potongan material yang membentuk harmoni mozaik tempat ibadah melahirkan metafora visual bertenaga tentang indahnya kesatuan jiwa di tengah lautan perbedaan.",
        price: 10000000,
        originalPrice: 11000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/15.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "65cm x 86cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    },
    {
        id: 55,
        name: "BISINDO at Home",
        description: "Karya ini mengarahkan lensa naratif ke ranah privat untuk merepresentasikan bagaimana identitas bahasa isyarat dibentuk dan dirawat di dalam kehangatan keluarga. Sentuhan personal ini menandai perkembangan batin sang seniman, bergerak dari advokasi publik menuju kedekatan interpersonal.",
        price: 20000000,
        originalPrice: 21000000,
        category: "lukisan",
        images: ["image/karya lukisan asli/16.jpg"],
        features: {
            "Bahan": "Kanvas Bandung",
            "Ukuran": "100cm x 100cm",
            "Teknik": "Lukisan tangan dengan cat akrilik",
            "Finishing": "Dilapisi pilox clear",
            "Warna Dasar": "Warna",
            "Perawatan": "Hindari sinar matahari langsung"
        },
        inStock: true,
        tags: ["lukisan", "karya-tuli", "orisinal"]
    }
];

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
    loadProducts('lukisan', true); // Pass true to indicate initial load
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
    checkoutBtn.addEventListener('click', proceedToCheckout);

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


function proceedToCheckout() {
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
        const whatsappUrl = `https://wa.me/6282325612511?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

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
        showLoading();

        setTimeout(() => {
            productModalBody.innerHTML = `
                <div class="product-modal-images">
                    <div class="product-modal-main-image">
                        <img src="${product.images[0]}" id="mainProductImage" alt="${product.name}">
                    </div>
                    <div class="product-modal-thumbnails">
                        ${product.images.map((image, index) => `
                            <div class="product-modal-thumbnail ${index === 0 ? 'active' : ''}" onclick="changeProductImage('${image}', this)">
                                <img src="${image}" alt="${product.name} ${index + 1}">
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

function changeProductImage(src, element) {
    // Update main image
    const mainImage = document.getElementById('mainProductImage');
    if (mainImage) {
        mainImage.style.opacity = '0';
        setTimeout(() => {
            mainImage.src = src;
            mainImage.style.opacity = '1';
        }, 200);
    }

    // Update active thumbnail
    document.querySelectorAll('.product-modal-thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    element.classList.add('active');
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