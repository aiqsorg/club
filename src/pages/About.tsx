import React from 'react';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <PageHeader title="ABOUT" />
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              We are a group of inventive and astute problem solvers that apply statistics and various other means to capture overlooked edges in markets; formed in 2025, our organization entered the preliminary recognition phase as an official student organization at Northeastern University, with full-fledged status anticipated by Fall 2026
            </p>
            
            {/* CORE OPERATIONS SECTION */}
            <div className="my-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  CORE OPERATIONS
                </h2>
                <div className="w-20 h-1 bg-red-500 mx-auto"></div>
              </div>
              
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg shadow-xl">
                <p className="text-lg leading-relaxed mb-6">
                  Symphony Paper Fund and Husky Capital Fund (Tentative) management
                </p>
                <p className="text-lg leading-relaxed">
                  Intercollegiate Quantitative Finance Competitions Participation 
                </p>
              </div>
            </div>

            {/* MEMBER INFORMATION SECTION */}
            <div className="my-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  OUR TEAM
                </h2>
                <div className="w-20 h-1 bg-red-500 mx-auto"></div>
              </div>
              
              <div className="bg-gray-50 p-6 md:p-8 rounded-sm">
                <p className="text-lg leading-relaxed mb-6">
                  Our operations team encompasses a variety of majors in many technical disciplines such as mathematics, engineering, and computer science but are united by a passion for problem solving
                </p>
                
                <p className="text-lg leading-relaxed">
                  Members gain a variety of experience in managing our fund in a multitude of ways, including finding viable market opportunities, creating trading algorithms, or navigating the complex laws and regulations surrounding a particular asset class
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;





















{/* import React from 'react';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <PageHeader title="ABOUT" />
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              We are a group of inventive and astute problem solvers that apply statistics to capture an overlooked edge in markets
            </p>
            
            <div className="my-12 bg-gray-50 p-6 md:p-8 rounded-sm">
              <p className="text-lg leading-relaxed mb-6">
                Our members encompass a variety of majors in many technical disciplines such as mathematics, engineering, and computer science but are united by a passion for problem solving
              </p>
              
        
              
              <p className="text-lg leading-relaxed">
                Members gain a variety of experience in managing our fund in a multitude of ways, including finding viable market opportunities, creating trading algorithms, or navigating the complex laws and regulations surrounding a particular asset class
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;   */}
