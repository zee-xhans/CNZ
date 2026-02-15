import Navbar from './_components/Navbar';
import Hero from './_components/Hero';
import Stats from './_components/Stats';
import Features from './_components/Features';
import FAQ from './_components/FAQ';
import Footer from './_components/Footer';
import Content from './_components/Content';

export default function Home() {
  return (
    <div className="   min-h-screen text-white ">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24 space-y-24 md:space-y-32">
        {/* Hero & Highlight Stats */}
        <Hero />
        <Stats />

        {/* Light content section before returning to dark theme */}
        <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-white text-[#212F3D]">
          <div className="max-w-7xl mx-auto">
            <Content />
          </div>
        </div>

        {/* Feature highlight & FAQs on dark background for contrast */}
        <Features />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}