// app/about/page.js
import { Target, Globe, Award, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-50 ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-700 text-white pt-40 py-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Suntop International
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Leading manufacturer of high-quality diabetes medications in India
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg">
              <div className="text-center mb-4">
                <div className="bg-blue-100 rounded-xl p-3 inline-flex">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed text-center">
                To manufacture and deliver high-quality, affordable diabetes medications that improve patient lives through trusted distribution networks.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-lg">
              <div className="text-center mb-4">
                <div className="bg-blue-100 rounded-xl p-3 inline-flex">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed text-center">
                To be the most trusted diabetes care manufacturer, making quality treatment accessible across India.
              </p>
            </div>
          </div>
        </div>
      </section>

   

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Focus</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Quality */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm text-center">
              <div className="bg-blue-100 rounded-xl p-3 inline-flex mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Manufacturing</h3>
              <p className="text-gray-600 text-sm">
                WHO-GMP certified facility with rigorous quality control standards
              </p>
            </div>

            {/* Products */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm text-center">
              <div className="bg-blue-100 rounded-xl p-3 inline-flex mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diabetes Specialization</h3>
              <p className="text-gray-600 text-sm">
                Focused on developing effective diabetes management solutions
              </p>
            </div>

            {/* Partnerships */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100 shadow-sm text-center">
              <div className="bg-blue-100 rounded-xl p-3 inline-flex mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Distribution Network</h3>
              <p className="text-gray-600 text-sm">
                Strong partnerships with distributors across multiple states
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}