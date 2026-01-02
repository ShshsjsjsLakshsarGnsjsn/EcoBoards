
import React from 'react';

const ComparisonSection: React.FC = () => {
  const plyVsWpc = [
    { feature: 'Water Resistance', ply: 'Absorbs moisture, swells over time', wpc: '100% Waterproof, retains shape' },
    { feature: 'Termite Proof', ply: 'Vulnerable, requires chemical treatment', wpc: 'Naturally termite & borer proof' },
    { feature: 'Durability', ply: '10-15 Years average lifespan', wpc: 'Lifetime durability (50+ Years)' },
    { feature: 'Maintenance', ply: 'Requires painting, polishing', wpc: 'Zero maintenance, pre-finished options' },
    { feature: 'Eco-Friendly', ply: 'Requires cutting trees', wpc: 'Made from recycled wood & polymers' },
  ];

  const brandFeatures = [
    {
      title: 'High Screw Holding',
      desc: 'Many local WPC boards crumble when screwed. Ecoboards are engineered with high density (0.70+ g/cm³) to hold screws as tightly as seasoned teak wood.',
      icon: 'fa-screwdriver'
    },
    {
      title: 'Virgin Polymer Core',
      desc: 'Competitors often use brittle recycled plastic. We use virgin lead-free polymers, ensuring your boards don\'t crack under pressure or seasonal changes.',
      icon: 'fa-layer-group'
    },
    {
      title: 'Calibrated Precision',
      desc: 'Our German-tech machinery ensures perfectly calibrated thickness. No undulations, making it the perfect substrate for laminates and direct printing.',
      icon: 'fa-ruler-combined'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Section 1: Why Ecoboards Brand (Moved Top) */}
      <div className="mb-16 lg:mb-24">
         <div className="text-center mb-10 lg:mb-16">
           <span className="text-[10px] font-black text-[#8cc63f] uppercase tracking-widest mb-3 block">Unmatched Quality</span>
           <h2 className="text-3xl lg:text-5xl font-black text-[#4b7947] mb-6">Not All WPC Is Created Equal</h2>
           <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm lg:text-base">
             Why Ecoboards is the premium choice over generic market brands.
           </p>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {brandFeatures.map((brand, idx) => (
              <div key={idx} className="bg-white p-6 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:border-[#8cc63f] transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f0f4f0] rounded-bl-[100%] -mr-16 -mt-16 transition-all group-hover:bg-[#8cc63f]/20"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#4b7947] rounded-2xl flex items-center justify-center text-white mb-6 lg:mb-8 shadow-lg group-hover:scale-110 transition-transform">
                    <i className={`fa-solid ${brand.icon} text-xl lg:text-2xl`}></i>
                  </div>
                  <h3 className="text-lg lg:text-xl font-black text-slate-800 mb-3 lg:mb-4">{brand.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4 lg:mb-6">{brand.desc}</p>
                  <div className="h-1 w-12 bg-[#8cc63f] rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
         </div>
      </div>

      {/* Section 2: WPC vs Plywood (Moved Bottom & Redesigned) */}
      <div>
        <div className="text-center mb-10 lg:mb-12">
           <span className="text-[10px] font-black text-[#8cc63f] uppercase tracking-widest mb-3 block">The Modern Standard</span>
           <h2 className="text-3xl lg:text-5xl font-black text-[#4b7947] mb-6">WPC vs. Plywood</h2>
           <p className="text-slate-500 max-w-2xl mx-auto font-medium text-sm lg:text-base">
             Why modern architects in Nepal are switching to Ecoboards WPC for smarter, longer-lasting homes.
           </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {plyVsWpc.map((item, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 lg:p-8 shadow-lg border border-slate-100 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
              {/* Feature Label */}
              <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Feature</span>
                <h4 className="text-lg lg:text-xl font-black text-[#4b7947]">{item.feature}</h4>
              </div>

              {/* Comparison Line */}
              <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 z-10">
                {/* Plywood Side */}
                <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-4 border border-red-100">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0 text-red-500">
                    <i className="fa-solid fa-xmark text-lg"></i>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide block mb-1">Plywood</span>
                    <p className="text-sm font-medium text-slate-600">{item.ply}</p>
                  </div>
                </div>

                {/* WPC Side */}
                <div className="bg-[#f0f4f0] rounded-2xl p-4 flex items-center gap-4 border border-[#8cc63f]/30 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#8cc63f]/10 rounded-bl-full -mr-4 -mt-4"></div>
                  <div className="w-10 h-10 rounded-full bg-[#4b7947] flex items-center justify-center shrink-0 text-white shadow-lg">
                    <i className="fa-solid fa-check text-lg"></i>
                  </div>
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-[#4b7947] uppercase tracking-wide block mb-1">Ecoboards WPC</span>
                    <p className="text-sm font-bold text-slate-800">{item.wpc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonSection;
