// app/contact/page.js
'use client'
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-50 ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white pt-40 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Get in touch for product inquiries, distributorship, or partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-gray-600 text-lg">
                Choose your preferred way to connect with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* WhatsApp Contact */}
              <a
                href="https://wa.me/917089935433"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="bg-green-100 rounded-2xl p-4 inline-flex mb-4 group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Quick responses for immediate inquiries
                  </p>

                  <div className="text-gray-500 text-sm mt-2">Click to chat directly</div>
                </div>
              </a>

              {/* Instagram Contact */}
              <a
                href="https://instagram.com/_glucomat_"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4 inline-flex mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                    <Instagram className="h-8 w-8 text-gradient-to-r from-purple-600 to-pink-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Instagram</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Follow us for updates and product information
                  </p>
                  <div className="text-gray-500 text-sm mt-2">Click to visit our profile</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Contact Info */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Contact Methods</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


              {/* Email */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm text-center">
                <div className="bg-blue-100 rounded-xl p-3 inline-flex mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:info@suntop.com" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  sigpharma25@gmail.com
                </a>
                <p className="text-gray-500 text-sm mt-2">For detailed inquiries</p>
              </div>

              {/* Address */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm text-center">
                <div className="bg-blue-100 rounded-xl p-3 inline-flex mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Location</h3>
                <div className="text-gray-700 font-semibold">
                  41, Signature Park Colony Aro city, Gandhi Nagar, Bhopal, Madhya Pradesh 462001'
                </div>
                <p className="text-gray-500 text-sm mt-2">Registered Office</p>
              </div>
            </div>
          </div>
        </div>
      </section>




    </div>
  );
}