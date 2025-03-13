
import { useState } from "react";
import { Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Discovery & Analysis",
    description: "We start by understanding your ABA practice, target audience, and business goals.",
    details: "During this phase, we conduct a comprehensive analysis of your current marketing efforts, website performance, and competitive landscape. We identify opportunities for growth and develop a strategic roadmap tailored to your specific needs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "In-depth market analysis",
      "Competitor research",
      "Website and SEO audit",
      "Social media assessment",
      "Goal setting and KPI definition"
    ]
  },
  {
    id: 2,
    title: "Strategic Planning",
    description: "We develop a customized marketing strategy aligned with your practice's unique needs.",
    details: "Our team creates a comprehensive marketing plan that outlines the specific tactics, channels, and messaging needed to reach your target audience effectively. We focus on strategies that will generate qualified leads and increase your practice's visibility.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "Customized marketing plan",
      "Channel selection and prioritization",
      "Budget allocation",
      "Content strategy development",
      "Campaign timeline creation"
    ]
  },
  {
    id: 3,
    title: "Implementation",
    description: "We execute all aspects of your marketing plan with precision and attention to detail.",
    details: "Our team handles the implementation of your marketing strategy across all channels, from website development to content creation and paid advertising campaigns. We ensure all elements work together cohesively to maximize your results.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    benefits: [
      "Website optimization",
      "Content creation and publishing",
      "Paid advertising setup",
      "Social media management",
      "Local SEO implementation"
    ]
  },
  {
    id: 4,
    title: "Monitoring & Optimization",
    description: "We continuously track performance and make data-driven adjustments to improve results.",
    details: "Using advanced analytics tools, we monitor the performance of all marketing activities and make strategic adjustments to optimize your campaigns. This iterative approach ensures we're always improving your return on investment.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    benefits: [
      "Real-time performance tracking",
      "A/B testing and refinement",
      "Budget optimization",
      "Keyword and targeting adjustments",
      "Conversion rate optimization"
    ]
  },
  {
    id: 5,
    title: "Reporting & Growth Planning",
    description: "We provide transparent reporting and collaborate on long-term growth strategies.",
    details: "Through regular reporting and strategic meetings, we keep you informed about your marketing performance and collaborate on plans for scaling your success. Our goal is to establish a long-term partnership focused on growing your ABA practice.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    benefits: [
      "Comprehensive monthly reports",
      "Strategic review meetings",
      "Long-term growth planning",
      "Industry trend analysis",
      "Scaling successful campaigns"
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
