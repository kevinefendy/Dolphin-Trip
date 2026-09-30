import React, { useState } from 'react';
import { MapPin, Calendar, Users, MessageSquare } from 'lucide-react';

export const PrivateTripBuilder: React.FC = () => {
  const [destination, setDestination] = useState<string>('Labuan Bajo');
  const [customDestination, setCustomDestination] = useState<string>('');
  const [duration, setDuration] = useState<string>('3 Hari 2 Malam');
  const [pax, setPax] = useState<number>(4);
  const [hotelTier, setHotelTier] = useState<string>('Bintang 3 / 4 (Nyaman)');
  const [pickupCity, setPickupCity] = useState<string>('Surabaya / Malang');
  const [notes, setNotes] = useState<string>('');

  const getEstimatedPrice = () => {
    let base = 1500000;
    if (destination.includes('Raja Ampat')) base = 4900000;
    else if (destination.includes('Labuan Bajo')) base = 2650000;
    else if (destination.includes('Bromo')) base = 920000;
    else if (destination.includes('Lombok')) base = 1950000;
    else if (destination.includes('Bali')) base = 1650000;
    else if (destination.includes('Dieng')) base = 850000;

    const paxDiscount = pax >= 10 ? 0.85 : pax >= 6 ? 0.9 : 1.0;
    const tierMultiplier = hotelTier.includes('Bintang 4') || hotelTier.includes('Nyaman') || hotelTier.includes('Comfort') ? 1.0 : hotelTier.includes('Bintang 5') ? 1.5 : 0.88;

    return Math.round((base * paxDiscount * tierMultiplier) / 50000) * 50000;
  };

  const estimatedPerPax = getEstimatedPrice();
  const estimatedTotal = estimatedPerPax * pax;

  const handleSendToWhatsApp = () => {
    const finalDest = destination === 'Lainnya' ? customDestination || 'Wisata Kustom' : destination;
    
    const text = `Halo Dolphin Trip, saya ingin konsultasi dan pemesanan *Wisata Privat Kustom*:

Destinasi: ${finalDest}
Durasi Perjalanan: ${duration}
Jumlah Peserta: ${pax} Orang
Kategori Hotel: ${hotelTier}
Kota Penjemputan: ${pickupCity}
${notes ? `Catatan Tambahan: ${notes}\n` : ''}
Estimasi Biaya: Mulai Rp ${estimatedPerPax.toLocaleString('id-ID')} / orang (Total: Rp ${estimatedTotal.toLocaleString('id-ID')})

Mohon informasi ketersediaan tanggal dan rincian penawaran resminya. Terima kasih!`;

    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="private-trip" className="py-20 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block mb-2">
            Layanan Wisata Privat &amp; Jadwal Khusus
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Rencanakan Liburan Sesuai Keinginan Anda
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Anda tentukan tujuan dan jumlah orang, tim Dolphin Trip yang mengurus seluruh kebutuhan transportasi, penginapan, makan, dan dokumentasi.
          </p>
        </div>

        {/* Form & Summary Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Form Left */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6 text-left">
            
            {/* Destinasi */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                Pilih Destinasi Wisata
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Bromo & Malang', 'Labuan Bajo', 'Lombok & Gili', 'Bali Eksotis', 'Dieng Plateau', 'Raja Ampat', 'Yogyakarta', 'Lainnya'].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDestination(d)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all text-center ${
                      destination === d
                        ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>

              {destination === 'Lainnya' && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Tuliskan destinasi yang Anda inginkan (misal: Sumba, Belitung, Karimunjawa)..."
                    value={customDestination}
                    onChange={(e) => setCustomDestination(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600"
                  />
                </div>
              )}
            </div>

            {/* Durasi & Peserta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sky-600" />
                  Durasi Perjalanan
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600 cursor-pointer"
                >
                  <option value="2 Hari 1 Malam (Akhir Pekan)">2 Hari 1 Malam (Akhir Pekan)</option>
                  <option value="3 Hari 2 Malam">3 Hari 2 Malam (Paling Populer)</option>
                  <option value="4 Hari 3 Malam">4 Hari 3 Malam (Ideal &amp; Santai)</option>
                  <option value="5 Hari 4 Malam">5 Hari 4 Malam (Eksplorasi Lengkap)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-sky-600" />
                  Jumlah Peserta: <strong className="text-sky-600">{pax} Orang</strong>
                </label>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={pax}
                  onChange={(e) => setPax(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600 mt-3"
                />
                <div className="flex flex-wrap gap-x-3 gap-y-1 justify-between text-[11px] text-slate-400 mt-1">
                  <span>2 Orang (Pasangan)</span>
                  <span>4 - 8 Orang (Keluarga)</span>
                  <span>15+ Orang (Rombongan)</span>
                </div>
              </div>
            </div>

            {/* Kategori Penginapan & Kota Penjemputan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Pilihan Akomodasi / Penginapan
                </label>
                <select
                  value={hotelTier}
                  onChange={(e) => setHotelTier(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600 cursor-pointer"
                >
                  <option value="Standar Homestay / Guesthouse">Standar Bersih &amp; Nyaman (Ekonomis)</option>
                  <option value="Bintang 3 / 4 (Nyaman)">Hotel Bintang 3 atau 4 (Favorit Tamu)</option>
                  <option value="Resort Bintang 5 / Villa Privat">Resort Bintang 5 / Villa Privat (VIP)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Kota Penjemputan
                </label>
                <input
                  type="text"
                  placeholder="Bandara / Stasiun / Alamat Rumah..."
                  value={pickupCity}
                  onChange={(e) => setPickupCity(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600"
                />
              </div>
            </div>

            {/* Catatan Tambahan */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Kebutuhan Khusus / Permintaan Khusus
              </label>
              <textarea
                rows={2}
                placeholder="Misal: Rombongan membawa lansia, butuh makanan halal/vegetarian, permintaan mobil Hiace..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg p-3 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          {/* Right Card: Perkiraan Biaya & CTA WhatsApp */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5 text-left">
            <div className="pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Estimasi Penawaran
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                Rincian Wisata Privat
              </h4>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex justify-between">
                <span className="text-slate-500">Tujuan:</span>
                <span className="font-bold text-slate-900">{destination === 'Lainnya' ? customDestination || 'Wisata Kustom' : destination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Durasi:</span>
                <span className="font-semibold text-slate-800">{duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Peserta:</span>
                <span className="font-semibold text-slate-800">{pax} Orang</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Penginapan:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[150px]">{hotelTier}</span>
              </div>
            </div>

            {/* Price block */}
            <div className="bg-sky-50 border border-sky-100 rounded-xl p-4">
              <span className="text-[11px] text-slate-500 block font-medium">Estimasi Biaya Mulai:</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-black text-sky-700">
                  Rp {estimatedPerPax.toLocaleString('id-ID')}
                </span>
                <span className="text-xs text-slate-500">/ orang</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Total Estimasi: <strong className="text-slate-800">Rp {estimatedTotal.toLocaleString('id-ID')}</strong>
              </p>
            </div>

            {/* WhatsApp Booking CTA */}
            <button
              onClick={handleSendToWhatsApp}
              className="w-full py-3.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Kirim Rencana ke WhatsApp</span>
            </button>

            <p className="text-[11px] text-slate-400 text-center leading-normal">
              Konsultasi dan penyesuaian susunan rencana perjalanan gratis tanpa komitmen pembayaran awal.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
