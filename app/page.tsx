import Header from '@/components/Header';
import QRPromoModal from '@/components/QRPromoModal';
import QRFloatingButton from '@/components/QRFloatingButton';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TeamSection from '@/components/TeamSection';
import VideoGallery from '@/components/VideoGallery';
import SubstantiveFunctionsSection from '@/components/SubstantiveFunctionsSection';
import ConnectionsSection from '@/components/ConnectionsSection';
import PublicationsSection from '@/components/PublicationsSection';
import NewsSection from '@/components/NewsSection';
import ActivityGallery from '@/components/ActivityGallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <QRPromoModal />
      <QRFloatingButton />
      <Header />
      <main>
        <Hero />
        <About />
        <TeamSection />
        <VideoGallery />
        <SubstantiveFunctionsSection />
        <ConnectionsSection />
        <PublicationsSection />
        <NewsSection />
        <ActivityGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
