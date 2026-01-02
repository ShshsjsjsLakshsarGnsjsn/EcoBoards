
import React from 'react';

const FEATURES = [
  {
    icon: <i className="fa-solid fa-droplet text-3xl"></i>,
    title: '100% Waterproof',
    desc: 'Impervious to moisture, making it perfect for kitchens, bathrooms, and high-humidity coastal areas.'
  },
  {
    icon: <i className="fa-solid fa-fire-extinguisher text-3xl"></i>,
    title: 'Fire Retardant',
    desc: 'Self-extinguishing properties that prevent fire spread, ensuring maximum safety for your interiors.'
  },
  {
    icon: <i className="fa-solid fa-bug-slash text-3xl"></i>,
    title: 'Termite & Borer Proof',
    desc: 'Synthetically engineered composition that is completely immune to wood-boring pests and termites.'
  },
  {
    icon: <i className="fa-solid fa-leaf text-3xl"></i>,
    title: 'Eco-Friendly',
    desc: 'Made from recycled polymers and wood fibers, saving trees and reducing landfill waste.'
  },
  {
    icon: <i className="fa-solid fa-screwdriver-wrench text-3xl"></i>,
    title: 'High Screw Holding',
    desc: 'High-density core ensures screws stay tight and furniture remains durable for decades.'
  },
  {
    icon: <i className="fa-solid fa-shapes text-3xl"></i>,
    title: 'Precision Ready',
    desc: 'Perfect calibration for CNC routing, making it ideal for intricate jali and louver designs.'
  }
];

const ProfessionalAdvice: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto text-center mb-10 lg:mb-16">
        <h2 className="text-3xl lg:text-5xl font-black text-[#4b7947] mb-6">Why Choose Ecoboards?</h2>
        <p className="text-slate-500 font-medium text-lg">
          Superior engineering meets sustainable innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {FEATURES.map((feature, index) => (
          <div key={index} className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#8cc63f] transition-all group text-center hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-[#f0f4f0] rounded-full flex items-center justify-center text-[#4b7947] group-hover:bg-[#4b7947] group-hover:text-white transition-all mb-4 lg:mb-6 shadow-inner">
              {feature.icon}
            </div>
            <h3 className="text-lg lg:text-xl font-black text-slate-800 mb-3 lg:mb-4 group-hover:text-[#4b7947] transition-colors">{feature.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalAdvice;
