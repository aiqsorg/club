import React from 'react';
import PageHeader from '../components/PageHeader';
import ShapeIcon from '../components/ShapeIcon';

const Methodology: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sourcing",
      description: "An investment opportunity is assigned or identified by members and an investment thesis is established, with a project-specific team formed to enact"
    },
    {
      number: 2,
      title: "Vetting",
      description: "Teams present their value proposition to partners and senior officials to assess the viability of the venture; revisions may be proposed or strategies adjusted"
    },
    {
      number: 3,
      title: "Execution",
      description: "Projects receive funds and investment strategies are deployed; equity or research project designation is assigned"
    },
    {
      number: 4,
      title: "Maturity",
      description: "Projects are monitored continuously with routine performance assessments and maintenance or may undergo deferral either from meeting exit criteria or a decrease of market viability"
    }
  ];
  
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <PageHeader title="METHODOLOGY" />
        
        <div className="max-w-4xl mx-auto mt-8 md:mt-12">
          <div className="text-center mb-10">
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Our fund is managed through the undertaking various projects to create cash flows in a 4 step process
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