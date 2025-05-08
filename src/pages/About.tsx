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
              We are a group of inventive and astute problem solvers that apply statistics to capture an overlooked edge in markets
            </p>
            
            <div className="my-12 bg-gray-50 p-6 md:p-8 rounded-sm">
              <p className="text-lg leading-relaxed mb-6">
                Our members encompass a variety of majors in many technical disciplines such as mathematics, engineering, and computer science but are united by a passion for problem solving
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                We welcome top talent from all fields of study and backgrounds, our members speak 8 different languages, and can program in many more
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

export default About;