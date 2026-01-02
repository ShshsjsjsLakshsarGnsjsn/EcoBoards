
import React, { useState } from 'react';

const ToolsSection: React.FC = () => {
  const [area, setArea] = useState<number>(0);
  const [thickness, setThickness] = useState<string>('12mm');
  const [result, setResult] = useState<number | null>(null);

  const calculateBoards = () => {
    if (area <= 0) return;
    // Standard board size 8ft x 4ft = 32 sq ft
    const boardsNeeded = Math.ceil(area / 32);
    setResult(boardsNeeded);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-[#4b7947] p-10 lg:p-14 text-white">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#8cc63f] mb-4 block">Functional Tool</span>
          <h2 className="text-3xl font-black mb-6">WPC Board Calculator</h2>
          <p className="text-slate-100 text-sm mb-8 leading-relaxed">
            Estimate the number of standard 8ft x 4ft boards required for your project area.
          </p>
          <div className="space-y-6">
            <div>
              <label className="text-[10px] font-black uppercase tracking-widest mb-2 block">Total Area (Sq. Ft.)</label>
              <input 
                type="number" 
                value={area || ''} 
                onChange={(e) => setArea(Number(e.target.value))}
                placeholder="e.g. 500"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all"
              />
            </div>
            <button 
              onClick={calculateBoards}
              className="w-full bg-[#8cc63f] text-[#4b7947] py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-lg"
            >
              Calculate Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2 p-10 lg:p-14 flex flex-col justify-center items-center text-center bg-[#f8faf8]">
          {result !== null ? (
            <div className="animate-fadeIn">
              <div className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-2">Estimated Requirement</div>
              <div className="text-7xl font-black text-[#4b7947] mb-2">{result}</div>
              <div className="text-lg font-bold text-slate-700 mb-8">Standard Boards</div>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                *Calculation based on 32 sq.ft. per board. We recommend adding 10% for cutting waste.
              </p>
              <button 
                onClick={() => { setArea(0); setResult(null); }}
                className="mt-8 text-[10px] font-black text-slate-400 hover:text-[#4b7947] uppercase tracking-widest border-b border-slate-200"
              >
                Reset Calculator
              </button>
            </div>
          ) : (
            <div className="text-slate-300">
              <i className="fa-solid fa-calculator text-6xl mb-4 opacity-20"></i>
              <p className="font-bold uppercase tracking-widest text-xs">Enter area to see results</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolsSection;
