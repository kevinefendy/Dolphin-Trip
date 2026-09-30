import React from 'react';
import { CheckCircle, MapPin } from 'lucide-react';
import { LEGAL_INFO } from '../data/tripsData';

export const AboutLegalSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tentang Kami — satu kolom */}
        <div className="max-w-3xl mb-16">

          {/* Left Text: Tentang Kami */}
          <div className="space-y-5 text-left">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              Tentang Dolphin Trip
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong className="text-slate-900 font-bold">{LEGAL_INFO.brandName}</strong> (di bawah naungan legal <strong className="text-slate-900 font-bold">{LEGAL_INFO.companyName}</strong>) adalah operator perjalanan wisata domestik terpercaya yang berkomitmen menghadirkan pengalaman liburan terbaik di berbagai destinasi unggulan Indonesia.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Kami menawarkan berbagai paket wisata, mulai dari open trip reguler hingga wisata privat (private tour), serta layanan khusus perjalanan keluarga, komunitas, dan gathering perusahaan. Dengan tim berpengalaman dan pemandu berlisensi yang siap mendampingi selama perjalanan, kami memastikan setiap liburan berjalan aman, nyaman, dan penuh kesan.
            </p>

            <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Rute terkurasi di Bromo, Labuan Bajo, Lombok, Bali, Dieng &amp; Raja Ampat</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Pemandu wisata bersertifikasi HPI (Himpunan Pramuwisata Indonesia)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Transparansi harga dan ketersediaan Faktur Pajak resmi (PPN / PPh 23)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Office addresses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 border-t border-slate-200 text-left">
          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-[#111111] uppercase tracking-wider block mb-1">
              Kantor Pusat Operasional
            </span>
            <h4 className="text-sm font-bold text-slate-900 mb-2">Jakarta Selatan</h4>
            <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{LEGAL_INFO.alamatPusat}</span>
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200">
            <span className="text-xs font-bold text-[#111111] uppercase tracking-wider block mb-1">
              Kantor Perwakilan Operasional
            </span>
            <h4 className="text-sm font-bold text-slate-900 mb-2">Labuan Bajo, Flores</h4>
            <p className="text-xs text-slate-600 leading-relaxed flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>{LEGAL_INFO.kantorCabang}</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
