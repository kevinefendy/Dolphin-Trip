import type { Trip, TestimonialItem, GalleryItem } from '../types';

export const TRIPS_DATA: Trip[] = [
  {
    id: 'bromo-escape',
    title: 'Paket Wisata Bromo Sunrise & Madakaripura',
    badge: 'Paling Laris',
    tagline: 'Saksikan golden sunrise dari Penanjakan 1 dan jelajahi lautan pasir berbisik dengan armada Jeep 4x4.',
    destination: 'Bromo, Jawa Timur',
    duration: '3 Hari 2 Malam',
    price: 899000,
    priceDisplay: 'Rp 899.000',
    rating: 4.9,
    reviewsCount: 382,
    category: 'open',
    experienceType: 'adventure',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=1000&q=80'
    ],
    departureDates: ['Tiap Akhir Pekan (Jumat - Minggu)', '10 - 12 Okt 2026', '24 - 26 Okt 2026', '07 - 09 Nov 2026'],
    slotsLeft: 6,
    highlights: [
      'Titik Pandang Matahari Terbit Penanjakan 1 / Kingkong Hill',
      'Jeep Hardtop 4x4 Resmi TNBTS Melintasi Lautan Pasir',
      'Kawah Aktif Bromo & Pura Luhur Poten',
      'Bukit Teletubbies & Padang Savana Bromo',
      'Eksplorasi Air Terjun Madakaripura'
    ],
    included: [
      'Transportasi AC Pariwisata dari Surabaya / Malang PP',
      'Sewa Jeep 4x4 Resmi TNBTS',
      'Tiket Masuk Resmi TNBTS & Asuransi Perjalanan',
      'Penginapan 1 Malam di Bromo (Water heater & Wi-Fi)',
      'Makan 3x Sesuai Program & Air Mineral',
      'Pemandu Wisata & Pengemudi Profesional',
      'Dokumentasi Mirrorless & Softcopy File Lengkap'
    ],
    excluded: [
      'Tiket perjalanan ke Malang / Surabaya',
      'Sewa kuda di kawah Bromo',
      'Pengeluaran pribadi & tip kru sukarela'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Penjemputan & Perjalanan ke Sukapura / Cemoro Lawang',
        description: 'Penjemputan di Stasiun atau Bandara Surabaya/Malang. Wisata kuliner khas daerah, perjalanan darat ke penginapan di lereng Bromo, dan istirahat untuk persiapan dini hari.',
        activities: ['Penjemputan di Titik Kumpul', 'Perjalanan ke Penginapan Bromo', 'Masuk Penginapan & Arahan Perjalanan']
      },
      {
        day: 2,
        title: 'Matahari Terbit Emas Bromo & Lautan Pasir',
        description: 'Pukul 02.30 dini hari menaiki Jeep 4x4 menuju puncak Penanjakan. Menikmati detik-detik matahari terbit, dilanjutkan ke Kawah Bromo, Pasir Berbisik, dan Bukit Teletubbies.',
        activities: ['Pemandangan Sunrise Penanjakan', 'Eksplorasi Kawah Bromo', 'Pasir Berbisik', 'Savana Teletubbies']
      },
      {
        day: 3,
        title: 'Air Terjun Madakaripura & Pengantaran Kembali',
        description: 'Sarapan di penginapan, persiapan pulang, lalu melanjutkan kunjungan ke Air Terjun Madakaripura. Singgah di pusat oleh-oleh sebelum diantar kembali ke stasiun/bandara.',
        activities: ['Trekking Madakaripura', 'Wisata Belanja Oleh-Oleh', 'Pengantaran ke Bandara / Stasiun']
      }
    ]
  },
  {
    id: 'labuan-bajo',
    title: 'Paket Sailing Labuan Bajo & Komodo Liveaboard',
    badge: 'Paket Favorit',
    tagline: 'Berlayar dengan Kapal Phinisi ber-AC, trekking di Pulau Padar, dan snorkeling bersama Manta Ray.',
    destination: 'Labuan Bajo, Flores, NTT',
    duration: '4 Hari 3 Malam',
    price: 2900000,
    priceDisplay: 'Rp 2.900.000',
    rating: 4.95,
    reviewsCount: 512,
    category: 'open',
    experienceType: 'pantai',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    ],
    departureDates: ['Setiap Jumat - Senin', '17 - 20 Okt 2026', '24 - 27 Okt 2026', '31 Okt - 03 Nov 2026'],
    slotsLeft: 4,
    highlights: [
      'Liveaboard Kapal Phinisi Semi/Luxury Cabin AC',
      'Trekking Puncak Pulau Padar 3 Teluk',
      'Taman Nasional Komodo Bersama Ranger Resmi',
      'Snorkeling di Pink Beach & Taka Makassar',
      'Berenang Bersama Manta Ray di Manta Point',
      'Sunset Kalong Island Ribuan Kelelawar'
    ],
    included: [
      'Kapal Phinisi Cabin AC 3 Hari 2 Malam di Laut',
      'Hotel 1 Malam di Darat Labuan Bajo Bintang 3',
      'Konsumsi Penuh Selama di Kapal (Makan 3x sehari oleh Chef)',
      'Air Mineral, Teh, & Kopi Sepuasnya',
      'Peralatan Snorkeling & Pelampung (Life Jacket) Lengkap',
      'Dokumentasi Drone DJI, GoPro Underwater & Kamera Mirrorless',
      'Pemandu Wisata Bersertifikat HPI & Ranger TN Komodo'
    ],
    excluded: [
      'Tiket pesawat PP ke Bandara Komodo (LBJ)',
      'Tiket masuk TN Komodo (WNI / WNA)',
      'Pengeluaran pribadi & tip kru kapal'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Penjemputan Bandara Komodo & Sunset Bukit Sylvia',
        description: 'Tiba di Bandara Komodo, tim menjemput dan mengantar masuk hotel darat. Sore hari menikmati panorama matahari terbenam di Bukit Sylvia dilanjutkan makan malam hidangan laut.',
        activities: ['Penjemputan Bandara Komodo', 'Masuk Hotel Darat', 'Matahari Terbenam Bukit Sylvia', 'Kuliner Kampung Ujung']
      },
      {
        day: 2,
        title: 'Naik Kapal Phinisi - Pulau Kelor - Manjarite - Kalong',
        description: 'Naik ke kapal Phinisi, berlayar ke Pulau Kelor untuk trekking ringan, snorkeling di Manjarite dengan air sejernih kaca, dan sunset magis di Pulau Kalong.',
        activities: ['Naik Kapal Phinisi', 'Trekking Pulau Kelor', 'Snorkeling Manjarite', 'Sunset Pulau Kalong']
      },
      {
        day: 3,
        title: 'Pulau Padar - Pink Beach - Komodo Dragon - Manta Point',
        description: 'Puncak pengalaman: sunrise spektakuler di Pulau Padar, bermain di pantai pasir merah muda Pink Beach, melihat Komodo langsung di habitat aslinya, lalu snorkeling Manta Point.',
        activities: ['Sunrise Puncak Padar', 'Pink Beach', 'Eksplorasi Komodo Dragon', 'Snorkeling Manta Point']
      },
      {
        day: 4,
        title: 'Taka Makassar - Pulau Kanawa - Pengantaran Bandara',
        description: 'Menikmati gundukan pasir putih Taka Makassar di tengah laut biru toska, snorkeling di terumbu karang Pulau Kanawa, kembali ke dermaga dan pengantaran bandara.',
        activities: ['Gundukan Pasir Taka Makassar', 'Terumbu Karang Pulau Kanawa', 'Kembali ke Dermaga', 'Pengantaran ke Bandara']
      }
    ]
  },
  {
    id: 'lombok-adventure',
    title: 'Paket Wisata Lombok Eksotis & Snorkeling 3 Gili',
    badge: 'Paling Diminati',
    tagline: 'Eksplorasi patung bawah laut Gili Meno, kemegahan Air Terjun Tiu Kelep lereng Rinjani, dan Desa Adat Sade.',
    destination: 'Lombok & Gili, NTB',
    duration: '4 Hari 3 Malam',
    price: 2100000,
    priceDisplay: 'Rp 2.100.000',
    rating: 4.88,
    reviewsCount: 310,
    category: 'open',
    experienceType: 'pantai',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1000&q=80'
    ],
    departureDates: ['Tiap Kamis - Minggu', '16 - 19 Okt 2026', '23 - 26 Okt 2026', '06 - 09 Nov 2026'],
    slotsLeft: 8,
    highlights: [
      'Perahu Kaca Privat Menjelajah 3 Gili',
      'Spot Snorkeling Patung Bawah Laut & Penyu Liar Gili Meno',
      'Trekking Hutan Tropis Air Terjun Tiu Kelep & Sendang Gile',
      'Eksplorasi Desa Adat Sade Suku Sasak',
      'Sunset di Bukit Merese Berlatar Mandalika'
    ],
    included: [
      'Transportasi AC Privat selama wisata di Lombok',
      'Sewa Perahu Kaca Privat Snorkeling 3 Gili',
      'Hotel Resort Bintang 3 di Senggigi / Kuta 3 Malam',
      'Makan Lengkap Menu Khas Termasuk Ayam Taliwang',
      'Seluruh Tiket Masuk Objek Wisata',
      'Dokumentasi Foto GoPro & Kamera Mirrorless',
      'Pemandu Lokal Berlisensi HPI'
    ],
    excluded: [
      'Tiket pesawat ke Lombok (LOP)',
      'Sewa sepeda / Cidomo di Gili Trawangan',
      'Pengeluaran pribadi'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Desa Adat Sade & Sunset Bukit Merese',
        description: 'Penjemputan di Bandara Lombok Praya. Mengunjungi Desa Tenun Sukarara dan Desa Adat Sade Suku Sasak, sore hari di Bukit Merese dan Pantai Tanjung Aan.',
        activities: ['Penjemputan Bandara', 'Desa Sukarara', 'Desa Sade', 'Sunset Bukit Merese']
      },
      {
        day: 2,
        title: 'Petualangan Snorkeling 3 Gili (Trawangan, Meno, Air)',
        description: 'Menyeberang dengan kapal perahu privat. Snorkeling di spot patung lingkaran dasar laut, berenang bersama penyu hijau, dan santai di tepi pantai pasir putih Gili Trawangan.',
        activities: ['Perahu Kaca Privat', 'Spot Patung Gili Meno', 'Spot Penyu', 'Jelajah Gili Trawangan']
      },
      {
        day: 3,
        title: 'Trekking Air Terjun Tiu Kelep Senaru Rinjani',
        description: 'Perjalanan menuju lereng Rinjani di Lombok Utara, menyusuri jalur hutan alami menuju Air Terjun Sendang Gile dan kemegahan tirai air Tiu Kelep.',
        activities: ['Trekking Hutan Tropis', 'Mandi di Tiu Kelep', 'Pemandangan Malimbu', 'Makan Malam Taliwang']
      },
      {
        day: 4,
        title: 'Wisata Belanja Oleh-Oleh & Pengantaran Bandara',
        description: 'Berburu mutiara air laut asli Lombok, madu sumbawa, dan cemilan khas sebelum diantar kembali menuju Bandara Internasional Lombok.',
        activities: ['Pusat Mutiara & Kain Tenun', 'Belanja Oleh-Oleh', 'Pengantaran ke Bandara LOP']
      }
    ]
  },
  {
    id: 'bali-hidden-gems',
    title: 'Paket Wisata Privat Bali Air Terjun Asri & Nusa Penida',
    badge: 'Wisata Privat',
    tagline: 'Nikmati keindahan tebing ikonik Kelingking Nusa Penida dan ketenangan air terjun asri Ubud tanpa terburu-buru.',
    destination: 'Bali & Nusa Penida',
    duration: '4 Hari 3 Malam',
    price: 1750000,
    priceDisplay: 'Rp 1.750.000',
    rating: 4.92,
    reviewsCount: 420,
    category: 'private',
    experienceType: 'budaya',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?auto=format&fit=crop&w=1000&q=80'
    ],
    departureDates: ['Bebas Tentukan Tanggal Sendiri (Privat)'],
    minPax: 2,
    highlights: [
      'Pantai Kelingking & Broken Beach Nusa Penida',
      'Tiket Kapal Cepat Sanur - Nusa Penida PP',
      'Air Terjun Leke-Leke & Pura Ulun Danu Beratan',
      'Mata Air Suci Tirta Empul & Bukit Campuhan Ubud',
      'Makan Malam Hidangan Laut Sunset di Pantai Jimbaran'
    ],
    included: [
      'Mobil Privat Ber-AC, Pengemudi Ramah & BBM',
      'Tiket Kapal Cepat Sanur - Penida PP',
      'Boutique Villa / Hotel Bintang 3-4 di Ubud & Seminyak',
      'Sarapan dan Makan Siang Resto Pilihan',
      'Seluruh Tiket Masuk Wisata',
      'Dokumentasi Foto Selama Perjalanan'
    ],
    excluded: [
      'Tiket pesawat ke Bali (DPS)',
      'Pengeluaran pribadi di luar program'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Penjemputan & Suasana Budaya Ubud',
        description: 'Tiba di Bandara Ngurah Rai, disambut driver profesional. Mengunjungi Tirta Empul Tampaksiring untuk merasakan mata air suci, santai di Bukit Campuhan, check-in villa Ubud.',
        activities: ['Penjemputan Bandara DPS', 'Tirta Empul', 'Bukit Campuhan', 'Masuk Penginapan Villa']
      },
      {
        day: 2,
        title: 'Eksplorasi Nusa Penida Barat (Tebing Kelingking)',
        description: 'Menyeberang kapal cepat ke Nusa Penida. Menikmati keajaiban tebing T-Rex Kelingking Cliff, kolam alami Angels Billabong, dan Broken Beach.',
        activities: ['Kapal Cepat ke Nusa Penida', 'Tebing Kelingking', 'Angels Billabong', 'Broken Beach']
      },
      {
        day: 3,
        title: 'Dataran Tinggi Bedugul & Sunset Jimbaran',
        description: 'Menuju lereng utara ke Air Terjun Leke-Leke yang asri, berfoto di Pura Ulun Danu Danau Beratan, dan menikmati sajian hidangan laut bakar di tepi Pantai Jimbaran.',
        activities: ['Air Terjun Leke-Leke', 'Pura Ulun Danu Beratan', 'Makan Malam Seafood Jimbaran']
      },
      {
        day: 4,
        title: 'Belanja Oleh-Oleh Khas Bali & Pengantaran Bandara',
        description: 'Membeli pie susu dan cinderamata lokal khas Bali, lalu pengantaran kembali ke Bandara Ngurah Rai untuk perjalanan pulang.',
        activities: ['Pusat Oleh-Oleh Krisna', 'Pengantaran ke Bandara DPS']
      }
    ]
  },
  {
    id: 'dieng-plateau',
    title: 'Paket Wisata Dataran Tinggi Dieng & Matahari Terbit Sikunir',
    badge: 'Hemat & Lengkap',
    tagline: 'Rasakan sejuknya negeri di atas awan, pesona Kawah Sikidang, dan sunrise emas Bukit Sikunir.',
    destination: 'Dieng, Wonosobo, Jawa Tengah',
    duration: '3 Hari 2 Malam',
    price: 850000,
    priceDisplay: 'Rp 850.000',
    rating: 4.87,
    reviewsCount: 295,
    category: 'open',
    experienceType: 'alam',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80'
    ],
    departureDates: ['Tiap Akhir Pekan', '10 - 12 Okt 2026', '24 - 26 Okt 2026', '07 - 09 Nov 2026'],
    slotsLeft: 9,
    highlights: [
      'Golden Sunrise Bukit Sikunir Tertinggi di Jawa',
      'Kawah Aktif Sikidang dengan Jembatan Kayu Estetik',
      'Kompleks Candi Arjuna Peninggalan Abad ke-7',
      'Telaga Warna & Telaga Pengilon dari Batu Pandang Ratapan Angin',
      'Jeep Petualangan Dieng Jalur Alami'
    ],
    included: [
      'Transportasi AC Pariwisata Jogja / Purwokerto PP',
      'Penginapan Homestay Hangat di Dieng 1 Malam',
      'Makan 3x Termasuk Mie Ongklok Khas Wonosobo',
      'Seluruh Tiket Objek Wisata Dieng',
      'Pemandu Wisata & Pengemudi Berpengalaman',
      'Dokumentasi Kamera Mirrorless'
    ],
    excluded: [
      'Tiket transportasi ke Yogyakarta / Purwokerto',
      'Pengeluaran pribadi'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Titik Kumpul Yogyakarta / Purwokerto ke Dieng',
        description: 'Penjemputan rombongan di stasiun/bandara. Perjalanan menuju dataran tinggi Dieng, singgah di gardu pandang Tieng, masuk homestay dan istirahat.',
        activities: ['Penjemputan Peserta', 'Perjalanan Wonosobo - Dieng', 'Masuk Homestay']
      },
      {
        day: 2,
        title: 'Golden Sunrise Sikunir, Kawah Sikidang, Candi Arjuna',
        description: 'Dini hari trekking ringan ke puncak Sikunir menyambut mentari terbit di atas awan, lanjut ke Kawah Sikidang, Telaga Warna, dan Candi Arjuna.',
        activities: ['Sunrise Bukit Sikunir', 'Kawah Sikidang', 'Batu Pandang Ratapan Angin', 'Kompleks Candi Arjuna']
      },
      {
        day: 3,
        title: 'Kuliner Mie Ongklok & Pengantaran Kembali',
        description: 'Sarapan pagi, menikmati kelezatan Mie Ongklok dan Carica khas Dieng, belanja oleh-oleh, lalu diantar kembali ke Jogja / Purwokerto.',
        activities: ['Wisata Oleh-Oleh Carica', 'Kuliner Mie Ongklok', 'Pengantaran ke Stasiun Jogja / Purwokerto']
      }
    ]
  },
  {
    id: 'raja-ampat-paradise',
    title: 'Paket Ekspedisi Raja Ampat Wayag & Pianemo',
    badge: 'Ekspedisi Premium',
    tagline: 'Surga maritim terlengkap di dunia dengan gugusan karst zamrud Wayag, Telaga Bintang, dan terumbu karang purba.',
    destination: 'Raja Ampat, Papua Barat Daya',
    duration: '5 Hari 4 Malam',
    price: 5800000,
    priceDisplay: 'Rp 5.800.000',
    rating: 5.0,
    reviewsCount: 198,
    category: 'open',
    experienceType: 'pantai',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    ],
    departureDates: ['22 - 26 Okt 2026', '12 - 16 Nov 2026', '26 - 30 Nov 2026', '24 - 28 Des 2026'],
    slotsLeft: 3,
    highlights: [
      'Puncak Wayag 1 & Wayag 2 Ikonik',
      'Berenang Bersama Anak Hiu (Baby Shark) di Pantai Pos Wayag',
      'Puncak Pianemo & Telaga Bintang',
      'Snorkeling di Pasir Timbul Mansuar & Desa Arborek',
      'Observasi Burung Cenderawasih Merah di Hutan Sawinggrai'
    ],
    included: [
      'Sewa Speedboat Standar Pariwisata Selama 5 Hari',
      'Penginapan Resort Tepi Laut / Water Cottage di Waisai',
      'Konsumsi Penuh 3x Sehari + Buah & Kudapan',
      'Peralatan Snorkeling & Pelampung (Life Jacket)',
      'Dokumentasi Drone 4K & Kamera Bawah Air',
      'Pemandu Wisata & Ranger Lokal Suku Maya'
    ],
    excluded: [
      'Tiket pesawat ke Sorong (SOQ)',
      'Kartu Jasa Pemeliharaan Lingkungan (KJL/PIN Raja Ampat)',
      'Pengeluaran pribadi'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Sorong - Waisai via Kapal Cepat Express Ferry',
        description: 'Penjemputan di Bandara DEO Sorong, menaiki kapal cepat Express Bahari menuju Kota Waisai Raja Ampat. Masuk cottage dan snorkeling santai di dermaga.',
        activities: ['Penjemputan Sorong', 'Kapal Express Bahari ke Waisai', 'Masuk Cottage', 'Sunset Dermaga']
      },
      {
        day: 2,
        title: 'Puncak Pianemo, Telaga Bintang & Desa Wisata Arborek',
        description: 'Trekking tangga kayu ke gardu pandang Pianemo melihat gugusan pulau karang zamrud, berfoto di Telaga Bintang, snorkeling ramah anak di dermaga Arborek.',
        activities: ['Puncak Pianemo', 'Telaga Bintang', 'Desa Wisata Arborek', 'Pasir Timbul Mansuar']
      },
      {
        day: 3,
        title: 'Ekspedisi Wayag & Interaksi Bersama Anak Hiu',
        description: 'Perjalanan ke gugusan pulau terjauh Wayag. Mendaki karst untuk menyaksikan panorama terindah bumi, lalu berenang dengan anak ikan hiu di pesisir pantai.',
        activities: ['Trekking Wayag 2', 'Berenang Bersama Anak Hiu', 'Batu Pensil', 'Laguna Gua Karst']
      },
      {
        day: 4,
        title: 'Observasi Cenderawasih & Snorkeling Yenbuba Wall',
        description: 'Trekking dini hari melihat tarian burung Cenderawasih Merah, dilanjutkan snorkeling di dermaga Yenbuba dengan ribuan ikan dan terumbu karang sehat.',
        activities: ['Trekking Burung Surga', 'Snorkeling Dermaga Yenbuba', 'Pantai Friwen Kelapa Muda']
      },
      {
        day: 5,
        title: 'Waisai ke Sorong & Pengantaran Bandara',
        description: 'Persiapan pulang dari cottage, naik ferry kembali ke Sorong, belanja oleh-oleh roti abon gulung khas Papua, dan pengantaran ke Bandara Sorong.',
        activities: ['Ferry ke Sorong', 'Wisata Oleh-Oleh Khas Papua', 'Pengantaran ke Bandara SOQ']
      }
    ]
  },
  {
    id: 'corporate-gathering-outing',
    title: 'Paket Gathering Perusahaan, Outing & Pembentukan Tim',
    badge: 'Khusus Korporat',
    tagline: 'Solusi lengkap manajemen acara perusahaan: transportasi eksekutif, hotel berbintang, fasilitator outbound bersertifikat, & makan malam bersama.',
    destination: 'Bali / Yogyakarta / Bandung / Bogor / Malang',
    duration: '3 Hari 2 Malam / Kustom',
    price: 1450000,
    priceDisplay: 'Mulai Rp 1.450.000',
    rating: 5.0,
    reviewsCount: 112,
    category: 'corporate',
    experienceType: 'adventure',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1000&q=80'
    ],
    departureDates: ['Jadwal Fleksibel Sesuai Agenda Kantor'],
    minPax: 20,
    highlights: [
      'Pembawa Acara (MC) & Fasilitator Outbound BNSP',
      'Tata Suara, Panggung, Pencahayaan & Makan Malam Tematik',
      'Armada Bus Pariwisata Eksekutif Terbaru',
      'Kaos / Polo Seragam Karyawan & Souvenir Bingkisan',
      'Faktur Pajak PPN/PPh 23 & Invoice Resmi Perusahaan'
    ],
    included: [
      'Hotel Bintang 4/5 dengan Fasilitas Ballroom / Ruang Rapat',
      'Program Outbound Pembentukan Tim Kolaboratif',
      'Makan Malam Apresiasi (Gala Dinner) & Hiburan Musik Akustik',
      'Dokumentasi Tim Video Drone, Fotografer & Video Teaser',
      'Koordinator Lapangan & Tim Medis P3K'
    ],
    excluded: [
      'Pengeluaran pribadi di luar kesepakatan proposal resmi'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Kedatangan Rombongan, Ice Breaking & Makan Malam Penyambutan',
        description: 'Penjemputan dengan armada bus eksekutif, minuman sambutan dan proses masuk hotel cepat. Malam hari diselenggarakan makan malam santai dan arahan kegiatan.',
        activities: ['Penjemputan Rombongan', 'Masuk Hotel Berbintang', 'Ice Breaking Sederhana', 'Makan Malam Penyambutan']
      },
      {
        day: 2,
        title: 'Olimpiade Pembentukan Tim & Malam Apresiasi Bersama',
        description: 'Sesi outbound ceria untuk mempererat kekompakan dan komunikasi tim. Malam harinya dihelat Malam Penghargaan, Makan Malam Bersama, dan hiburan panggung apresiasi.',
        activities: ['Permainan Outbound Luar Ruang', 'Prasmanan Makan Siang', 'Persiapan Acara Malam', 'Makan Malam & Malam Apresiasi']
      },
      {
        day: 3,
        title: 'Jelajah Kota, Belanja Oleh-Oleh & Kepulangan Rombongan',
        description: 'Kunjungan ke objek wisata ikonik kota setempat, belanja oleh-oleh khas daerah, sesi foto bersama rombongan, dan pengantaran kembali ke stasiun/bandara.',
        activities: ['Wisata Ikonik Kota', 'Belanja Oleh-Oleh', 'Foto Bersama Rombongan', 'Pengantaran ke Bandara / Stasiun']
      }
    ]
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Andhika Pratama & Jessica',
    role: 'Pasangan Bulan Madu',
    trip: 'Labuan Bajo 4H3M Wisata Privat Phinisi',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '14 Agustus 2026',
    comment: 'Pengalaman berlayar bersama Dolphin Trip benar-benar memuaskan. Dari koordinasi penjemputan bandara, makanan di kapal yang disajikan hangat oleh chef, sampai hasil video drone Pulau Padar yang sangat sinematik. Fasilitas transparan tanpa biaya siluman.',
    verified: true
  },
  {
    id: 'testi-2',
    name: 'Rahmat Hidayat, S.T.',
    role: 'Ketua Panitia Acara Perusahaan',
    trip: 'Gathering Tahunan PT Nexa Digital (85 Orang - Bali)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '02 September 2026',
    comment: 'Mengurus rombongan 80 orang lebih bukan hal mudah, tapi Dolphin Trip sangat profesional. Mulai dari proposal penawaran, legalitas faktur pajak perusahaan, susunan permainan outbound yang seru, sampai penanganan cepat di lokasi. Kami pasti pakai lagi untuk acara kantor tahun depan.',
    verified: true
  },
  {
    id: 'testi-3',
    name: 'Siti Sarah Rahmawati',
    role: 'Wisatawan Mandiri (Solo Traveler)',
    trip: 'Open Trip Bromo Sunrise & Madakaripura',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '28 Juli 2026',
    comment: 'Awalnya sempat ragu ikut open trip sendirian. Ternyata pemandu wisatanya sangat ramah dan perhatian ke semua peserta. Kru jeep dan fotografernya sabar banget bantu ambil foto bagus. Sangat direkomendasikan bagi yang mau liburan tanpa ribet.',
    verified: true
  },
  {
    id: 'testi-4',
    name: 'Drs. Hendro Wibowo',
    role: 'Koordinator Karya Wisata Sekolah',
    trip: 'Karya Wisata SMA Nusantara (140 Siswa - Jogja & Dieng)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    date: '19 Juni 2026',
    comment: 'Kerjasama kedua kalinya untuk kegiatan sekolah. Komitmen keamanan para siswa sangat diperhatikan. Bus pariwisata yang digunakan prima dan jadwal kegiatan terlaksana tepat waktu sesuai kesepakatan.',
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Sunrise Penanjakan Bromo',
    location: 'Gunung Bromo, Jawa Timur',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80',
    category: 'Gunung & Alam'
  },
  {
    id: 'gal-2',
    title: 'Pelayaran Phinisi Labuan Bajo',
    location: 'Taman Nasional Komodo, NTT',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=800&q=80',
    category: 'Bahari'
  },
  {
    id: 'gal-3',
    title: 'Snorkeling Patung Bawah Laut Gili Meno',
    location: 'Lombok, Nusa Tenggara Barat',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
    category: 'Bahari'
  },
  {
    id: 'gal-4',
    title: 'Tebing T-Rex Kelingking Nusa Penida',
    location: 'Nusa Penida, Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    category: 'Pantai'
  },
  {
    id: 'gal-5',
    title: 'Outbound & Pembentukan Tim Ceria',
    location: 'Resort Lembang, Bandung',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    category: 'Korporat'
  },
  {
    id: 'gal-6',
    title: 'Keindahan Karst Zamrud Wayag',
    location: 'Raja Ampat, Papua Barat Daya',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    category: 'Bahari'
  }
];

