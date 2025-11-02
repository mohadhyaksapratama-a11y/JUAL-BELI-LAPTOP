// ===================================================================================
// FILE: data.js
// Pusat data untuk seluruh website.
// ===================================================================================

const products = [
  {
    id: 1,
    name: "WorkPlus X1",
    category: "work",
    image: "images/produk-workplus-x1.jpg",
    shortSpecs: "Intel i7-Gen 12, 16GB RAM, 1TB NVMe SSD",
    price: "15,999,000",
    description:
      "Ultrabook premium untuk para profesional. Ditenagai prosesor Intel® Core™ i7 Generasi ke-12 yang kencang, WorkPlus X1 menawarkan performa luar biasa dalam sasis magnesium-alloy yang tipis dan ringan.",
    keyFeatures: [
      "Layar OLED 2.8K 90Hz dengan warna akurat.",
      "Desain ultra-tipis dan ringan (1.2 kg).",
      "Daya tahan baterai hingga 14 jam.",
      "Dilengkapi 2 port Thunderbolt 4 super cepat.",
    ],
    fullSpecs: {
      Prosesor: "Intel® Core™ i7-12700H",
      Grafis: "Intel® Iris® Xe Graphics",
      Memori: "16 GB LPDDR5 RAM",
      Penyimpanan: "1 TB PCIe Gen4 NVMe SSD",
      Layar: "14-inci 2.8K OLED, 90Hz",
      Berat: "1.2 kg",
    },
    videoUrl: "https://www.youtube.com/embed/hMy3m_L24p0",
    driverUrl: "#",
    serialPrefix: "XYZW1-",
    reviews: [
      {
        author: "Andi P.",
        rating: 5,
        text: "Layar OLED-nya luar biasa, sangat tajam untuk editing foto. Tipis dan ringan, performa juga kencang. Sangat direkomendasikan!",
      },
      {
        author: "Citra L.",
        rating: 4,
        text: "Baterainya awet banget untuk kerja seharian. Sedikit panas saat menjalankan aplikasi berat, tapi masih wajar.",
      },
    ],
  },
  {
    id: 2,
    name: "PIXWAR GFX Pro",
    category: "gaming",
    image: "images/produk-pixwar-gfx-pro.jpg",
    shortSpecs: "AMD Ryzen 9, RTX 4070, 32GB RAM, 2TB SSD",
    price: "32,499,000",
    description:
      "Mesin gaming tanpa kompromi. PIXWAR GFX Pro ditenagai prosesor AMD Ryzen™ 9 dan GPU NVIDIA® GeForce RTX™ 4070 untuk memainkan game AAA pada pengaturan tertinggi.",
    keyFeatures: [
      "Performa Ekstrem dari CPU AMD Ryzen 9 & GPU RTX 4070.",
      "Layar QHD+ 240Hz dengan G-Sync super mulus.",
      "Sistem pendingin Vapor Chamber canggih.",
      "Keyboard mekanik per-key RGB yang responsif.",
    ],
    fullSpecs: {
      Prosesor: "AMD Ryzen™ 9 7945HX",
      Grafis: "NVIDIA® GeForce RTX™ 4070 8GB GDDR6",
      Memori: "32 GB DDR5 RAM",
      Penyimpanan: "2 TB PCIe Gen4 SSD",
      Layar: "16-inci QHD+ 240Hz, G-Sync",
      Berat: "2.5 kg",
    },
    videoUrl: "https://www.youtube.com/embed/U2b-sD2d7MA",
    driverUrl: "#",
    serialPrefix: "XYZP2-",
    reviews: [
      {
        author: "Reza Gaming",
        rating: 5,
        text: "Monster! Semua game AAA libas rata kanan. Layar 240Hz-nya bikin beda banget di game kompetitif. Worth every penny!",
      },
      {
        author: "Budi S.",
        rating: 5,
        text: "Selain buat main game, rendering video di laptop ini juga cepet banget. Sistem pendinginnya juga juara.",
      },
    ],
  },
  {
    id: 3,
    name: "360 Stylus Flip",
    category: "creative",
    image: "images/produk-360-stylus-flip.jpg",
    shortSpecs: "Intel i5-Gen 13, 8GB RAM, 512GB SSD, Layar Sentuh",
    price: "12,799,000",
    description:
      "Laptop 2-in-1 serbaguna untuk kreativitas tanpa batas. Dengan engsel 360 derajat, Anda bisa mengubahnya dari laptop menjadi tablet dalam sekejap.",
    keyFeatures: [
      "Engsel Fleksibel 360° yang memungkinkan 4 mode penggunaan: laptop, tablet, tenda, dan stand.",
      "Layar Sentuh Responsif dengan dukungan Active Stylus untuk menggambar dan menulis secara natural.",
      "Desain Ringan dan Portabel, cocok untuk produktivitas di mana saja.",
      "Prosesor Intel Core i5 Generasi ke-13 yang efisien untuk multitasking harian.",
    ],
    fullSpecs: {
      Prosesor: "Intel® Core™ i5-1340P",
      Grafis: "Intel® Iris® Xe Graphics",
      Memori: "8 GB LPDDR4x RAM",
      Penyimpanan: "512 GB PCIe NVMe SSD",
      Layar: "13.3-inci FHD IPS Touchscreen",
      Fitur: "Termasuk Active Stylus, Pembaca Sidik Jari",
      Berat: "1.3 kg",
    },
    videoUrl: "https://www.youtube.com/embed/a6__Q2q3_o8",
    driverUrl: "#",
    serialPrefix: "XYZS3-",
    reviews: [],
  },
  {
    id: 4,
    name: "LiteBook Air",
    category: "work",
    image: "images/produk-litebook-air.jpg",
    shortSpecs: "Intel i5-1235U, 16GB RAM, 512GB SSD",
    price: "11,500,000",
    description:
      "Mobilitas dan keanggunan bertemu di LiteBook Air. Didesain untuk pelajar dan profesional yang selalu bergerak, laptop ini memiliki berat hanya 990 gram.",
    keyFeatures: [
      "Sangat Ringan dengan berat hanya 990 gram, mudah dibawa dalam tas.",
      "Daya Tahan Baterai Luar Biasa hingga 15 jam pemakaian.",
      "Bodi Magnesium-Alloy yang premium dan kokoh.",
      "Dilengkapi port Thunderbolt 4 untuk konektivitas super cepat.",
    ],
    fullSpecs: {
      Prosesor: "Intel® Core™ i5-1235U",
      Grafis: "Intel® Iris® Xe Graphics",
      Memori: "16 GB LPDDR4x RAM",
      Penyimpanan: "512 GB PCIe NVMe SSD",
      Layar: "13.3-inci FHD IPS Anti-Glare",
      Fitur: "Thunderbolt 4, Backlit Keyboard",
      Berat: "0.99 kg",
    },
    videoUrl: "https://www.youtube.com/embed/LVwmtwZLG88",
    driverUrl: "#",
    serialPrefix: "XYZL4-",
    reviews: [],
  },
  {
    id: 5,
    name: "Creator Studio 16",
    category: "creative",
    image: "images/produk-creator-studio-16.jpg",
    shortSpecs: "Intel i9-13900HX, RTX 4080, 32GB RAM, 2TB SSD",
    price: "45,999,000",
    description:
      "Workstation mobile untuk para kreator konten profesional. Creator Studio 16 adalah monster performa, berkat prosesor Intel Core i9 HX-series dan GPU NVIDIA RTX 4080.",
    keyFeatures: [
      "Layar 4K Mini-LED dengan akurasi warna Delta E < 1, krusial untuk desainer profesional.",
      "Performa Kelas Desktop dari Intel Core i9 HX-Series dan NVIDIA RTX 4080.",
      "Sistem Pendingin Canggih dengan 3 kipas untuk menjaga performa rendering yang stabil.",
      "Dilengkapi Dial Kustom yang dapat diprogram untuk alur kerja kreatif yang lebih cepat.",
    ],
    fullSpecs: {
      Prosesor: "Intel® Core™ i9-13900HX",
      Grafis: "NVIDIA® GeForce RTX™ 4080 12GB GDDR6",
      Memori: "32 GB DDR5 RAM",
      Penyimpanan: "2 TB PCIe Gen4 NVMe SSD",
      Layar: "16-inci 4K Mini-LED, 120Hz",
      Fitur: "SD Card Reader, Dial Kustom",
      Berat: "2.4 kg",
    },
    videoUrl: "https://www.youtube.com/embed/N6-4-V_I7p0",
    driverUrl: "#",
    serialPrefix: "XYZC5-",
    reviews: [],
  },
  {
    id: 6,
    name: "PIXWAR Edge 15",
    category: "gaming",
    image: "images/produk-pixwar-edge-15.jpg",
    shortSpecs: "AMD Ryzen 7, RTX 4060, 16GB RAM, 1TB SSD",
    price: "21,899,000",
    description:
      "Keseimbangan sempurna antara harga dan performa gaming. PIXWAR Edge 15 membawa kekuatan prosesor AMD Ryzen 7 dan GPU RTX 4060.",
    keyFeatures: [
      "Kombinasi Harga/Performa Terbaik untuk gaming 1440p.",
      "Layar QHD 165Hz memberikan visual yang tajam dan keunggulan kompetitif.",
      "Desain Agresif dengan 4-Zone RGB Keyboard.",
      "Teknologi Audio Hi-Res untuk pengalaman suara yang imersif.",
    ],
    fullSpecs: {
      Prosesor: "AMD Ryzen™ 7 7840HS",
      Grafis: "NVIDIA® GeForce RTX™ 4060 8GB GDDR6",
      Memori: "16 GB DDR5 RAM",
      Penyimpanan: "1 TB PCIe Gen4 NVMe SSD",
      Layar: "15.6-inci QHD 165Hz, FreeSync",
      Fitur: "4-Zone RGB Keyboard, Wi-Fi 6E",
      Berat: "2.2 kg",
    },
    videoUrl: "https://www.youtube.com/embed/Pysti_aK4yE",
    driverUrl: "#",
    serialPrefix: "XYZE6-",
    reviews: [],
  },
  {
    id: 7,
    name: "Essential C14",
    category: "work",
    image: "images/produk-essential-c14.jpg",
    shortSpecs: "Intel i3-1215U, 8GB RAM, 256GB SSD",
    price: "6,499,000",
    description:
      "Laptop andal untuk kebutuhan sehari-hari. Essential C14 dirancang untuk pelajar dan pengguna rumahan yang membutuhkan perangkat terjangkau untuk browsing dan aplikasi office.",
    keyFeatures: [
      "Harga Sangat Terjangkau untuk komputasi harian.",
      "Kinerja Responsif berkat penyimpanan SSD NVMe.",
      "Konektivitas Lengkap termasuk USB-C dan HDMI.",
      "Webcam Privacy Shutter untuk keamanan privasi Anda.",
    ],
    fullSpecs: {
      Prosesor: "Intel® Core™ i3-1215U",
      Grafis: "Intel® UHD Graphics",
      Memori: "8 GB DDR4 RAM",
      Penyimpanan: "256 GB PCIe NVMe SSD",
      Layar: "14-inci FHD Anti-Glare",
      Fitur: "USB-C, HDMI, Webcam Shutter",
      Berat: "1.5 kg",
    },
    videoUrl: "https://www.youtube.com/embed/XSAJRBwb_1k",
    driverUrl: "#",
    serialPrefix: "XYZC7-",
    reviews: [],
  },
  {
    id: 8,
    name: "WorkPlus Z16",
    category: "work",
    image: "images/produk-workplus-z16.jpg",
    shortSpecs: "Intel i7-1360P, 16GB RAM, 1TB SSD",
    price: "19,999,000",
    description:
      "Produktivitas bisnis di level tertinggi. WorkPlus Z16 memberikan layar 16 inci yang luas dengan rasio aspek 16:10 dalam bodi yang tetap ramping.",
    keyFeatures: [
      "Layar 16:10 yang memberikan ruang kerja vertikal lebih luas untuk produktivitas.",
      "Fitur Keamanan Kelas Bisnis: Fingerprint Reader, Kamera IR, dan chip TPM 2.0.",
      "Keyboard Ergonomis dengan travel distance yang nyaman untuk mengetik lama.",
      "Desain Ramping dan Ringan untuk laptop berukuran 16 inci.",
    ],
    fullSpecs: {
      Prosesor: "Intel® Core™ i7-1360P",
      Grafis: "Intel® Iris® Xe Graphics",
      Memori: "16 GB LPDDR5 RAM",
      Penyimpanan: "1 TB PCIe Gen4 NVMe SSD",
      Layar: "16-inci WUXGA (1920x1200) IPS",
      Fitur: "Kamera IR FHD, Fingerprint Reader",
      Berat: "1.45 kg",
    },
    videoUrl: "https://www.youtube.com/embed/9c55_pgA7G4",
    driverUrl: "#",
    serialPrefix: "XYZZ8-",
    reviews: [],
  },
  {
    id: 9,
    name: "PIXWAR Titan 18",
    category: "gaming",
    image: "images/produk-pixwar-titan-18.jpg",
    shortSpecs: "Intel i9-13980HX, RTX 4090, 64GB RAM, 4TB SSD",
    price: "79,999,000",
    description:
      "Pengganti desktop terbaik untuk para gamer hardcore. PIXWAR Titan 18 adalah puncak rekayasa laptop gaming, mengemas CPU desktop-class dan GPU terkuat, RTX 4090.",
    keyFeatures: [
      "Performa Tertinggi di kelasnya dengan Intel Core i9 HX-Series dan NVIDIA RTX 4090.",
      "Layar Mini-LED 18-inci QHD+ 240Hz untuk pengalaman visual terbaik.",
      "Keyboard Mekanik Cherry MX untuk presisi dan feedback terbaik.",
      "Sistem Pendingin Superior dengan opsi pendingin cair eksternal.",
    ],
    fullSpecs: {
      Prosesor: "Intel® Core™ i9-13980HX",
      Grafis: "NVIDIA® GeForce RTX™ 4090 16GB GDDR6",
      Memori: "64 GB DDR5 RAM",
      Penyimpanan: "4 TB (RAID 0) PCIe Gen4 SSD",
      Layar: "18-inci QHD+ Mini-LED, 240Hz",
      Fitur: "Keyboard Mekanik Cherry MX",
      Berat: "3.3 kg",
    },
    videoUrl: "https://www.youtube.com/embed/pkOjzjB642s",
    driverUrl: "#",
    serialPrefix: "XYZT9-",
    reviews: [],
  },
  {
    id: 10,
    name: "Essential Flex 5",
    category: "creative",
    image: "images/produk-essential-flex-5.jpg",
    shortSpecs: "AMD Ryzen 5, 8GB RAM, 512GB SSD, Layar Sentuh",
    price: "9,899,000",
    description:
      "Fleksibilitas dan performa dengan harga terjangkau. Essential Flex 5 adalah laptop konvertibel yang ditenagai prosesor AMD Ryzen 5 yang efisien dan bertenaga.",
    keyFeatures: [
      "Fleksibilitas 2-in-1 dengan harga terjangkau.",
      "Performa Solid dari CPU AMD Ryzen 5 dengan grafis Radeon terintegrasi.",
      "Penyimpanan SSD Cepat berkapasitas 512 GB.",
      "Dilengkapi USB-C yang mendukung Power Delivery untuk pengisian daya universal.",
    ],
    fullSpecs: {
      Prosesor: "AMD Ryzen™ 5 7530U",
      Grafis: "AMD Radeon™ Graphics",
      Memori: "8 GB DDR4 RAM",
      Penyimpanan: "512 GB PCIe NVMe SSD",
      Layar: "14-inci FHD IPS Touchscreen",
      Fitur: "USB-C Power Delivery, Card Reader",
      Berat: "1.55 kg",
    },
    videoUrl: "https://www.youtube.com/embed/rP523bYZ-g0",
    driverUrl: "#",
    serialPrefix: "XYZF10-",
    reviews: [],
  },
];

