// // components/sections/HeroSection.js
// 'use client';

// import { Button } from '@/components/ui/button';
// import { ArrowRight, Shield, Users, Award, Pill, Syringe, Handshake } from 'lucide-react';

// export function HeroSection() {
//   const features = [
//     {
//       icon: Award,
//       title: 'GMP Certified',
//       description: 'WHO-GMP certified manufacturing'
//     },
//     {
//       icon: Shield,
//       title: 'Quality Assured',
//       description: 'Stringent quality control'
//     },
//     {
//       icon: Users,
//       title: 'Trusted Partner',
//       description: '500+ distribution partners'
//     }
//   ];

//   return (
//     <section className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen flex items-center overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200/20 via-amber-100/30 to-yellow-50"></div>
      
//       {/* Floating Elements */}
//       <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"></div>
      
//       <div className="container mx-auto px-4 py-20 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Content */}
//           <div className="space-y-8">
//             <div className="space-y-4">
//               <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm">
//                 <Pill className="h-4 w-4 text-orange-600" />
//                 <span className="text-sm text-orange-700 font-medium">Leading Diabetes Medicine Manufacturer</span>
//               </div>
              
//               <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight text-gray-900">
//               Advance Ethical
//                 <span className="block text-orange-600"> Diabetic and cardiac medicine </span>
//               </h1>
              
//               <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
//                 Manufacturing high-quality diabetes medications and offering exclusive distributorship opportunities. Join us in revolutionizing diabetes care across the nation.
//               </p>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-200">
//                 <Pill className="mr-3 h-5 w-5" />
//                 View Products
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-sm">
//                 <Handshake className="mr-3 h-5 w-5" />
//                 Become Distributor
//               </Button>
//             </div>

//             {/* Features */}
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
//               {features.map((feature, index) => (
//                 <div key={index} className="group">
//                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 hover:transform hover:scale-105">
//                     <div className="flex items-center space-x-3">
//                       <div className="bg-orange-100 rounded-xl p-3 border border-orange-200 group-hover:bg-orange-200 transition-colors">
//                         <feature.icon className="h-6 w-6 text-orange-600" />
//                       </div>
//                       <div>
//                         <div className="font-bold text-gray-900 text-sm">{feature.title}</div>
//                         <div className="text-gray-600 text-xs">{feature.description}</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Glass Card */}
//           <div className="relative">
//             {/* Main Glass Card */}
//             <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-orange-100 shadow-2xl">
//               <div className="text-center space-y-6">
//                 {/* Icon */}
//                 <div className="flex justify-center">
//                   <div className="bg-orange-100 rounded-2xl p-4 border border-orange-200">
//                     <Syringe className="h-12 w-12 text-orange-600" />
//                   </div>
//                 </div>
                
//                 {/* Content */}
//                 <div className="space-y-4">
//                   <h3 className="text-2xl font-bold text-gray-900">Distributorship Opportunity</h3>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     Join our network of successful distributors and grow with India's trusted diabetes care brand.
//                   </p>
//                 </div>
                
//                 {/* Stats */}
//                 <div className="grid grid-cols-3 gap-4 pt-4">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-orange-600">50+</div>
//                     <div className="text-xs text-gray-600">Products</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-orange-600">500+</div>
//                     <div className="text-xs text-gray-600">Partners</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold text-orange-600">25+</div>
//                     <div className="text-xs text-gray-600">States</div>
//                   </div>
//                 </div>
                
//                 {/* CTA Button */}
//                 <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-6 text-lg font-semibold mt-4 transition-all duration-300 shadow-lg shadow-orange-200">
//                   <Handshake className="mr-2 h-5 w-5" />
//                   Apply Now
//                   <ArrowRight className="ml-2 h-5 w-5" />
//                 </Button>
//               </div>
//             </div>
            
//             {/* Decorative Elements */}
//             <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200/40 rounded-full blur-xl"></div>
//             <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-200/30 rounded-full blur-xl"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Award, Pill, Syringe, Handshake } from 'lucide-react';
import { useEffect, useRef } from 'react';
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut'
    }
  }
};

export function HeroSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const features = [
    {
      icon: Award,
      title: 'GMP Certified',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
    },
    {
      icon: Users,
      title: 'Trusted Partner',
    }
  ];

  const handleNavigate = () => {
    router.push('/products');

  }

  return (
    <section ref={ref} className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-200/20 via-amber-100/30 to-yellow-50"
        initial="hidden"
        animate={controls}
        variants={itemVariants}
      ></motion.div>
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl"
        initial="hidden"
        animate={controls}
        variants={itemVariants}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl"
        initial="hidden"
        animate={controls}
        variants={itemVariants}
      ></motion.div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm">
                <Pill className="h-4 w-4 text-orange-600" />
                <span className="text-sm text-orange-700 font-medium">Leading Diabetes Medicine Manufacturer</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold leading-tight text-gray-900">
                Advance Ethical
                <span className="block text-orange-600"> Diabetic and cardiac medicine </span>
              </h1>
              
              <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
                Manufacturing high-quality diabetes medications and offering exclusive distributorship opportunities. Join us in revolutionizing diabetes care across the nation.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Button 
                size="lg" 
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-xl px-8 py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-200"
                as={motion.button}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNavigate}
              >
                <Pill className="mr-3 h-5 w-5" />
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
             
            </motion.div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
              variants={containerVariants}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="group"
                  variants={itemVariants}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-orange-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex items-center space-x-3">
                      <div className="bg-orange-100 rounded-xl p-3 border border-orange-200 group-hover:bg-orange-200 transition-colors">
                        <feature.icon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{feature.title}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Glass Card */}
          <motion.div 
            className="relative"
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            {/* Main Glass Card */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-orange-100 shadow-2xl">
              <div className="text-center space-y-6">
                {/* Icon */}
                <motion.div 
                  className="flex justify-center"
                  variants={itemVariants}
                >
                  <div className="bg-orange-100 rounded-2xl p-4 border border-orange-200">
                    <Syringe className="h-12 w-12 text-orange-600" />
                  </div>
                </motion.div>
                
                {/* Content */}
                <motion.div 
                  className="space-y-4"
                  variants={containerVariants}
                >
                  <h3 className="text-2xl font-bold text-gray-900">Distributorship Opportunity</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Join our network of successful distributors and grow with India's trusted diabetes care brand.
                  </p>
                </motion.div>
                
                {/* Stats */}
               
                
                {/* CTA Button */}
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl py-6 text-lg font-semibold mt-4 transition-all duration-300 shadow-lg shadow-orange-200"
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push('/contact')}
                >
                  <Handshake className="mr-2 h-5 w-5" />
                  Contact Us to become Distributor
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-orange-200/40 rounded-full blur-xl"
              initial="hidden"
              animate={controls}
              variants={itemVariants}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-200/30 rounded-full blur-xl"
              initial="hidden"
              animate={controls}
              variants={itemVariants}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}