 import { 
    Users, 
    BarChart, 
  PieChart, 
 } from 'lucide-react';
 
 const Target= () => {
    return(
        <>
    
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
          </>
    )};
    export default Target;