export const CLIENT_LOGOS = [
  'Bank Mandiri',
  'Telkom Indonesia',
  'Astra International',
  'Pertamina',
  'Tokopedia',
  'Universitas Gadjah Mada',
  'Bank BCA',
  'Unilever Indonesia'
];

export const FAQS = [
  {
    q: 'Apakah bisa melakukan kustomisasi paket wisata atau menentukan jadwal sendiri?',
    a: 'Tentu saja bisa. Anda dapat menghubungi tim kami untuk paket wisata kustom, baik untuk wisata privat keluarga, komunitas hobi, maupun gathering perusahaan. Kami akan menyesuaikan destinasi, durasi, dan pilihan penginapan sesuai anggaran Anda.'
  },
  {
    q: 'Bagaimana prosedur pemesanan dan pembayaran paket di Dolphin Trip?',
    a: 'Pemesanan dapat dilakukan secara mudah melalui WhatsApp dengan mengklik tombol reservasi pada paket yang diinginkan. Anda akan menerima rincian tagihan (invoice) resmi, dilanjutkan dengan pembayaran uang muka (DP) ke rekening resmi perusahaan PT Dolphin Wisata Nusantara. Bukti pembayaran dan tanda terima sah akan langsung diterbitkan.'
  },
  {
    q: 'Apakah perusahaan memiliki legalitas resmi dan menyediakan Faktur Pajak?',
    a: 'Ya, Dolphin Trip beroperasi di bawah badan hukum resmi PT Dolphin Wisata Nusantara dengan NIB dan NPWP terdaftar. Kami melayani kebutuhan korporasi dan instansi pemerintah dengan kelengkapan kontrak kerjasama, kuitansi resmi, dan e-Faktur Pajak PPN/PPh 23.'
  },
  {
    q: 'Apakah dokumentasi foto dan video sudah termasuk di dalam paket wisata?',
    a: 'Hampir seluruh paket unggulan kami (seperti Bromo, Labuan Bajo, Lombok, dan Raja Ampat) sudah mencakup fasilitas dokumentasi kamera mirrorless, GoPro bawah air, hingga Drone DJI dengan seluruh berkas master diberikan secara gratis tanpa biaya tambahan.'
  },
  {
    q: 'Bagaimana jika terjadi keadaan darurat (force majeure) atau cuaca buruk di lokasi wisata?',
    a: 'Keamanan peserta adalah prioritas utama. Jika terjadi cuaca ekstrem atau penutupan resmi dari otoritas balai taman nasional/BMKG, rute akan dialihkan ke destinasi alternatif yang aman, atau jadwal disesuaikan melalui musyawarah demi kenyamanan bersama.'
  }
];

export const LEGAL_INFO = {
  companyName: 'PT Dolphin Wisata Nusantara',
  brandName: 'Dolphin Trip',
  nib: '1209230048192',
  skKemenkumham: 'AHU-0048291.AH.01.01.TAHUN 2021',
  npwp: '41.892.401.8-014.000',
  rekeningBCA: '8020-991-888',
  rekeningMandiri: '137-00-281920-1',
  atasNama: 'PT DOLPHIN WISATA NUSANTARA',
  asuransi: 'Jasaraharja Putera & Zurich Travel Insurance',
  alamatPusat: 'Jl. TB Simatupang No. 18, Cilandak, Jakarta Selatan 12430',
  kantorCabang: 'Kompleks Marina Labuan Bajo, Kec. Komodo, Manggarai Barat, NTT',
  telepon: '+62 812-3456-7890',
  email: 'info@dolphintrip.id'
};
