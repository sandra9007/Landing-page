
import React from 'react';
import { 
  Menu, X, Download, Car, Shield, Search, Globe, Lock, Users, 
  CheckCircle, BarChart, Filter, Smartphone, Zap, ChevronRight,
  Eye, Upload, PieChart, MessageSquare, Phone, Image as ImageIcon
} from 'lucide-react';

const MotoMall = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#020202]">
      {/* Navigation */}
      <nav className="bg-[#020202] border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#a4b937] rounded-xl mr-3 flex items-center justify-center">
                <Car className="text-white" size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Moto Mall</span>
                <p className="text-xs text-gray-400 -mt-1">Vehicle Inventory Management</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-[#a4b937] font-medium transition-colors">Features</a>
              <a href="#" className="text-gray-300 hover:text-[#a4b937] font-medium transition-colors">For Dealers</a>
              <a href="#" className="text-gray-300 hover:text-[#a4b937] font-medium transition-colors">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-[#a4b937] font-medium transition-colors">Contact</a>
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#a4b937] to-[#526103] text-white px-6 py-3 rounded-xl hover:from-[#94a931] hover:to-[#485902] transition-all font-medium shadow-lg">
                <Download size={18} />
                Get App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-300 hover:text-[#a4b937] font-medium py-2">Features</a>
                <a href="#" className="text-gray-300 hover:text-[#a4b937] font-medium py-2">For Dealers</a>
                <a href="#" className="text-gray-300 hover:text-[#a4b937] font-medium py-2">Pricing</a>
                <a href="#" className="text-gray-300 hover:text-[#a4b937] font-medium py-2">Contact</a>
                <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#a4b937] to-[#526103] text-white px-6 py-3 rounded-xl hover:from-[#94a931] hover:to-[#485902] transition-all font-medium">
                  <Download size={18} />
                  Get App
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

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
                      src="./src/image/image1.png" 
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
                  src="./src/image/merchants-screenshot.png" 
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
                  src="./src/image/search-screenshot.png" 
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

      {/* Target Audience */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                👥 Built for Industry Professionals
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Moto Mall is designed for professionals who need efficient inventory management
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Showroom Owners',
                  desc: 'Complete inventory oversight with real-time stock tracking',
                  icon: <PieChart className="text-[#a4b937]" size={24} />
                },
                {
                  title: 'Car Dealers & Sales Teams',
                  desc: 'Quick access to vehicle details and availability',
                  icon: <Users className="text-[#a4b937]" size={24} />
                },
                {
                  title: 'Inventory & Operations Staff',
                  desc: 'Streamlined stock management and reporting',
                  icon: <BarChart className="text-[#a4b937]" size={24} />
                }
              ].map((role, index) => (
                <div key={index} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:shadow-lg transition-all hover:border-[#a4b937]/30">
                  <div className="w-14 h-14 bg-gradient-to-r from-[#a4b937]/10 to-[#526103]/10 rounded-xl flex items-center justify-center mb-6">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{role.title}</h3>
                  <p className="text-gray-400">{role.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-[#a4b937] to-[#526103] rounded-2xl p-8 md:p-12 text-white">
            <div className="flex items-center gap-4 mb-8">
              <Zap className="text-yellow-300" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Moto Mall?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Centralized inventory management',
                'Faster stock tracking',
                'Better vehicle visibility',
                'Reduced manual work',
                'Smarter decision-making',
                'Mobile-first platform'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-all">
                  <CheckCircle className="text-green-300" size={20} />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#020202] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-[#a4b937] to-[#526103] rounded-xl mr-3 flex items-center justify-center">
                <Car size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold">Moto Mall</span>
                <p className="text-gray-400 text-sm">Smart Vehicle Inventory Management</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2026 Moto Mall. All rights reserved. Designed for automotive professionals.</p>
            <p className="text-sm mt-2">Manage. Display. Sell. Smarter.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MotoMall;