const blogPosts = [
  {
    id: 1,
    title: "Cara Memilih Laptop yang Tepat untuk Kebutuhan Anda",
    date: "10 Oktober 2025",
    image: "images/artikel-memilih-laptop.jpg",
    content: `<p>Memilih laptop yang tepat seringkali terasa membingungkan dengan begitu banyak pilihan di pasaran. Kunci utamanya adalah mengidentifikasi kebutuhan utama Anda. Apakah Anda seorang pelajar yang membutuhkan perangkat ringan untuk mencatat, seorang profesional yang memerlukan performa tinggi untuk multitasking berat, atau seorang gamer yang mencari pengalaman visual terbaik? Memahami prioritas akan menyederhanakan proses pemilihan.</p><h3>1. Identifikasi Kebutuhan Utama Anda</h3><p><strong>Untuk Pelajar & Pekerja Kantoran:</strong> Prioritaskan portabilitas (ringan, baterai tahan lama) dan keyboard yang nyaman. Laptop seperti seri LiteBook Air atau Essential C14 kami sudah lebih dari cukup untuk browsing, mengetik, dan aplikasi office.</p><p><strong>Untuk Kreator Konten (Desainer, Editor Video):</strong> Fokus pada layar dengan akurasi warna tinggi, prosesor kuat (Core i7/i9 atau Ryzen 7/9), dan kartu grafis diskrit (NVIDIA RTX). Seri Creator Studio kami dirancang khusus untuk beban kerja ini.</p><p><strong>Untuk Gamer:</strong> Kartu grafis (GPU) adalah raja. Cari laptop dengan GPU seri RTX 4060 ke atas dan layar dengan refresh rate tinggi (minimal 144Hz). Seri PIXWAR kami adalah jawabannya.</p><h3>2. Tentukan Anggaran</h3><p>Anggaran adalah filter paling efektif. Setelah tahu apa yang Anda butuhkan, tentukan batas maksimal yang ingin Anda keluarkan. Ini akan membantu Anda fokus pada model-model yang paling relevan tanpa tergiur dengan fitur yang mungkin tidak Anda perlukan.</p><p>Dengan mempertimbangkan dua faktor utama ini, Anda akan lebih mudah menemukan laptop yang tidak hanya canggih, tetapi benar-benar sesuai dengan gaya hidup dan pekerjaan Anda.</p>`,
  },
  {
    id: 2,
    title: "Kebangkitan AI dalam Komputasi Modern",
    date: "28 September 2025",
    image: "images/artikel-ai-modern.jpg",
    content: `<p>Kecerdasan Buatan (AI) bukan lagi sekadar konsep fiksi ilmiah; ia telah menjadi bagian integral dari komputasi modern yang kita gunakan setiap hari. Dari asisten virtual di ponsel kita hingga algoritma kompleks yang merekomendasikan film, AI secara diam-diam merevolusi cara kita berinteraksi dengan teknologi.</p><h3>Bagaimana AI Bekerja di Laptop Anda?</h3><p>Di laptop modern, AI tidak hanya berada di cloud. Banyak perangkat, termasuk seri WorkPlus terbaru dari XYZ Company, kini dilengkapi dengan NPU (Neural Processing Unit), sebuah chip yang dirancang khusus untuk mengakselerasi tugas-tugas AI. Ini memungkinkan fitur-fitur canggih berjalan langsung di perangkat Anda dengan lebih cepat dan aman.</p><p>Contohnya termasuk: peredam bising cerdas yang menghilangkan suara latar saat rapat online, pengenalan wajah yang lebih instan dan aman, serta optimisasi daya baterai yang mempelajari pola penggunaan Anda. Seiring perkembangannya, AI akan terus membuka kemungkinan baru untuk menjadikan laptop kita lebih personal dan efisien.</p>`,
  },
  {
    id: 3,
    title: "XYZ Company Mengungkap Proses Manufaktur Ramah Lingkungan",
    date: "15 September 2025",
    image: "images/artikel-eco-manufaktur.jpg",
    content: `<p>Sebagai perusahaan teknologi, kami di XYZ Company menyadari tanggung jawab besar yang kami emban terhadap planet ini. Inovasi tidak boleh datang dengan mengorbankan lingkungan. Itulah sebabnya kami dengan bangga mengumumkan serangkaian inisiatif manufaktur ramah lingkungan terbaru kami. Kami telah beralih menggunakan 80% bahan daur ulang untuk sasis laptop seri LiteBook dan WorkPlus kami dan menghilangkan plastik sekali pakai dari semua kemasan produk kami.</p><h3>Langkah Nyata Menuju Keberlanjutan</h3><p><strong>Material Daur Ulang:</strong> Kami telah beralih menggunakan 80% aluminium daur ulang untuk sasis laptop seri LiteBook dan WorkPlus kami. Langkah ini secara signifikan mengurangi jejak karbon yang terkait dengan penambangan dan pemrosesan material baru.</p><p><strong>Kemasan Bebas Plastik:</strong> Kami berkomitmen untuk menghilangkan plastik sekali pakai dari semua kemasan produk kami pada akhir tahun ini. Kotak produk kami kini dibuat dari kertas daur ulang bersertifikat FSC dan dicetak menggunakan tinta kedelai.</p><p>Kami percaya bahwa inovasi dan keberlanjutan dapat berjalan seiring. Dengan memilih produk XYZ Company, Anda tidak hanya mendapatkan teknologi terdepan, tetapi juga turut mendukung masa depan yang lebih hijau.</p>`,
  },
];

