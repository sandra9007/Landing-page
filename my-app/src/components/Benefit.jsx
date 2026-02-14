import {
    CheckCircle, Zap,
} from 'lucide-react';

const Benefit = () => {
    return (
        <>
            {/* Benefits Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-[#a4b937] to-[#526103] rounded-2xl p-8 md:p-12 text-white">
                        <div className="flex items-center gap-4 mb-8">
                            <Zap className="text-yellow-300" size={32} />
                            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Moto Selles?</h2>
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
        </>
    )
};
export default Benefit;