// app/distributors/page.js
'use client'
import { MapPin, Phone, User } from 'lucide-react';

const distributors = [
  {
    id: 1,
    name: 'Masha Traders',
    contact: '+91 70899 35433',
    location: 'Old Bhopal & Hoshangabad Road, MP',
    contactPerson: 'Syed Manzer Ali'
  },
  {
    id: 2,
    name: 'Medico Trader',
    contact: '+91 78982 09997',
    location: 'Old Bhopal, Sehore & Berasiya, MP',
    contactPerson: 'Farhan Khan'
  },
  {
    id: 3,
    name: 'Shri Krishnam Agency',
    contact: '+91 70243 00751',
    location: 'Mungaoli, Ashok Nagar & Guna, MP',
    contactPerson: 'Anshul Soni'
  }
];

export default function DistributorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-amber-600 text-white pt-40 py-16">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10"> 
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Distribution Network
            </h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
              Meet our trusted network of distributors delivering quality diabetes care across Madhya Pradesh
            </p>
          </div>
        </div>
      </section>



      {/* Distributors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Distribution Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Dedicated distributors serving healthcare providers across Madhya Pradesh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {distributors.map((distributor) => (
              <div
                key={distributor.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:transform hover:scale-105"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-6 text-white">
                  <h3 className="text-xl font-bold text-center">{distributor.name}</h3>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  {/* Contact Person */}
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 rounded-lg p-2 flex-shrink-0">
                      <User className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Contact Person</div>
                      <div className="font-semibold text-gray-900">{distributor.contactPerson}</div>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-100 rounded-lg p-2 flex-shrink-0">
                      <Phone className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Contact Number</div>
                      <div className="font-semibold text-gray-900">{distributor.contact}</div>
                    </div>
                  </div>

                  {/* Location Info */}
                  <div className="flex items-start space-x-3">
                    <div className="bg-orange-100 rounded-lg p-2 flex-shrink-0 mt-1">
                      <MapPin className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Distribution Area</div>
                      <div className="font-semibold text-gray-900">{distributor.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}