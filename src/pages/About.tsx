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
              We are a group of inventive and astute problem solvers that apply various means to capture overlooked edges in markets.
              Our workflow is flexible and consists of regular meetings where we continuously work on our projects. As your schedule allows you can drop in and out. We find that the people that get the most out of this are highly curious, self-driven, and quick to iterate on their ideas to validate or disprove them while outlining their thought processes.
            </p>
            
            {/* BACKGROUND SECTION - NOW RED */}
            <div className="my-12 bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">Ideally, you would be studying:</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li className="text-lg">Applied Mathematics</li>
                  <li className="text-lg">Data Science</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3">This can also work:</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li className="text-lg">Physics</li>
                  <li className="text-lg">Computer Science</li>
                  <li className="text-lg">Finance</li>
                  <li className="text-lg">Anything else</li>
                </ul>
              </div>
              
              <div className="border-t border-red-500 pt-6">
                <h3 className="text-xl font-bold mb-3">Keep in mind:</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li className="text-lg">Your skills matter more than your major</li>
                  <li className="text-lg">Most of what we do isn't covered in traditional coursework</li>
                  <li className="text-lg">We learn and adapt as we go</li>
                </ul>
              </div>
            </div>
            
            {/* CORE OPERATIONS SECTION - NOW BLACK/GREY */}
            <div className="my-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  CORE OPERATIONS
                </h2>
                <div className="w-20 h-1 bg-red-500 mx-auto"></div>
              </div>
              
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-lg shadow-xl">
                <p className="text-lg leading-relaxed mb-6">
                  Simulated Fund Management & Actual Fund Managment (Contingent) with Faculty Oversight
                </p>
                <p className="text-lg leading-relaxed">
                  Intercollegiate Competitions Participation for Quantitative Finance and Hedge Fund Strategy
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
                  Our team encompasses a variety of majors in many technical disciplines such as mathematics, engineering, and data science but are united by a passion for problem solving
                </p>
                
                <p className="text-lg leading-relaxed">
                   Formed in 2025, our organization entered the preliminary recognition phase as an official student organization at Northeastern University, with full-fledged status anticipated by Fall 2026
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




// import React from 'react';
// import PageHeader from '../components/PageHeader';

// const About: React.FC = () => {
//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-10">
//         <PageHeader title="ABOUT" />
        
//         <div className="max-w-4xl mx-auto">
//           <div className="prose prose-lg mx-auto">
//             <p className="text-lg md:text-xl mb-8 leading-relaxed">
//               We are a group of inventive and astute problem solvers that apply various means to capture overlooked edges in markets.
//               Our workflow is flexible and consists of regular meetings where we continuously work on our projects. As your schedule allows you can drop in and out. We find that the people that get the most out of this are highly curious, self-driven, and quick to iterate on their ideas to validate or disprove them while outlining their thought processes.
//             </p>
            
//             {/* CORE OPERATIONS SECTION */}
//             <div className="my-16">
//               <div className="text-center mb-8">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                   CORE OPERATIONS
//                 </h2>
//                 <div className="w-20 h-1 bg-red-500 mx-auto"></div>
//               </div>
              
//               <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg shadow-xl">
//                 <p className="text-lg leading-relaxed mb-6">
//                   Simulated fund management & actual fund managment (contingent) with faculty oversight
//                 </p>
//                 <p className="text-lg leading-relaxed">
//                   Intercollegiate Quantitative Finance Competitions Participation 
//                 </p>
//               </div>
//             </div>

//             {/* MEMBER INFORMATION SECTION */}
//             <div className="my-16">
//               <div className="text-center mb-8">
//                 <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//                   OUR TEAM
//                 </h2>
//                 <div className="w-20 h-1 bg-red-500 mx-auto"></div>
//               </div>
              
//               <div className="bg-gray-50 p-6 md:p-8 rounded-sm">
//                 <p className="text-lg leading-relaxed mb-6">
//                   Our team encompasses a variety of majors in many technical disciplines such as mathematics, engineering, and data science but are united by a passion for problem solving
//                 </p>
                
//                 <p className="text-lg leading-relaxed">
//                    Formed in 2025, our organization entered the preliminary recognition phase as an official student organization at Northeastern University, with full-fledged status anticipated by Fall 2026
//                 </p>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


































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
