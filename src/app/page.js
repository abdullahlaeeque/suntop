'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';

export default function Home() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '0px 0px -100px 0px' });
  const featuredInView = useInView(featuredRef, { once: true, margin: '0px 0px -200px 0px' });

  useEffect(() => {
    console.log('HeroSection inView:', heroInView);
    console.log('FeaturedProducts inView:', featuredInView);
  }, [heroInView, featuredInView]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">
        <div ref={heroRef}>
          <HeroSection isVisible={heroInView} />
        </div>
        <div ref={featuredRef}>
          <FeaturedProducts isVisible={featuredInView} />
        </div>
        {/* Add more sections here */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}