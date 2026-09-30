import React, { useState } from 'react';
import type { Trip, TripCategory } from '../types';
import { MapPin, Clock, Star, ChevronRight } from 'lucide-react';

interface FeaturedTripsProps {
  trips: Trip[];
  onSelectTrip: (trip: Trip) => void;
  activeDestinationFilter?: string | null;
  onClearDestinationFilter?: () => void;
}

const TABS: { id: TripCategory; label: string }[] = [
  { id: 'all', label: 'Semua Paket' },
  { id: 'open', label: 'Open Trip' },
  { id: 'private', label: 'Wisata Privat' },
];

export const FeaturedTrips: React.FC<FeaturedTripsProps> = ({
  trips,
  onSelectTrip,
  activeDestinationFilter,
  onClearDestinationFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<TripCategory>('all');

  const filteredTrips = trips.filter((trip) => {
    const matchesCategory =
      activeCategory === 'all' ? true : trip.category === activeCategory;
    const matchesDest = activeDestinationFilter
      ? trip.destination.toLowerCase().includes(activeDestinationFilter.toLowerCase()) ||
        trip.title.toLowerCase().includes(activeDestinationFilter.toLowerCase())
      : true;
    return matchesCategory && matchesDest;
  });

  return (
    <section id="paket-wisata" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading ala Shilah */}
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest text-[#4b5563] uppercase">
            Pilihan Paket Wisata
          </span>
          <div className="w-12 h-0.5 bg-[#d1d5db] mx-auto mt-2" />
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111111] mt-3">
            Paket Open Trip &amp; Wisata Privat
          </h2>
          <p className="text-sm text-[#4b5563] mt-2 max-w-xl mx-auto leading-relaxed">
            Destinasi unggulan Indonesia dengan jadwal pasti dan layanan profesional.
            Rincian lengkap tersedia di halaman detail tiap paket.
          </p>
        </div>

        {activeDestinationFilter && (
          <div className="flex items-center justify-center gap-3 mb-6 text-sm">
            <span className="text-[#4b5563]">
              Hasil pencarian: <strong className="text-[#111111] font-semibold">“{activeDestinationFilter}”</strong>
            </span>
            <button
              onClick={onClearDestinationFilter}
              className="text-[#0077C8] hover:underline font-medium"
            >
              Reset
            </button>
          </div>
        )}

        {/* Tabs minimalis */}
        <div className="flex items-center justify-start sm:justify-center gap-5 sm:gap-6 mb-8 border-b border-[#e5e7eb] overflow-x-auto px-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`pb-2.5 text-sm font-medium transition-colors border-b-2 -mb-px whitespace-nowrap shrink-0 ${
                activeCategory === tab.id
                  ? 'text-[#0077C8] border-[#0077C8]'
                  : 'text-[#4b5563] border-transparent hover:text-[#111111]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredTrips.map((trip) => (
            <article
              key={trip.id}
              onClick={() => onSelectTrip(trip)}
              className="group bg-[#fafbfc] hover:bg-white rounded-2xl border border-gray-200/80 hover:border-[#0077C8]/50 hover:shadow-lg overflow-hidden transition-all duration-200 cursor-pointer flex flex-col"
            >
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={trip.image}
                  alt={trip.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {trip.badge && (
                  <span className="absolute top-3 left-3 text-[11px] font-semibold bg-white/95 text-[#00205B] px-2.5 py-1 rounded-full shadow-sm">
                    {trip.badge}
                  </span>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {trip.destination}
                </span>
                <h3 className="font-serif text-base font-bold text-[#111111] group-hover:text-[#00205B] transition-colors mt-1.5 leading-snug line-clamp-2 min-h-[3rem]">
                  {trip.title}
                </h3>
                <p className="text-xs text-[#4b5563] leading-relaxed mt-1.5 line-clamp-2">
                  {trip.tagline}
                </p>

                <div className="flex items-center gap-3 mt-3 text-xs text-[#4b5563]">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {trip.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <strong className="text-[#111111] font-semibold">{trip.rating}</strong>
                    <span>({trip.reviewsCount})</span>
                  </span>
                </div>

                <div className="pt-3 border-t border-gray-200/70 mt-4 flex items-center justify-between">
                  <div>
                    <span className="block text-[11px] text-gray-500">Mulai dari</span>
                    <span className="text-base font-bold text-[#00205B]">
                      {trip.priceDisplay}
                      <span className="text-[11px] font-normal text-gray-500"> /orang</span>
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-[#0077C8] group-hover:underline">
                    Lihat Detail
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredTrips.length === 0 && (
          <p className="text-center text-sm text-[#4b5563] py-10">
            Tidak ada paket yang cocok dengan filter. Coba kata kunci lain.
          </p>
        )}
      </div>
    </section>
  );
};
