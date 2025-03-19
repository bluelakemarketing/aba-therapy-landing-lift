
import { Briefcase, Trophy, Lightbulb, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import * as React from 'react';

const LinkedIn: React.FC = () => (

const Founder = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="founder" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-50 mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full bg-teal-50 mix-blend-multiply filter blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Mobile-only image at top */}
          <div className={`lg:hidden w-full max-w-xs mx-auto animate-slide-left ${isMobile ? 'block' : 'hidden'}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/1f85aefa-8d26-41df-ba56-5743d04297db.png" 
                alt="Dovid Rotshtein - Founder of BlueLake Marketing" 
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating elements for mobile */}
            <div className="absolute -bottom-1 -left-5 glass p-3 rounded-xl shadow-lg">
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
            
            <div className="absolute -top-3 -right-5 glass p-3 rounded-xl shadow-lg">
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
          <div className="space-y-8 w-full lg:w-1/2 animate-slide-right order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
              onClick={() => window.open('https://www.linkedin.com/in/dovidrotshtein/', '_blank')}
              >
              Meet Our Founder
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="26" height="26" viewBox="0 0 192 192">
    {
    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none">
    <path d="M0,192v-192h192v192z" fill="none"></path>
    <g fill="#ffffff"><g id="surface1">
    <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
    </g>
    </g>
    </g>
    }
</svg>
);
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Dovid Rotshtein, <span className="text-blue-600">Founder & CEO</span>
            </h2>
            
            <p className="text-lg text-foreground/70">
              A passionate digital marketing specialist with deep expertise in the ABA therapy sector, Dovid founded BlueLake Marketing to help therapy providers connect with the families who need them most.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Background</h3>
                  <p className="text-foreground/70">
                    Dovid gained deep marketing expertise as a Copywriter at Ganeden Biotech (5+ years), managing SEO, SEM, and social media for national brands like Digestive Advantage® and enLiven Yogurt. He later served as Marketing Manager at 121eCommerce (nearly 4 years), overseeing digital strategies, performance analysis, partner management, and leading the creation of a new corporate website.
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
                  </p>
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 px-8 text-lg"
              onClick={() => window.open('https://www.linkedin.com/in/dovidrotshtein/', '_blank')}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* Desktop Image - Only visible on larger screens */}
          <div className="hidden lg:block relative w-full lg:w-1/2 max-w-xs mx-auto lg:max-w-sm animate-slide-left order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/1f85aefa-8d26-41df-ba56-5743d04297db.png" 
                alt="Dovid Rotshtein - Founder of BlueLake Marketing" 
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating elements - Desktop version */}
            <div className="absolute -bottom-6 -left-6 glass p-3 rounded-xl shadow-lg">
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
            
            <div className="absolute -top-6 -right-6 glass p-3 rounded-xl shadow-lg">
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
        </div>
      </div>
    </section>
  );
};

export default Founder;
export default LinkedIn;
