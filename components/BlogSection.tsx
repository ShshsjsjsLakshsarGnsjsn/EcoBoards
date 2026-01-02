
import React, { useState } from 'react';

const BLOGS = [
  { 
    id: '1', 
    title: 'Sustainable Building: The Rise of WPC Boards', 
    date: 'Mar 2025', 
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    content: 'Wood Plastic Composite (WPC) is transforming the construction industry. At Ecoboards, we use recycled wood fibers and high-quality polymers to create boards that are 100% waterproof and termite-proof. Unlike traditional plywood, WPC does not swell or decay, making it the superior choice for modern, sustainable homes.'
  },
  { 
    id: '2', 
    title: 'Choosing the Perfect WPC Door for Monsoon', 
    date: 'Feb 2025', 
    img: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800',
    content: 'Monsoon season often brings challenges like jammed doors and moisture damage. Ecoboards WPC doors are engineered to withstand extreme humidity. They are factory-finished and require zero maintenance. Learn why thousands of homeowners are switching to borer-proof WPC door frames this season.'
  },
];

const BlogSection: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<typeof BLOGS[0] | null>(null);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
        <div className="max-w-xl">
          <h2 className="text-3xl lg:text-5xl font-black text-[#4b7947] mb-4">Eco Insights</h2>
          <p className="text-slate-500 font-medium">Expert tips from our factory floor to your front door.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {BLOGS.map((blog) => (
          <div key={blog.id} className="group flex flex-col md:flex-row gap-8 bg-white rounded-[3rem] p-4 border border-slate-100 hover:shadow-2xl transition-all">
            <div className="md:w-2/5 aspect-[4/3] rounded-[2.5rem] overflow-hidden shrink-0">
              <img src={blog.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
            </div>
            <div className="md:w-3/5 flex flex-col justify-center pr-6">
              <span className="text-[10px] font-black text-[#8cc63f] mb-3 block tracking-widest uppercase">{blog.date}</span>
              <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-[#4b7947] transition-colors">{blog.title}</h3>
              <button 
                onClick={() => setSelectedBlog(blog)}
                className="bg-[#f0f4f0] text-[#4b7947] px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest w-max hover:bg-[#4b7947] hover:text-white transition-all"
              >
                Read Full Story
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white w-full max-w-3xl rounded-[3rem] overflow-hidden shadow-2xl relative animate-fadeIn flex flex-col">
            <button 
              onClick={() => setSelectedBlog(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all z-10"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="h-64 sm:h-80 w-full">
              <img src={selectedBlog.img} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="p-8 sm:p-12 overflow-y-auto max-h-[50vh]">
               <span className="text-xs font-black text-[#8cc63f] uppercase tracking-widest mb-4 block">{selectedBlog.date}</span>
               <h3 className="text-3xl font-black text-slate-800 mb-6 leading-tight">{selectedBlog.title}</h3>
               <p className="text-slate-600 leading-relaxed text-lg mb-4">
                 {selectedBlog.content}
               </p>
               <div className="mt-8 pt-8 border-t border-slate-100 flex justify-between items-center">
                 <span className="text-sm font-bold text-[#4b7947]">Ecoboards Factory Editorial</span>
                 <button 
                   onClick={() => setSelectedBlog(null)}
                   className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#4b7947]"
                 >
                   Back to News
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSection;
