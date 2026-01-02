
import React from 'react';

const FloatingActions: React.FC = () => {
  const WHATSAPP_NUMBER = "9779827302663";
  const PHONE_NUMBER = "+9779827302663";

  return (
    <div className="fixed right-6 bottom-8 z-[100] flex flex-col gap-3">
       <a 
         href={`tel:${PHONE_NUMBER}`}
         className="w-14 h-14 bg-white text-[#4b7947] rounded-full shadow-2xl border border-slate-100 flex items-center justify-center hover:bg-[#4b7947] hover:text-white transition-all transform hover:scale-110 active:scale-95 group relative"
       >
          <i className="fa-solid fa-phone-volume text-xl"></i>
          <span className="absolute right-16 bg-[#4b7947] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl pointer-events-none">Call Now</span>
       </a>

       <a 
         href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Ecoboards Nepal, I need a quote for WPC products.`}
         target="_blank"
         rel="noopener noreferrer"
         className="w-14 h-14 bg-[#25d366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group relative"
       >
          <i className="fa-brands fa-whatsapp text-3xl"></i>
          <span className="absolute right-16 bg-white text-slate-800 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-slate-100 pointer-events-none">WhatsApp</span>
       </a>
    </div>
  );
};

export default FloatingActions;
