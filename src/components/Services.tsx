import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import this at the top of your file
const MotionDiv = motion.div;

const services = [
  {
    id: 1,
    title: "SEO for ABA Practices",
    description: "Rank higher in local search results and reach more families seeking ABA therapy services in your area.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    benefits: ["Local SEO optimization", "Keyword research", "Content strategy", "Authority building"],
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "PPC Advertising",
    description: "Targeted pay-per-click campaigns that connect you with parents actively seeking ABA therapy services.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse-pointer-click"><path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/></svg>
    ),
    benefits: ["Google Ads management", "Facebook & Instagram ads", "Custom audiences", "Conversion tracking"],
    color: "bg-teal-500",
  },
  {
    id: 3,
    title: "Website Development",
    description: "Create a professional, accessible website that effectively communicates your ABA therapy services and values.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layout"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    ),
    benefits: ["Mobile-responsive design", "ADA compliance", "Lead generation forms", "Client testimonials"],
    color: "bg-indigo-500",
  },
  {
    id: 4,
    title: "Content Marketing",
    description: "Educate families about ABA therapy through valuable content that positions your practice as an industry leader.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
    ),
    benefits: ["Blog articles", "Parent resources", "Email newsletters", "Social media content"],
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "Social Media Marketing",
    description: "Build meaningful connections with families and referring professionals through strategic social media management.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
    ),
    benefits: ["Profile optimization", "Content calendar", "Community engagement", "Growth strategies"],
    color: "bg-pink-500",
  },
  {
    id: 6,
    title: "Analytics & Reporting",
    description: "Track the performance of your marketing efforts with detailed reports and data-driven insights.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bar-chart"><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
    ),
    benefits: ["Monthly reporting", "Goal tracking", "Conversion analysis", "ROI measurement"],
    color: "bg-orange-500",
  },
];

const Services = () => {
  const [activeService, setActiveService] = useState(services[0].id);

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-blue-50 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-teal-50 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Specialized Marketing Services for <span className="text-blue-600">ABA Therapy Providers</span>
          </h2>
          <p className="text-lg text-foreground/70">
            We understand the unique challenges of marketing ABA therapy services. Our tailored solutions help you connect with families who need your expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Service Tabs */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-gray-50 rounded-2xl p-2 animate-slide-right">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 mb-2 ${
                    activeService === service.id 
                      ? "bg-white shadow-md" 
                      : "hover:bg-white/60"
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${service.color} p-2.5 rounded-lg text-white`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{service.title}</h3>
                      <p className={`text-sm ${
                        activeService === service.id 
                          ? "text-foreground/70" 
                          : "text-foreground/50"
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Service Details */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {services.map((service) => (
              service.id === activeService && (
                <div key={service.id} className="animate-scale glass rounded-2xl p-8 shadow-lg">
                  <div className={`${service.color} w-16 h-16 rounded-2xl text-white flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg text-foreground/70 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full ${service.color} text-white flex items-center justify-center`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`${service.color} hover:opacity-90 transition-opacity text-white rounded-full`}>
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
