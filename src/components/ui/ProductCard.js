// components/ui/ProductCard.js
'use client';

import Image from 'next/image';
import { Pill } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function ProductCard({ product }) {
  const {
    name,
    description,
    composition,
    packSize,
    image,
    category,
  } = product;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105">
      {/* Image Section */}
      <div className="relative aspect-square bg-gradient-to-br from-blue-50 to-blue-50">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Prescription Badge */}
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
            <Pill className="h-3 w-3 mr-1" />
            Prescription Required
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-white/80 text-gray-700 border-blue-200">
            {category}
          </Badge>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="font-bold text-gray-900 mb-3 text-xl text-center">{name}</h3>
        
        {/* Composition */}
        {composition && (
          <div className="text-center mb-3">
            <p className="text-sm text-blue-700 font-semibold bg-blue-50 rounded-lg py-2 px-3 inline-block">
              {composition}
            </p>
          </div>
        )}
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed text-center">{description}</p>

        {/* Pack Size */}
        {packSize && (
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg font-semibold text-sm">
              Pack: {packSize}
            </div>
          </div>
        )}

        {/* Informational Notice */}
        <div className="text-center">
          <p className="text-xs text-blue-600 bg-blue-50 rounded-lg py-2 px-3">
            For distribution through authorized medical channels only
          </p>
        </div>
      </div>
    </div>
  );
}