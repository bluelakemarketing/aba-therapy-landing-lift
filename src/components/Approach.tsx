
import { useState } from "react";
import { Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery & Analysis",
    description: "We start by understanding your ABA practice, target audience, and business goals.",
    details: "During this phase, we conduct a comprehensive analysis of your current marketing efforts, website performance, and competitive landscape. We identify opportunities for growth and develop a strategic roadmap tailored to your specific needs.",
    image: "/lovable-uploads/e9ede858-ea06-440d-a5a2-e4fdca3e6811.png",
    benefits: [
      "In-depth market analysis",
      "Competitor research",
      "Website and SEO audit",
      "Social media assessment",
      "Goal setting and KPI definition"
    ]
  }
  
];

const Approach = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section id="approach" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-50/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Proven Approach to <span className="text-blue-600">ABA Marketing Success</span>
          </h2>
          <p className="text-lg text-foreground/70">
            We follow a structured methodology that delivers consistent results for ABA therapy providers. Here's how we help your practice grow:
          </p>
        </div>

        {/* Process Steps Navigation */}
        <div className="relative mb-16 max-w-4xl mx-auto animate-slide-up">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((step) => (
              <button
                key={step.id}
                className="relative flex flex-col items-center"
                onClick={() => setActiveStep(step.id)}
              >
                <div className={`z-10 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
                  activeStep === step.id 
                    ? "bg-blue-600 text-white" 
                    : activeStep > step.id 
                    ? "bg-blue-200 text-blue-700" 
                    : "bg-gray-200 text-gray-500"
                }`}>
                  {activeStep > step.id ? (
                    <Check className="w-6 h-6" />
                  ) : (
                    <span className="text-lg font-semibold">{step.id}</span>
                  )}
                </div>
                <p className={`mt-2 text-center font-medium text-sm md:text-base transition-colors ${
                  activeStep === step.id ? "text-blue-700" : "text-gray-500"
                }`}>
                  {step.title}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Process Step Details */}
        {steps.map((step) => (
          step.id === activeStep && (
            <div key={step.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-scale">
              <div className="order-2 lg:order-1 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold">
                  {step.id}. {step.title}
                </h3>
                <p className="text-xl text-foreground/70">
                  {step.description}
                </p>
                <p className="text-lg text-foreground/70">
                  {step.details}
                </p>
                
                <div className="space-y-3 pt-4">
                  <h4 className="font-semibold text-lg">Key Components:</h4>
                  {step.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-blue-100 text-blue-700 rounded-full p-1">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-foreground/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-2xl overflow-hidden shadow-xl relative">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="absolute bottom-4 left-4 glass p-4 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white">
                      <span className="font-semibold">{step.id}</span>
                    </div>
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default Approach;
