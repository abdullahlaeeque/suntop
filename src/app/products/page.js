'use client'

import { useState } from 'react';
import Image from 'next/image';
import { X, Pill, Package, Calendar } from 'lucide-react';
import { HeroSection } from '@/components/sections/HeroSection';

const products = [
  {
    id: '1',
    name: 'Glucomat-GP1 Tablets',
    description:
      'Metformin Hydrochloride Prolonged Release and Glimepiride Tablets I.P. - Advanced diabetes management with dual-action therapy for effective glycemic control.',
    composition: 'Metformin HCl PR + Glimepiride',
    packSize: '10 x 15 Tablets',
    image: '/gp1.jpeg',
    category: 'Diabetes Care'
  },
  {
    id: '2',
    name: 'Glucomat-GP2 Tablets',
    description:
      'Metformin Hydrochloride Prolonged Release and Glimepiride Tablets I.P. - Comprehensive diabetes management solution for sustained blood sugar control.',
    composition: 'Metformin HCl PR + Glimepiride',
    packSize: '10 x 15 Tablets',
    image: '/gp2.jpeg',
    category: 'Diabetes Care'
  }
];

function ProductDialog({ product, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">

        <div className="relative bg-gradient-to-r from-blue-600 to-blue-600 text-white p-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{product.name}</h2>

            <button onClick={onClose}>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <Pill className="h-4 w-4" />
            <span className="text-blue-100">{product.category}</span>
          </div>
        </div>

        <div className="p-6">

          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 bg-blue-50 rounded-2xl border border-blue-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Composition</h3>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 text-blue-700">
                <Pill className="h-5 w-5" />
                <span className="font-semibold">{product.composition}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Pack Size</h3>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-2 text-blue-700">
                <Package className="h-5 w-5" />
                <span className="font-semibold">{product.packSize}</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-center space-x-2 text-blue-700">
              <Calendar className="h-5 w-5" />
              <span className="font-semibold text-sm">Prescription Required</span>
            </div>
            <p className="text-blue-600 text-sm mt-1">
              This medication requires a valid prescription from a healthcare professional.
            </p>
          </div>

        </div>

        <div className="border-t p-6 flex gap-3 flex-col sm:flex-row">

          <a
            href="https://wa.me/917089935433?text=Hi,%20I'm%20interested%20in%20Glucomat-GP1%20Tablets"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-center font-semibold"
          >
            Inquire on WhatsApp
          </a>

          <button
            onClick={onClose}
            className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-xl font-semibold"
          >
            Close
          </button>

        </div>

      </div>
    </div>
  );
}

export default function ProductsPage() {

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-50">

      {/* HERO */}
      <HeroSection />

      {/* PRODUCTS GRID */}
      <section id="products-section" className="py-16">

        <div className="container mx-auto px-4 max-w-5xl">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {products.map((product) => (

              <div
                key={product.id}
                onClick={() => openDialog(product)}
                className="bg-white rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all overflow-hidden cursor-pointer"
              >

                <div className="relative aspect-square bg-blue-50">

                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                  />

                  <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200">
                    {product.category}
                  </div>

                </div>

                <div className="p-6 text-center">

                  <h3 className="text-xl font-bold mb-3">
                    {product.name}
                  </h3>

                  <div className="space-y-3">

                    <div className="flex items-center space-x-2 justify-center">
                      <Pill className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        {product.composition}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 justify-center">
                      <Package className="h-4 w-4 text-blue-600" />
                      <span className="text-sm text-gray-600">
                        {product.packSize}
                      </span>
                    </div>

                  </div>

                  <div className="mt-4 text-blue-600 font-semibold text-sm">
                    View Details →
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {selectedProduct && (
        <ProductDialog
          product={selectedProduct}
          isOpen={isDialogOpen}
          onClose={closeDialog}
        />
      )}

    </div>
  );
}