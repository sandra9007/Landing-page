
import React from 'react';
import { 
   Car, Shield, Search, Globe, Lock, Users, 
   BarChart, Eye, Upload,  Phone, 
} from 'lucide-react';

const KeyFeature = () => {
    return(
        <>
   {/* Key Feature - Phone Display */}
<section className="container mx-auto px-4 py-16">
  <div className="max-w-6xl mx-auto">
    <div className="bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl border border-gray-800 mb-16">
      <div className="flex items-start gap-4 mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-[#a4b937]/20 to-[#526103]/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <Shield className="text-[#a4b937]" size={24} />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">🔑 Key Features</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#a4b937] to-[#526103] rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg">
            Everything you need to manage your vehicle inventory efficiently in one powerful platform.
          </p>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Phone Frame */}
        <div className="relative flex justify-center lg:sticky lg:top-24">
          <div className="relative w-full max-w-md">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[320px] h-[640px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.8rem] border-[12px] border-gray-900 shadow-xl"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-5 bg-gray-900 rounded-b-lg z-20"></div>
                
                <div className="relative h-full pt-8 px-3 overflow-hidden">
                  <div className="w-full h-full bg-gray-800 rounded-[2rem] overflow-hidden">
                    <img 
                      src="./src/assets/image/image1.png" 
                      alt="Moto Mall App - Vehicle Listing"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gray-700 rounded-full"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#a4b937]/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#526103]/10 rounded-full blur-xl"></div>
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-sm">Vehicle Listing Interface</p>
              <p className="text-gray-600 text-xs mt-1">Complete car details at a glance</p>
            </div>
          </div>
        </div>

        {/* Right Column - Complete Features List */}
        <div className="space-y-6">
          {/* Vehicle Listing Management */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#a4b937]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Car className="text-[#a4b937]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Vehicle Listing Management</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Add and maintain car listings with full details including model, variant, year, mileage, and condition. Keep your inventory organized and up-to-date.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image Upload */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#a4b937]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Upload className="text-[#a4b937]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Image Upload</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Upload multiple images for each vehicle to support better evaluation. Showcase your inventory with high-quality photos from every angle.
                </p>
              </div>
            </div>
          </div>
          
          {/* Real-Time Inventory View */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#a4b937]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Eye className="text-[#a4b937]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Real-Time Inventory View</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  View available stock (new and used) and unsold cars in real time. Always know exactly what's in your showroom with instant updates.
                </p>
              </div>
            </div>
          </div>
          
          {/* Search & Filter Cars */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#a4b937]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Search className="text-[#a4b937]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Search & Filter Cars</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Find specific cars quickly by model, variant, year, condition, and more. Powerful search capabilities help you locate vehicles in seconds.
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Model', 'Variant', 'Year', 'Condition', 'Price', 'Mileage'].map((filter) => (
                    <span key={filter} className="px-3 py-1.5 bg-gray-900 text-gray-300 rounded-lg text-xs border border-gray-700">
                      {filter}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Stock Status Tracking */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#a4b937]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <BarChart className="text-[#a4b937]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Stock Status Tracking</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Track availability status (Available / Sold / Unsold) for better inventory control. Never lose track of which vehicles are ready for sale.
                </p>
                
                <div className="flex items-center gap-3 mt-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                    <span className="text-xs text-gray-300">Available</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                    <span className="text-xs text-gray-300">Sold</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
                    <span className="text-xs text-gray-300">Unsold</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vehicle Visibility Control */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#a4b937]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Globe className="text-[#a4b937]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Vehicle Visibility Control</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Dealers can choose whether a car listing is public or private while uploading it. 
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-900/80 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="text-[#a4b937]" size={16} />
                      <h4 className="font-semibold text-white text-sm">Public Listings</h4>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Visible to all users and dealers on the app. Perfect for promoting available inventory.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/80 p-4 rounded-lg border border-gray-700">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="text-[#a4b937]" size={16} />
                      <h4 className="font-semibold text-white text-sm">Private Listings</h4>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Visible only to the dealer who uploaded the car. Ideal for internal stock management.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-xs mt-3 border-t border-gray-800 pt-3">
                  This helps dealers manage internal stock and share selected vehicles publicly.
                </p>
              </div>
            </div>
          </div>
          
          {/* Dealer to Dealer Car Request */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-[#a4b937]/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Users className="text-[#a4b937]" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">Dealer to Dealer Car Request</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Dealers can request specific vehicles from other dealers on the platform. Expand your inventory network and find the cars your customers need.
                </p>
                
                <div className="bg-gray-900/80 p-4 rounded-lg border border-gray-700 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#a4b937]/20 to-[#526103]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#a4b937]" size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm mb-1">How it works:</h4>
                      <p className="text-gray-400 text-xs">
                        The receiving dealer checks their inventory and can contact the requesting dealer 
                        through the provided mobile phone number if the requested car is available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
    )};
    export default KeyFeature;