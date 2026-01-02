
import React from 'react';

const Footer: React.FC = () => {
  const scrollIn = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: 'facebook-f', url: 'https://www.facebook.com/share/17rikAARen/' },
    { icon: 'instagram', url: 'https://www.instagram.com/ecoboards_?igsh=MTJrb3JseDk4bXI0eg==' },
    { icon: 'whatsapp', url: 'https://wa.me/9779827302663' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="relative w-20 h-20 flex items-center justify-center">
                 <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Outer Circle - White for footer */}
                    <circle cx="100" cy="100" r="90" stroke="#ffffff" strokeWidth="4" />
                    
                    {/* Top Leaves */}
                    <path d="M100 20 Q 50 20 50 70 Q 100 80 100 50 Z" fill="#8cc63f" />
                    <path d="M100 20 Q 150 20 150 70 Q 100 80 100 50 Z" fill="#ffffff" /> {/* White leaf for contrast */}
                    
                    {/* Center Text */}
                    <text x="100" y="115" textAnchor="middle" fontFamily="sans-serif" fontWeight="bold" fontSize="42" fill="#ffffff">ECO</text>
                    <text x="100" y="145" textAnchor="middle" fontFamily="sans-serif" fontWeight="500" fontSize="24" fill="#8cc63f" letterSpacing="3">BOARDS</text>

                    {/* Bottom Leaves */}
                    <path d="M95 185 Q 65 185 65 155 Q 95 145 95 160 Z" fill="#ffffff" /> {/* White leaf */}
                    <path d="M105 185 Q 135 185 135 155 Q 105 145 105 160 Z" fill="#8cc63f" />
                 </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-black tracking-tighter text-white">ECOBOARDS</span>
                <span className="text-[12px] font-bold text-slate-400">स्वदेशी उत्पादन</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Quality WPC solutions direct from our factory in Nepal to your door. Leading the industry in moisture-proof building materials.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.icon} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-slate-800 flex items-center justify-center hover:bg-[#4B7947] hover:text-white transition-all text-slate-500"
                >
                  <i className={`fa-brands fa-${social.icon} text-sm`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px] border-l-4 border-[#8CC63F] pl-4">Products</h4>
            <ul className="space-y-4 text-xs font-bold">
              <li><button onClick={() => scrollIn('shop')} className="hover:text-[#8CC63F] transition-colors">WPC Boards</button></li>
              <li><button onClick={() => scrollIn('shop')} className="hover:text-[#8CC63F] transition-colors">WPC Doors</button></li>
              <li><button onClick={() => scrollIn('shop')} className="hover:text-[#8CC63F] transition-colors">CNC Jali Screens</button></li>
              <li><button onClick={() => scrollIn('shop')} className="hover:text-[#8CC63F] transition-colors">Exterior Louvers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px] border-l-4 border-[#8CC63F] pl-4">Explore</h4>
            <ul className="space-y-4 text-xs font-bold">
              <li><button onClick={() => scrollIn('inspiration')} className="hover:text-[#8CC63F] transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollIn('tools')} className="hover:text-[#8CC63F] transition-colors">Estimator Tools</button></li>
              <li><a href="tel:+9779827302663" className="hover:text-[#8CC63F] transition-colors">Find a Dealer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[10px] border-l-4 border-[#8CC63F] pl-4">Connect</h4>
            <div className="space-y-6">
              <a href="tel:+9779827302663" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-[#8CC63F] group-hover:bg-[#4B7947] group-hover:text-white transition-all shadow-lg">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-600 tracking-tighter leading-none mb-1">Call Us</p>
                  <p className="text-white font-black text-lg">+977 982-7302663</p>
                </div>
              </a>
              <button 
                onClick={() => alert('Our production facility is in Nepal. Visiting hours 10AM - 5PM.')}
                className="w-full bg-[#4B7947] text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#8CC63F] transition-all"
              >
                Factory Details
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] uppercase font-black tracking-widest">
           <p>© 2026 Ecoboards Nepal Pvt. Ltd.</p>
           <p className="flex items-center gap-2">Built with <i className="fa-solid fa-heart text-[#8CC63F]"></i> for Earth</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
