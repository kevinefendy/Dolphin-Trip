import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedTrips } from './components/FeaturedTrips';
import { PrivateTripBuilder } from './components/PrivateTripBuilder';
import { GallerySection } from './components/GallerySection';
import { AboutLegalSection } from './components/AboutLegalSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TripDetailModal } from './components/TripDetailModal';
import { TRIPS_DATA } from './data/tripsData';
import type { Trip, PageKey } from './types';

export function App() {
  const [page, setPage] = useState<PageKey>('home');
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [destinationFilter, setDestinationFilter] = useState<string | null>(null);

  const navigate = (target: PageKey, sectionId?: string) => {
    setPage(target);
    // Tunggu halaman baru ter-render sebelum scroll
    setTimeout(() => {
      if (sectionId) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }, 60);
  };

  const handleFilterDestination = (dest: string) => {
    setDestinationFilter(dest);
    navigate('home', 'paket-wisata');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-600 selection:text-white">
      <Navbar currentPage={page} onNavigate={navigate} />

      <main className="flex-1">
        {page === 'home' && (
          <>
            <Hero
              onExploreClick={() => navigate('home', 'paket-wisata')}
              onFilterDestination={handleFilterDestination}
              onPlanTripClick={() => navigate('home', 'private-trip')}
            />

            <FeaturedTrips
              trips={TRIPS_DATA}
              onSelectTrip={(trip) => setSelectedTrip(trip)}
              activeDestinationFilter={destinationFilter}
              onClearDestinationFilter={() => setDestinationFilter(null)}
            />

            <PrivateTripBuilder />

            <Testimonials />

            <FaqSection />
          </>
        )}

        {page === 'galeri' && (
          <div className="pt-16">
            <GallerySection />
          </div>
        )}

        {page === 'tentang' && (
          <div className="pt-16">
            <AboutLegalSection />
          </div>
        )}

        {page === 'kontak' && (
          <div className="pt-16">
            <ContactSection />
          </div>
        )}
      </main>

      <Footer onNavigate={navigate} />

      {/* Detail Modal with Day-by-Day Rundown & WhatsApp Booking */}
      <TripDetailModal
        trip={selectedTrip}
        onClose={() => setSelectedTrip(null)}
      />
    </div>
  );
}

export default App;
