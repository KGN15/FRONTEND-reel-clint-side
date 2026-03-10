import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-[#0f172a] text-white font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          MR Agency
        </h1>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full transition">
          Contact Us
        </button>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
          Bangladesh's <span className="text-blue-500">No.1</span> MERN Agency
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          We build premium, high-performance modern websites that scale your business to the next level.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-black font-bold px-8 py-4 rounded-lg hover:scale-105 transition">
            Start a Project
          </button>
        </div>
      </header>

      {/* About Founder */}
      <section className="py-16 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-6">Meet the Founder</h3>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-blue-500 rounded-full mb-4 border-4 border-gray-700 flex items-center justify-center text-2xl font-bold">
              MR
            </div>
            <h4 className="text-xl font-semibold">Mashhudur Rahman</h4>
            <p className="text-blue-400 mb-4">Founder & CEO | MERN Stack Developer</p>
            <p className="text-gray-400 italic">
              "আমাদের লক্ষ্য হলো বাংলাদেশের সাধারণ ব্যবসায়ীদের জন্য আন্তর্জাতিক মানের ডিজিটাল সমাধান প্রদান করা।"
            </p>
          </div>
        </div>
      </section>

      {/* Services & Pricing Cards */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12">Our Services & Pricing</h3>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition shadow-xl">
            <h4 className="text-xl font-bold mb-2">UI/UX & React</h4>
            <p className="text-gray-400 mb-4">Figma to React & Landing Pages</p>
            <div className="text-3xl font-bold mb-6">$150 <span className="text-sm text-gray-400">/starting</span></div>
            <ul className="text-gray-300 space-y-3 mb-8">
              <li>✓ Modern Landing Page</li>
              <li>✓ Figma to Clean React Code</li>
              <li>✓ Fully Responsive</li>
            </ul>
            <button className="w-full py-3 border border-blue-500 rounded-lg hover:bg-blue-500 transition">Choose Plan</button>
          </div>

          {/* Card 2 - Most Popular */}
          <div className="bg-gradient-to-b from-blue-900 to-[#1e293b] p-8 rounded-2xl border-2 border-blue-500 transform scale-105 shadow-2xl">
            <div className="bg-blue-500 text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-4">Most Popular</div>
            <h4 className="text-xl font-bold mb-2">Full Stack Solution</h4>
            <p className="text-blue-200 mb-4">Complete MERN Application</p>
            <div className="text-3xl font-bold mb-6">$800 <span className="text-sm text-blue-200">/starting</span></div>
            <ul className="text-blue-100 space-y-3 mb-8">
              <li>✓ Custom Backend API</li>
              <li>✓ Database Integration</li>
              <li>✓ User Authentication</li>
              <li>✓ Advanced Features</li>
            </ul>
            <button className="w-full py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition font-bold">Get Started</button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1e293b] p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition shadow-xl">
            <h4 className="text-xl font-bold mb-2">Backend & API</h4>
            <p className="text-gray-400 mb-4">Robust API Architecture</p>
            <div className="text-3xl font-bold mb-6">$300 <span className="text-sm text-gray-400">/starting</span></div>
            <ul className="text-gray-300 space-y-3 mb-8">
              <li>✓ Node/Express Backend</li>
              <li>✓ MongoDB Schema Design</li>
              <li>✓ Secure API Endpoints</li>
            </ul>
            <button className="w-full py-3 border border-blue-500 rounded-lg hover:bg-blue-500 transition">Choose Plan</button>
          </div>

        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-[#0f172a] text-center border-t border-gray-800">
        <h3 className="text-3xl font-bold mb-10">Client Reviews</h3>
        <div className="max-w-2xl mx-auto bg-[#1e293b] p-8 rounded-xl shadow-lg italic border-l-4 border-blue-500">
          <p className="text-lg text-gray-300 mb-4">
            "মাশহুদুর রহমানের সাথে কাজ করে আমি অভিভূত। তার এমইআরএন স্ট্যাক দক্ষতা এবং কোডিং কোয়ালিটি সত্যিই প্রশংসনীয়। বাংলাদেশের মধ্যে সেরা সার্ভিস পেয়েছি।"
          </p>
          <h5 className="text-blue-400 font-bold">- James Anderson (USA)</h5>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer className="py-10 text-center text-gray-500 border-t border-gray-800">
        <p>&copy; 2026 MR Agency - No.1 MERN Agency in Bangladesh.</p>
      </footer>
    </div>
  );
};

export default LandingPage;