import React from 'react';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Logo className="w-32 h-32 md:w-40 md:h-40" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-[#C8102E]">A</span>utomated <span className="text-[#C8102E]">I</span>nvestments & <span className="text-[#C8102E]">Q</span>uantitative <span className="text-[#C8102E]">S</span>olutions
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
            The university's most advanced investment group, focused on using data and strategy to find advantages in capital markets
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
