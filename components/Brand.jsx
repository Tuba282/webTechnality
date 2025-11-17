import React from 'react'

const Brand = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-[#f3f3f3] overflow-hidden">

      {/* Background light streaks */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#ffffff_0%,#e8e8e8_40%,#f3f3f3_100%)] opacity-70"></div>

      {/* LEFT BADGES */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        
        <div className="flex items-center gap-2 bg-white shadow-md px-5 py-3 rounded-full">
          <span className="text-orange-500 text-xl">⬤</span>
          <p className="font-medium">Design systems</p>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-5 py-3 rounded-full ml-6">
          <span className="text-black text-xl">⬛</span>
          <p className="font-medium">UX Design</p>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-5 py-3 rounded-full ml-12">
          <span className="text-blue-500 text-xl">🔍</span>
          <p className="font-medium">Research</p>
        </div>

      </div>

      {/* MAIN CENTER TEXT */}
      <div className="text-center px-10 relative z-10">
        <p className="text-gray-500 italic mb-4 tracking-wide">
          ——— Hello! ———
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
          We help brands grow with standout <br />
          design, clear branding, and content <br />
          that drives <span className="text-gray-400">results.</span>
        </h1>
      </div>

      {/* RIGHT BADGES */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6">
        
        <div className="flex items-center gap-2 bg-white shadow-md px-5 py-3 rounded-full">
          <span className="text-green-500 text-xl">⟳</span>
          <p className="font-medium">Animation</p>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-5 py-3 rounded-full ml-6">
          <span className="text-pink-500 text-xl">⬤</span>
          <p className="font-medium">Branding</p>
        </div>

        <div className="flex items-center gap-2 bg-white shadow-md px-5 py-3 rounded-full ml-12">
          <span className="text-yellow-500 text-xl">✦</span>
          <p className="font-medium">Strategy</p>
        </div>

      </div>

    </section>
  );
}

export default Brand