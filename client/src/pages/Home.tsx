import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CEOVideo from '@/components/CEOVideo';
import Process from '@/components/Process';
import Differentials from '@/components/Differentials';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page - Homes Engenharia
 * Premium institutional website for high-standard residential construction
 * 
 * Design: Luxury Minimalism
 * - Generous whitespace and asymmetric layouts
 * - Hierarchical typography with Playfair Display + Inter
 * - Orange accent (#E8471A) used strategically
 * - Smooth animations and refined interactions
 * - Premium card styles with soft shadows
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        <About />
        <CEOVideo />
        <Process />
        <Differentials />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
