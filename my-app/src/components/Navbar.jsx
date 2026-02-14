import React from 'react';
import { 
  Menu, X, Download, Car
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
     <>
   
     
      <nav className="bg-[#020202] border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
         
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#a4b937] rounded-xl mr-3 flex items-center justify-center">
                <Car className="text-white" size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Moto Sells</span>
                <p className="text-xs text-gray-400 -mt-1">Vehicle Inventory Management</p>
              </div>
            </div>

           
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
      
     </>
      )};
      export default Navbar;