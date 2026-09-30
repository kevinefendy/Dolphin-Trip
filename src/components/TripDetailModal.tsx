import React, { useState } from 'react';
import type { Trip } from '../types';
import { X, Check, Clock, Calendar, MapPin, Star, ChevronRight } from 'lucide-react';

interface TripDetailModalProps {
  trip: Trip | null;
  onClose: () => void;
}

export const TripDetailModal: React.FC<TripDetailModalProps> = ({ trip, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [paxCount, setPaxCount] = useState<number>(2);

  if (!trip) return null;

  const handleBooking = () => {
    const chosenDate = selectedDate || trip.departureDates[0] || 'Fleksibel';
    const text = `Halo Dolphin Trip, saya ingin memesan paket wisata berikut:

Nama Paket: ${trip.title} (${trip.duration})
Destinasi: ${trip.destination}
Jadwal Keberangkatan: ${chosenDate}
Jumlah Peserta: ${paxCount} Orang
Estimasi Biaya: ${trip.priceDisplay} / orang

Mohon info ketersediaan kuota, tagihan invoice resmi, dan instruksi pembayarannya. Terima kasih!`;

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#00205B]/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative bg-white rounded-xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 hover:bg-white text-[#4b5563] hover:text-[#111111] shadow-md transition-all"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-gray-100 rounded-t-xl">
          <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00205B] via-[#00205B]/30 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {trip.badge && (
                <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/95 text-[#00205B]">
                  {trip.badge}
                </span>
              )}
              <span className="flex items-center gap-1 text-xs font-medium bg-black/40 px-2.5 py-1 rounded-full">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {trip.rating} ({trip.reviewsCount} ulasan)
              </span>
              <span className="flex items-center gap-1 text-xs bg-black/40 px-2.5 py-1 rounded-full">
                <Clock className="w-3.5 h-3.5" />
                {trip.duration}
              </span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
              {trip.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-200 mt-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {trip.destination}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-8">
          {/* Ringkasan */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#4b5563] uppercase">
              Tentang Perjalanan
            </span>
            <div className="w-12 h-0.5 bg-[#d1d5db] mt-1.5 mb-3" />
            <p className="text-sm text-[#4b5563] leading-relaxed">{trip.tagline}</p>
          </div>

          {/* Highlight */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#4b5563] uppercase">
              Sorotan Destinasi
            </span>
            <div className="w-12 h-0.5 bg-[#d1d5db] mt-1.5 mb-3" />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {trip.highlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#222222]">
                  <Check className="w-4 h-4 text-[#0077C8] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Itinerary */}
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#4b5563] uppercase inline-flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Susunan Acara Per Hari
            </span>
            <div className="w-12 h-0.5 bg-[#d1d5db] mt-1.5 mb-3" />
            <div className="space-y-3">
              {trip.itinerary.map((day) => (
                <div key={day.day} className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl p-4 sm:p-5">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="px-2 py-0.5 rounded bg-[#00205B] text-white font-semibold text-[11px]">
                      Hari {day.day}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#111111]">{day.title}</h4>
                  </div>
                  <p className="text-sm text-[#4b5563] leading-relaxed mb-2.5">{day.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {day.activities.map((act, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-white text-[#4b5563] border border-[#e5e7eb]">
                        {act}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Termasuk / Tidak */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl p-5">
              <h4 className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
                Sudah Termasuk
              </h4>
              <ul className="space-y-2 text-[13px] text-[#4b5563]">
                {trip.included.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#f3f4f6] border border-[#e5e7eb] rounded-xl p-5">
              <h4 className="text-xs font-semibold text-[#111111] uppercase tracking-wider mb-3">
                Belum Termasuk
              </h4>
              <ul className="space-y-2 text-[13px] text-[#4b5563]">
                {trip.excluded.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-gray-400 font-bold">–</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking */}
          <div className="bg-[#00205B] rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <span className="block text-[11px] text-blue-200">Harga paket</span>
              <span className="font-serif text-2xl font-bold text-white">
                {trip.priceDisplay}
                <span className="font-sans text-xs font-normal text-blue-200"> /orang</span>
              </span>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <div className="text-xs">
                  <label className="block text-[11px] text-blue-200 mb-1">Jadwal</label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-white text-xs rounded px-2.5 py-1.5 text-[#111111] focus:outline-none cursor-pointer max-w-[220px]"
                  >
                    {!selectedDate && <option value="">Pilih jadwal…</option>}
                    {trip.departureDates.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
                <div className="text-xs">
                  <label className="block text-[11px] text-blue-200 mb-1">Peserta</label>
                  <div className="flex items-center gap-2 bg-white rounded px-2 py-1">
                    <button type="button" onClick={() => setPaxCount(Math.max(1, paxCount - 1))} className="px-1.5 font-bold text-[#4b5563]">-</button>
                    <span className="font-semibold text-[#111111] text-xs">{paxCount} Orang</span>
                    <button type="button" onClick={() => setPaxCount(paxCount + 1)} className="px-1.5 font-bold text-[#4b5563]">+</button>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleBooking}
              className="w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-sm bg-[#0077C8] hover:bg-[#005fa3] text-white transition-colors inline-flex items-center justify-center gap-1.5"
            >
              Pesan via WhatsApp
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
