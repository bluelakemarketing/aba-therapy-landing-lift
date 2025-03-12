
import { Briefcase, Trophy, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Founder = () => {
  return (
    <section id="founder" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-50 mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-teal-50 mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Made smaller */}
          <div className="relative order-2 lg:order-1 animate-slide-left">
            <div className="relative max-w-xs mx-auto lg:max-w-sm rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/1f85aefa-8d26-41df-ba56-5743d04297db.png" 
                alt="Dovid Rotshtein - Founder of BlueLake Marketing" 
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating elements - Adjusted for smaller image */}
            <div className="absolute -bottom-5 -left-5 md:-bottom-6 md:-left-6 glass p-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 rounded-lg p-2 text-white">
                  <Trophy size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/70">Experience</p>
                  <p className="text-xl font-bold text-foreground">20+ Years</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 md:-top-6 md:-right-6 glass p-3 rounded-xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="bg-teal-600 rounded-lg p-2 text-white">
                  <Lightbulb size={20} />
                </div>
                <div>
                  <p className="text-xs text-foreground/70">Founder</p>
                  <p className="text-xl font-bold text-foreground">Since 2015</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2 animate-slide-right">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              Meet Our Founder
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Dovid Rotshtein, <span className="text-blue-600">Founder & CEO</span>
            </h2>
            
            <p className="text-lg text-foreground/70">
              Dovid gained deep marketing expertise as a Copywriter at Ganeden Biotech (5+ years), managing SEO, SEM, and social media for national brands like Digestive Advantage® and enLiven Yogurt. He later served as Marketing Manager at 121eCommerce (nearly 4 years), overseeing digital strategies, performance analysis, partner management, and leading the creation of a new corporate website.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Background</h3>
                  <p className="text-foreground/70">
                    Prior to founding BlueLake Marketing, Dovid served as Marketing Director at Positive Behavioral Connections and Digital Marketing Manager at ABA Centers of America, gaining invaluable industry insights.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <GraduationCap className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education & Expertise</h3>
                  <p className="text-foreground/70">
                    With a strong educational foundation and continuous professional development, Dovid combines strategic thinking with deep technical knowledge in SEO, PPC, and data analytics.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target text-blue-600">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mission-Driven Approach</h3>
                  <p className="text-foreground/70">
                    Dovid is dedicated to helping ABA therapy providers grow their practices through ethical, effective marketing strategies that prioritize the needs of both providers and the families they serve.
                  </p><br><br>
                </div>
              </div>
            </div>

            
            <a href="https://www.linkedin.com/in/dovidrotshtein/"> 
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 px-8 text-lg">
               Get in Touch
            </Button>
              </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
