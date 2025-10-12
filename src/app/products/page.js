// app/products/page.js
'use client'
import { useState } from 'react';
import Image from 'next/image';
import { X, Pill, Package, Calendar } from 'lucide-react';

const products = [
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

function ProductDialog({ product, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center ">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto " >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white p-4">
        <div className="flex justify-between items-start ">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <button
              onClick={onClose}
              className="text-white hover:text-orange-200 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex items-center space-x-2 mt-2">
            <Pill className="h-4 w-4" />
            <span className="text-orange-100">{product.category}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Product Image */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Composition */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Composition</h3>
            <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
              <div className="flex items-center space-x-2 text-orange-700">
                <Pill className="h-5 w-5" />
                <span className="font-semibold">{product.composition}</span>
              </div>
            </div>
          </div>

          {/* Pack Size */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pack Size</h3>
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <div className="flex items-center space-x-2 text-amber-700">
                <Package className="h-5 w-5" />
                <span className="font-semibold">{product.packSize}</span>
              </div>
            </div>
          </div>

          {/* Prescription Notice */}
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

        {/* Footer */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/917089935433?text=Hi,%20I'm%20interested%20in%20Glucomat-GP1%20Tablets"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-center transition-all duration-300 hover:scale-105"
            >
              Inquire on WhatsApp
            </a>
            <button
              onClick={onClose}
              className="flex-1 border border-orange-600 text-orange-600 hover:bg-orange-50 py-3 rounded-xl font-semibold transition-all duration-300"
            >
              Close
            </button>
          </div>
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
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className='min-h-screen bg-gradient-to-b from-orange-50 to-amber-50'>
    {/* Hero Section */}
    <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white pt-40 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
              High-quality diabetes medications manufactured with precision and care
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => openDialog(product)}
                >
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-orange-50 to-amber-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold border border-orange-200">
                        {product.category}
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                      {product.name}
                    </h3>

                    <div className="space-y-3">
                      {/* Composition */}
                      <div className="flex items-center space-x-2">
                        <Pill className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{product.composition}</span>
                      </div>

                      {/* Pack Size */}
                      <div className="flex items-center space-x-2">
                        <Package className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{product.packSize}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 text-center">
                      <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Product Dialog */}
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