// Data baru untuk halaman Dukungan (FAQ)
const faqData = [
  {
    question: "Bagaimana cara mendaftarkan garansi produk saya?",
    answer:
      "Anda dapat mendaftarkan garansi produk Anda secara online melalui halaman <a href='registrasi-garansi.html'>Registrasi Garansi</a>. Cukup isi formulir dengan nama, email, model produk, dan nomor seri Anda. Garansi resmi 2 tahun Anda akan segera aktif.",
  },
  {
    question: "Di mana saya bisa mengunduh driver terbaru?",
    answer:
      "Semua driver, perangkat lunak, dan manual terbaru tersedia di halaman <a href='download-driver.html'>Download Driver & Manual</a>. Silakan pilih model produk Anda untuk melihat daftar file yang tersedia.",
  },
  {
    question: "Berapa lama masa garansi produk XYZ Company?",
    answer:
      "Semua produk laptop XYZ Company dilindungi oleh garansi resmi penuh selama 2 tahun yang mencakup suku cadang dan biaya perbaikan. Pastikan Anda mendaftarkan produk Anda setelah pembelian.",
  },
  {
    question:
      "Laptop saya mengalami masalah, di mana saya bisa memperbaikinya?",
    answer:
      "Kami memiliki pusat servis resmi yang tersebar di beberapa kota. Anda dapat menemukan lokasi terdekat dan informasi kontak di bagian 'Pusat Servis' pada halaman Dukungan atau di halaman <a href='index.html#contact'>Kontak</a> kami.",
  },
  {
    question: "Apakah saya bisa meng-upgrade RAM atau SSD di laptop saya?",
    answer:
      "Sebagian besar laptop kami (terutama seri PIXWAR dan beberapa model WorkPlus) dirancang agar dapat di-upgrade (RAM & SSD). Namun, beberapa model ultrabook (seperti LiteBook Air) mungkin memiliki RAM yang disolder. Harap periksa spesifikasi lengkap produk Anda atau hubungi dukungan teknis kami sebelum melakukan upgrade.",
  },
];
// Helper function to format currency (PENTING untuk main.js)
function formatCurrency(amountString) {
  // Membersihkan string dari titik dan mengganti koma (jika ada) dengan titik untuk parsing
  // Memastikan input adalah string sebelum replace
  const cleanedString = String(amountString || "")
    .replace(/\./g, "")
    .replace(/,/g, ".");
  const number = parseFloat(cleanedString);

  if (isNaN(number)) {
    console.error("Invalid amount string for formatting:", amountString);
    return "Harga tidak valid"; // Atau kembalikan string error yang sesuai
  }

  // Format ke Rupiah
  try {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0, // Umumnya Rupiah tidak pakai desimal
      maximumFractionDigits: 0,
    }).format(number);
  } catch (e) {
    console.error("Error formatting currency:", e, "Amount:", number);
    // Fallback jika Intl gagal (jarang terjadi)
    return "Rp " + number.toLocaleString("id-ID");
  }
}
