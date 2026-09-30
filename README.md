# 🐬 Dolphin Trip - Platform Tour & Travel Indonesia

Dolphin Trip adalah platform web pariwisata modern untuk pemesanan paket Open Trip & Private Trip ke berbagai destinasi eksotis Indonesia (seperti Bromo, Labuan Bajo, Karimunjawa, Pahawang, Derawan, dan Raja Ampat). Dilengkapi dengan fitur penyesuaian private trip, rincian itinerary harian, dan integrasi reservasi instan via WhatsApp.

---

## ✨ Fitur Utama

- 🧭 **Eksplorasi Paket Wisata (Open & Private Trip):** Menampilkan daftar paket trip lengkap dengan harga transparan, rating, ketersediaan slot, dan jadwal keberangkatan.
- 🔍 **Filter & Pencarian Destinasi:** Filter cepat berdasarkan destinasi populer langsung dari navigasi atau hero banner.
- 📋 **Modal Detail Trip Interaktif:** Rincian rundown/itinerary harian, fasilitas termasuk/tidak termasuk, galeri foto, dan tombol reservasi instan WhatsApp.
- 🛠️ **Private Trip Builder:** Form kalkulasi dan kustomisasi perjalanan rombongan/keluarga sesuai destinasi, durasi, dan preferensi armada.
- 📸 **Galeri Dokumentasi:** Arsip dokumentasi momen wisatawan beresolusi tinggi dengan kategori destinasi.
- 💬 **Ulasan & Testimonial Pelanggan:** Review terverifikasi dari para traveler.
- ❓ **FAQ Interaktif:** Tanya jawab seputar syarat & ketentuan, pembatalan, asuransi, dan pembayaran.
- 🏢 **Profil & Legalitas Agen:** Informasi perizinan resmi pariwisata untuk membangun rasa aman dan kepercayaan pelanggan.
- 📱 **Desain Sepenuhnya Responsif:** Tampilan optimal di smartphone, tablet, maupun layar desktop.

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi |
| --- | --- |
| **Framework** | [React 19](https://react.dev/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite 8](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Linter** | [Oxlint](https://oxc.rs/) |

---

## 📁 Struktur Direktori

```text
Dolphin-trip/
├── public/                 # Favicon dan aset statis global
├── src/
│   ├── assets/             # Gambar hero, logo, dan SVG
│   ├── components/         # Komponen UI modular
│   │   ├── AboutLegalSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── FaqSection.tsx
│   │   ├── FeaturedTrips.tsx
│   │   ├── Footer.tsx
│   │   ├── GallerySection.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── PrivateTripBuilder.tsx
│   │   ├── Testimonials.tsx
│   │   └── TripDetailModal.tsx
│   ├── data/
│   │   └── tripsData.ts    # Data paket trip, testimoni, dan galeri
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces & types
│   ├── App.css
│   ├── App.tsx             # Halaman utama & routing state
│   ├── index.css           # Styling dasar & konfigurasi Tailwind
│   └── main.tsx            # Entry point aplikasi React
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Memulai (Getting Started)

### Prasyarat
- Pastikan Anda sudah menginstal **[Node.js](https://nodejs.org/)** (versi 18+ direkomendasikan) dan **npm**.

### 1. Clone Repository
```bash
git clone https://github.com/kevinefendy/Dolphin-Trip.git
cd Dolphin-Trip
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Server Pengembangan (Dev Mode)
```bash
npm run dev
```
Akses aplikasi melalui browser di `http://localhost:5173`.

### 4. Build untuk Produksi
```bash
npm run build
```
Hasil build akan tersimpan di dalam folder `dist/`.

### 5. Menjalankan Linter
```bash
npm run lint
```

---

## 📄 Lisensi & Hak Cipta

Dikelola oleh **Dolphin Trip**. Hak Cipta dilindungi undang-undang.
