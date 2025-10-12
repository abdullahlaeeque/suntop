// // components/sections/FeaturedProducts.js
// import { ProductCard } from '@/components/ui/ProductCard';

// const featuredProducts = [
//   {
//     id: '1',
//     name: 'Glucomat-GP1 Tablets',
//     description: 'Metformin Hydrochloride Prolonged Release and Glimepiride Tablets I.P. - Advanced diabetes management with dual-action therapy for effective glycemic control.',
//     composition: 'Metformin HCl PR + Glimepiride',
//     packSize: '10 x 15 Tablets',
//     image: '/gp1.jpeg',
//     category: 'Diabetes Care'
//   },
//   {
//     id: '2',
//     name: 'Glucomat-GP2 Tablets',
//     description: 'Metformin Hydrochloride Prolonged Release and Glimepiride Tablets I.P. - Comprehensive diabetes management solution for sustained blood sugar control.',
//     composition: 'Metformin HCl PR + Glimepiride',
//     packSize: '10 x 15 Tablets',
//     image: '/gp2.jpeg',
//     category: 'Diabetes Care'
//   }
// ];

// export function FeaturedProducts() {
//   return (
//     <section className="py-16 bg-gradient-to-b from-orange-50 to-amber-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm mb-4">
//             <span className="text-sm text-orange-700 font-medium">Our Flagship Products</span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Diabetes Care Range
//           </h2>
//           <p className="text-gray-700 max-w-2xl mx-auto text-lg">
//             High-quality diabetes medications manufactured with precision and care for effective management
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {featuredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl hover:scale-105 transition-all duration-300 font-semibold text-lg shadow-lg shadow-orange-200">
//             View Complete Product Portfolio
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { ProductCard } from '@/components/ui/ProductCard';
import { useEffect, useRef } from 'react';

const featuredProducts = [
  {
    id: '1',
    name: 'Glucomat-GP1 Tablets',
    description: 'Metformin Hydrochloride Prolonged Release and Glimepiride Tablets I.P. - Advanced diabetes management with dual-action therapy for effective glycemic control.',
    composition: 'Metformin HCl PR + Glimepiride',
    packSize: '10 x 15 Tablets',
    image: '/gp1.jpeg',
    category: 'Diabetes Care'
  },
  {
    id: '2',
    name: 'Glucomat-GP2 Tablets',
    description: 'Metformin Hydrochloride Prolonged Release and Glimepiride Tablets I.P. - Comprehensive diabetes management solution for sustained blood sugar control.',
    composition: 'Metformin HCl PR + Glimepiride',
    packSize: '10 x 15 Tablets',
    image: '/gp2.jpeg',
    category: 'Diabetes Care'
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5 // Increased delay for noticeable stagger
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 }, // Increased y for more pronounced slide-up
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Longer duration for smoother effect
      ease: 'easeOut'
    }
  }
};

export function FeaturedProducts() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -200px 0px' }); // Adjusted margin for earlier trigger

  useEffect(() => {
    console.log('FeaturedProducts inView:', inView); // Debugging log
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-orange-200 shadow-sm mb-4"
          >
            <span className="text-sm text-orange-700 font-medium">Our Flagship Products</span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Diabetes Care Range
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-gray-700 max-w-2xl mx-auto text-lg"
          >
            High-quality diabetes medications manufactured with precision and care for effective management
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

     
      </div>
    </section>
  );
}