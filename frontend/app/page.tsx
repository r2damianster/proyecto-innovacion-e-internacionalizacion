import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TeamSection from '@/components/TeamSection';
import VideoGallery from '@/components/VideoGallery';
import PublicationsSection from '@/components/PublicationsSection';
import NewsSection from '@/components/NewsSection';
import ActivityGallery from '@/components/ActivityGallery';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <TeamSection />
        <VideoGallery />
        <PublicationsSection />
        <NewsSection />
        <ActivityGallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
