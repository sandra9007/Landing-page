
 import {  Car} from 'lucide-react';
 
 const Footer = () => {
    return(
        <div>
     {/* Footer */}
      <footer className="bg-[#020202] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-[#a4b937] to-[#526103] rounded-xl mr-3 flex items-center justify-center">
                <Car size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold">Moto Selles</span>
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
            <p>© 2026 Moto selles. All rights reserved. Designed for automotive professionals.</p>
            <p className="text-sm mt-2">Manage. Display. Sell. Smarter.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;