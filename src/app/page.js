'use client';

import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { Header } from '../components/sections/Navbar';
import { Footer } from '@/components/layout/Footer';
// import { HeroSection } from '../components/sections/HeroSection';
// import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { IntroSection } from '@/components/sections/IntroSection';

export default function Home() {
  const introRef = useRef(null);
  const heroRef = useRef(null);
  const featuredRef = useRef(null);

  const introInView = useInView(introRef, { once: true, margin: '0px 0px -150px 0px' });
  const heroInView = useInView(heroRef, { once: true, margin: '0px 0px -100px 0px' });
  const featuredInView = useInView(featuredRef, { once: true, margin: '0px 0px -200px 0px' });

  useEffect(() => {
    console.log('IntroSection inView:', introInView);
    console.log('HeroSection inView:', heroInView);
    console.log('FeaturedProducts inView:', featuredInView);
  }, [introInView, heroInView, featuredInView]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">

        <div ref={introRef}>
          <IntroSection isVisible={introInView} />
        </div>
{/* 
        <div ref={heroRef}>
          <HeroSection isVisible={heroInView} />
        </div> */}

        {/* <div ref={featuredRef}>
          <FeaturedProducts isVisible={featuredInView} />
        </div> */}

      </main>
      {/* <Footer /> */}
    </div>
  );
}