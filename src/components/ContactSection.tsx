import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { LEGAL_INFO } from '../data/tripsData';

const WhatsAppGlyph: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="kontak" className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold tracking-widest text-[#4b5563] uppercase">
            Kontak &amp; Bantuan
          </span>
          <div className="w-12 h-0.5 bg-[#d1d5db] mx-auto mt-2" />
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mt-3">
            Masih ragu? Tanya dulu, gratis.
          </h2>
          <p className="text-sm text-[#4b5563] mt-2 max-w-xl mx-auto leading-relaxed">
            Ceritakan rencana liburanmu — tim kami bantu pilihkan paket, cek slot
            keberangkatan, dan hitungkan biaya yang paling pas.
          </p>
        </div>

        {/* Panel navy ala Shilah */}
        <div className="bg-[#00205B] rounded-2xl p-6 sm:p-10 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Kiri: CTA */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Hubungi admin sekarang
              </h3>
              <p className="text-sm text-blue-100/80 mt-2 leading-relaxed">
                Siap melayani setiap hari 08.00 – 22.00 WIB. Rata-rata membalas dalam
                hitungan menit.
              </p>
              <div className="flex flex-col min-[480px]:flex-row gap-3 mt-6">
                <button
                  onClick={() =>
                    openWhatsApp('Halo Dolphin Trip, saya ingin bertanya mengenai paket wisata dan jadwal keberangkatan.')
                  }
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1DA851] text-white text-sm font-semibold transition-colors"
                >
                  <WhatsAppGlyph className="w-5 h-5" />
                  Hubungi Admin via WhatsApp
                </button>
                <a
                  href="tel:+6281234567890"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-white/40 hover:bg-white/10 text-white text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +62 812-3456-7890
                </a>
              </div>
            </div>

            {/* Kanan: info kontak */}
            <div className="md:border-l md:border-white/15 md:pl-10">
              <ul className="divide-y divide-white/10 text-sm">
                <li className="flex items-start gap-3 py-3.5 first:pt-0">
                  <Clock className="w-4 h-4 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white text-[13px]">Jam layanan</p>
                    <p className="text-blue-100/75 text-[13px] mt-0.5">Setiap hari, 08.00 – 22.00 WIB</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 py-3.5">
                  <Mail className="w-4 h-4 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white text-[13px]">Email</p>
                    <p className="text-blue-100/75 text-[13px] mt-0.5 break-all">{LEGAL_INFO.email}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 py-3.5 last:pb-0">
                  <MapPin className="w-4 h-4 text-blue-200 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white text-[13px]">Kantor</p>
                    <p className="text-blue-100/75 text-[13px] mt-0.5 leading-relaxed">{LEGAL_INFO.alamatPusat}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
