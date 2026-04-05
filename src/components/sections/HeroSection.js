'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Award, Pill, Handshake } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const features = [
    {
      icon: Award,
      title: 'GMP Certified',
      description: 'Highest manufacturing standards'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Rigorous quality control'
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Nationwide network'
    }
  ];

  // UPDATED FUNCTION (Smooth Scroll)
  const handleNavigate = () => {
    const section = document.getElementById('products-section');

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onLoadedData={handleVideoLoad}
          className="w-full h-full object-cover"
          poster="/placeholder.jpg"
        >
          <source src="/glucomat.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[5px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto">

          <motion.div
            className="w-full space-y-8"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >

            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
              variants={itemVariants}
            >
              <Shield className="h-4 w-4 text-white mr-2" />
              <span className="text-white text-sm font-medium">Trusted Healthcare Partner</span>
            </motion.div>

            {/* Heading */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Advance Ethical
                <span className="block text-white mt-2">
                  Diabetic & Cardiac
                </span>
                <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  Medicine
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto">
                Manufacturing high-quality diabetes and cardiac medications with exclusive distributorship opportunities across the nation.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={itemVariants}
            >

              <Button
                size="lg"
                className="bg-white text-[#2d66ac] hover:bg-gray-100 rounded-lg px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105 shadow-lg border-0"
                onClick={handleNavigate}
              >
                <Pill className="mr-2 h-5 w-5" />
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-lg px-8 py-4 text-base font-semibold transition-all duration-300 hover:scale-105"
                onClick={() => router.push('/distributors')}
              >
                <Handshake className="mr-2 h-5 w-5" />
                Become Distributor
              </Button>

            </motion.div>

            {/* Features */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto"
              variants={containerVariants}
            >

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="group"
                >

                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-white/30 transition-all duration-300 h-full">

                    <div className="flex flex-col items-center text-center space-y-3">

                      <div className="bg-white/20 rounded-lg p-2 border border-white/30 group-hover:bg-white/30 transition-colors">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-semibold text-white text-base">{feature.title}</h3>
                        <p className="text-gray-200 text-xs">{feature.description}</p>
                      </div>

                    </div>

                  </div>

                </motion.div>
              ))}

            </motion.div>

          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >

        <div className="flex flex-col items-center space-y-2">

          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white/50 rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>

        </div>

      </motion.div>

    </section>
  );
}