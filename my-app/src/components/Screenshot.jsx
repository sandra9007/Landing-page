import React from 'react';
import { 
  Search, Users, 
  CheckCircle
} from 'lucide-react';

const Screenshot = () => {
    return (
        <>
    {/* Additional Screenshots Gallery */}
<section className="container mx-auto px-4 py-16">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        📱 More App Screenshots
      </h2>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto">
        Explore different features and screens of the Moto Mall mobile application
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Screenshot 1 - Merchants */}
      <div className="relative">
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center">
              <Users className="text-[#a4b937]" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Merchants Directory</h3>
              <p className="text-gray-400 text-sm">Manage your dealer network</p>
            </div>
          </div>
          
          {/* Phone Frame for Merchants Screenshot */}
          <div className="relative w-[320px] h-[640px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.8rem] border-[12px] border-gray-900 shadow-xl"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-5 bg-gray-900 rounded-b-lg z-20"></div>
            
            <div className="relative h-full pt-8 px-3 overflow-hidden">
              <div className="w-full h-full bg-gray-800 rounded-[2rem] overflow-hidden">
                <img 
                  src="./src/assets/image/merchants-screenshot.png" 
                  alt="Moto Mall - Merchants Management"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gray-700 rounded-full"></div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-white font-medium mb-2">Features:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="text-green-500" size={14} />
                Browse merchant profiles
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="text-green-500" size={14} />
                Contact dealer teams
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="text-green-500" size={14} />
                Manage partnerships
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Screenshot 2 - Search */}
      <div className="relative">
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-lg flex items-center justify-center">
              <Search className="text-[#a4b937]" size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Vehicle Search</h3>
              <p className="text-gray-400 text-sm">Find cars by category & filters</p>
            </div>
          </div>
          
          {/* Phone Frame for Search Screenshot */}
          <div className="relative w-[320px] h-[640px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.8rem] border-[12px] border-gray-900 shadow-xl"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-5 bg-gray-900 rounded-b-lg z-20"></div>
            
            <div className="relative h-full pt-8 px-3 overflow-hidden">
              <div className="w-full h-full bg-gray-800 rounded-[2rem] overflow-hidden">
                <img 
                  src="./src/assets/image/search-screenshot.png" 
                  alt="Moto Mall - Vehicle Search"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gray-700 rounded-full"></div>
          </div>
          
          <div className="mt-6">
            <h4 className="text-white font-medium mb-2">Features:</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="text-green-500" size={14} />
                Search by category (Cruiser, Hatchback, etc.)
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="text-green-500" size={14} />
                Filter by price range
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <CheckCircle className="text-green-500" size={14} />
                View detailed vehicle cards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
    )};
    export default Screenshot;