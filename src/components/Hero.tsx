import React, { useState } from 'react';
import { Search, ChevronRight, Map, Users, ArrowRight } from 'lucide-react';
import logoMark from '../assets/logo-mark.png';

interface HeroProps {
  onExploreClick: () => void;
  onFilterDestination: (dest: string) => void;
  onPlanTripClick: () => void;
}

const TRAVEL_MODES = [
  { icon: Map, title: 'Open Trip', desc: 'Gabung peserta lain, jadwal pasti tiap akhir pekan', target: 'paket-wisata' },
  { icon: Users, title: 'Wisata Privat', desc: 'Tanggal bebas, rencana perjalanan fleksibel', target: 'private-trip' },
];

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onFilterDestination,
  onPlanTripClick,
}) => {
  const [query, setQuery] = useState('');

  const submitSearch = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) onFilterDestination(query.trim());
    onExploreClick();
  };

  return (
    <section id="hero" className="pt-16">
      {/* Hero banner ala Shilah — foto penuh + overlay navy */}
      <div className="relative bg-[#00205B] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=1800&q=80"
          alt="Sailing Labuan Bajo bersama Dolphin Trip"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00205B] via-[#00205B]/70 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/20 mb-5">
            <img src={logoMark} alt="Logo Dolphin Trip" className="w-11 h-11 sm:w-12 sm:h-12 object-contain" />
          </div>

          <h1 className="font-serif font-bold text-white text-[28px] leading-[1.2] sm:text-5xl sm:leading-tight max-w-2xl">
            Jelajahi Indonesia dengan Tenang
          </h1>
          <p className="text-gray-200 text-sm sm:text-base leading-relaxed mt-3 max-w-xl">
            Open trip, private tour, dan gathering perusahaan — diurus operator resmi
            dengan jadwal pasti dan biaya transparan.
          </p>

          {/* Search bar ala Shilah */}
          <form
            onSubmit={submitSearch}
            className="mt-6 flex items-center bg-white rounded-lg overflow-hidden max-w-xl shadow-sm"
          >
            <div className="pl-4 text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari destinasi — mis. Bromo, Labuan Bajo, Lombok…"
              className="flex-1 px-3 py-3 text-sm text-[#111111] placeholder:text-gray-400 focus:outline-none bg-white"
            />
            <button
              type="submit"
              className="m-1.5 px-4 sm:px-5 py-2 rounded bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-medium transition-colors shrink-0"
            >
              Cari
            </button>
          </form>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded bg-[#0077C8] hover:bg-[#005fa3] text-white text-sm font-medium transition-colors"
            >
              Lihat Paket Wisata
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onPlanTripClick}
              className="inline-flex items-center px-5 py-2.5 rounded border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Rancang Wisata Privat
            </button>
          </div>
        </div>
      </div>

      {/* Panel pemilih cara traveling — satu panel bersekat, bukan 4 kartu */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="bg-white border border-[#e5e7eb] rounded-xl overflow-hidden">
          <p className="px-5 sm:px-6 pt-4 text-xs font-semibold tracking-widest text-[#4b5563] uppercase">
            Mau liburan seperti apa?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-[#e5e7eb]">
            {TRAVEL_MODES.map((item) => (
              <button
                key={item.title}
                onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center gap-3.5 px-5 sm:px-6 py-4 text-left hover:bg-[#f3f4f6]/60 transition-colors border-t md:border-t-0 border-[#e5e7eb] first:border-t-0"
              >
                <span className="w-10 h-10 rounded-lg bg-[#f3f4f6] group-hover:bg-[#0077C8] text-[#0077C8] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                  <item.icon className="w-5 h-5" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-[15px] text-[#111111]">
                    {item.title}
                  </span>
                  <span className="block text-xs text-[#4b5563] mt-0.5 leading-relaxed">
                    {item.desc}
                  </span>
                </span>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#0077C8] group-hover:translate-x-0.5 transition-all shrink-0" />
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={() => document.getElementById('galeri')?.scrollIntoView({ behavior: 'smooth' })}
          className="mx-auto mt-4 flex items-center gap-1.5 text-[13px] font-medium text-[#0077C8] hover:underline"
        >
          Lihat galeri dokumentasi perjalanan
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
