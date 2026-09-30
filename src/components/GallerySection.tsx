import React, { useState } from 'react';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS, CLIENT_LOGOS } from '../data/tripsData';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');

  const categories = ['Semua', 'Bahari', 'Gunung & Alam', 'Pantai', 'Korporat'];

  const filteredItems = activeFilter === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="galeri" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-2">
            Dokumentasi Asli Perjalanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Galeri Dolphin Trip
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Momen seru dan nyata para peserta saat menjelajahi surga tersembunyi Indonesia bersama tim profesional kami.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3] bg-slate-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-sky-600 px-2 py-0.5 rounded text-white mb-1.5 inline-block">
                  {item.category}
                </span>
                <h4 className="font-bold text-sm sm:text-base leading-snug">{item.title}</h4>
                <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{item.location}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Client Proof (Permata Wisata style) */}
        <div className="mt-20 pt-12 border-t border-slate-200 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Telah Dipercaya oleh Berbagai Perusahaan Ternama
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mb-8">
            Melayani perjalanan dinas, outing perusahaan, outbound pembentukan tim, hingga karya wisata berskala nasional.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {CLIENT_LOGOS.map((client, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-4 flex items-center justify-center gap-2 shadow-xs hover:border-sky-400 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span className="font-bold text-slate-700 text-xs sm:text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
