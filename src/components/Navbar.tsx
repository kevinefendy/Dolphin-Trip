import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import type { PageKey } from '../types';
import logoMark from '../assets/logo-mark.png';

interface NavbarProps {
  currentPage: PageKey;
  onNavigate: (page: PageKey, sectionId?: string) => void;
}

const NAV_ITEMS: { label: string; page: PageKey; sectionId?: string }[] = [
  { label: 'Beranda', page: 'home' },
  { label: 'Paket Wisata', page: 'home', sectionId: 'paket-wisata' },
  { label: 'Wisata Privat', page: 'home', sectionId: 'private-trip' },
  { label: 'Galeri', page: 'galeri' },
  { label: 'Tentang Kami', page: 'tentang' },
  { label: 'Kontak', page: 'kontak' },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageKey, sectionId?: string) => {
    onNavigate(page, sectionId);
    setMobileMenuOpen(false);
  };

  const openWhatsAppGeneral = () => {
    const text = 'Halo Dolphin Trip, saya ingin konsultasi mengenai paket wisata.';
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  };

  const isActive = (item: (typeof NAV_ITEMS)[number]) =>
    item.sectionId === undefined && currentPage === item.page;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Main bar */}
      <div className="border-b border-[#e5e7eb]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 h-16">
          {/* Left: Menu (mobile/tablet) + Logo */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center gap-1.5 text-sm font-medium text-[#111111] border border-[#d1d5db] rounded px-2.5 sm:px-3 py-1.5 shrink-0"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span className="hidden min-[400px]:inline">Menu</span>
            </button>

            <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 sm:gap-2.5 text-left min-w-0">
              <img
                src={logoMark}
                alt="Logo Dolphin Trip"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white object-contain shrink-0"
              />
              <span className="min-w-0">
                <span className="block font-serif font-bold text-base sm:text-lg text-[#111111] leading-none tracking-tight truncate">
                  Dolphin Trip
                </span>
                <span className="hidden min-[480px]:block text-[11px] text-[#4b5563] mt-0.5 truncate">
                  Wisata Nyaman Indonesia
                </span>
              </span>
            </button>
          </div>

          {/* Center nav — desktop */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page, item.sectionId)}
                className={`text-sm 2xl:text-[15px] font-medium whitespace-nowrap transition-colors hover:text-[#0077C8] hover:underline underline-offset-4 ${
                  isActive(item) ? 'text-[#0077C8] underline underline-offset-4' : 'text-[#222222]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleNavClick('home', 'paket-wisata')}
              className="hidden sm:flex p-2 rounded-full text-[#4b5563] hover:bg-[#f3f4f6] transition-colors"
              aria-label="Pencarian"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={openWhatsAppGeneral}
              className="px-3 sm:px-5 py-2 rounded bg-[#00205B] hover:bg-[#0077C8] text-white text-[13px] sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0"
            >
              <span className="hidden min-[480px]:inline">Konsultasi Gratis</span>
              <span className="min-[480px]:hidden">Konsultasi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/tablet dropdown panel */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#e5e7eb] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
          <nav className="px-6 py-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page, item.sectionId)}
                className={`w-full text-left py-3 border-b border-[#f3f4f6] last:border-0 text-[15px] font-medium ${
                  isActive(item) ? 'text-[#0077C8]' : 'text-[#222222]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
