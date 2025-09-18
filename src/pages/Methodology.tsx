import React from 'react';
import PageHeader from '../components/PageHeader';
import ShapeIcon from '../components/ShapeIcon';

const Methodology: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sourcing",
      description: "An investment or trade opportunity is identified by members and an investment thesis is established, with a project-specific team formed to enact"
    },
    {
      number: 2,
      title: "Vetting",
      description: "Teams present their value proposition to senior officials to assess the viability of the venture; revisions may be proposed or strategies adjusted"
    },
    {
      number: 3,
      title: "Execution",
      description: "Projects are allocated resources, constructed, and strategies are executed"
    },
    {
      number: 4,
      title: "Maturity",
      description: "Projects are monitored continuously and maintained or terminated either from meeting exit criteria or a decrease of market viability"
    }
  ];
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <PageHeader title="METHODOLOGY" />
        
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="text-center mb-10">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Our strategies are developed in a sequential approach through taking on various sub-projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mt-12">
            {steps.map((step) => (
              <ShapeIcon
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Methodology
