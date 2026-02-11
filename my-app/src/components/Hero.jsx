import React from 'react';
import { 
   ChevronRight,MessageSquare  
} from 'lucide-react';

const Hero = () => {
  
    return(
        <>
          {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Moto Mall
            </h1>
            <div className="inline-block">
              <p className="text-xl md:text-2xl text-[#a4b937] font-semibold mb-2">
                Smart Vehicle Inventory Management
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-[#a4b937] to-[#525b22] rounded-full"></div>
            </div>
            <p className="text-2xl md:text-3xl text-gray-300 mt-6 mb-8">
              Manage. Display. Sell.
            </p>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
              A powerful mobile application built for showroom owners and vehicle dealers to manage, track, and display vehicle inventory in one simple platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center justify-center gap-3 bg-[#a4b937] text-white px-8 py-4 rounded-xl hover:bg-[#94a931] transition-all font-semibold text-lg shadow-xl hover:shadow-2xl">
                Start Free Trial
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center justify-center gap-3 bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-xl hover:border-[#a4b937] hover:bg-gray-50 transition-all font-semibold text-lg">
                <MessageSquare size={20} />
                Schedule Demo
              </button>
            </div>
          </div>

          {/* Stats Banner */}
          <div className="bg-gradient-to-r from-[#a4b937] to-[#526103] rounded-2xl p-8 mb-16 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                <div className="text-green-100">Dealers Trust Us</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10K+</div>
                <div className="text-green-100">Vehicles Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-green-100">Real-Time Updates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99%</div>
                <div className="text-green-100">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
      )};
      export default Hero;