
import { Users, Target, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-blue-100 mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-teal-100 mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-slide-right">
            <img 
              src="https://unsplash.com/photos/person-writing-on-white-paper-gcsNOsPEXfs?q=80&w=2070&auto=format&fit=crop" 
              alt="BlueLake Marketing Team" 
              className="rounded-2xl shadow-xl w-full"
              loading="lazy"
            />
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 glass p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 rounded-lg p-3 text-white">
                  <Users size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Clients Served</p>
                  <p className="text-2xl font-bold text-foreground">50+ ABA Providers</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 glass p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-teal-600 rounded-lg p-3 text-white">
                  <Target size={24} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Collective Experience</p>
                  <p className="text-2xl font-bold text-foreground">20+ Years</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8 animate-slide-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              About BlueLake Marketing
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              We Understand the <span className="text-blue-600">Unique Needs</span> of ABA Therapy Providers
            </h2>
            
            <p className="text-lg text-foreground/70">
              BlueLake Marketing was founded with a clear mission: to help ABA therapy providers connect with the families who need their services most. We combine deep industry knowledge with cutting-edge digital marketing strategies to deliver exceptional results.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                  <p className="text-foreground/70">
                    Our team has specialized knowledge of the ABA therapy field, including regulations, terminology, and the unique challenges providers face in marketing their services.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain text-blue-600"><path d="M9.5 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M14.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/><path d="M19.5 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/><path d="M19.5 12a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/><path d="M14.5 17a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/><path d="M9.5 17a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M4.5 12a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M4.5 7a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"/><path d="M9.5 7a2.5 2.5 0 1 0 5 0"/><path d="M7 12h10"/><path d="M9.5 17a2.5 2.5 0 1 0 5 0"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven Strategies</h3>
                  <p className="text-foreground/70">
                    We leverage analytics to develop marketing strategies that attract qualified leads, focusing on reaching parents and caregivers actively seeking ABA services.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake text-blue-600"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"/><path d="m18 15-2-2"/><path d="m15 18-2-2"/></svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Compassionate Approach</h3>
                  <p className="text-foreground/70">
                    We understand the sensitive nature of ABA therapy and create marketing materials that are respectful, informative, and empathetic to families' needs.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 px-8 text-lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
