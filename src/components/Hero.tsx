import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-transparent to-teal-50 opacity-70"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-teal-200 mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-fade-in z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              ABA Therapy Digital Marketing Specialists
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Grow Your <span className="text-blue-600">ABA Practice</span> With Strategic Marketing
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-xl">
              We help ABA therapy providers connect with more families through tailored digital marketing strategies that increase visibility, build trust, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 px-8 text-lg">
                Schedule a Consultation
              </Button>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full h-12 px-8 text-lg group">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <p className="text-sm text-foreground/60">Trusted by ABA providers across the country</p>
              <div className="h-px bg-foreground/10 flex-grow"></div>
            </div>
          </div>
          
          {/* Image - Office marketing team working on laptops with privacy-focused overlay */}
          <div className="w-full lg:w-1/2 relative animate-slide-up z-0 lg:z-10 mt-8 lg:mt-0">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&auto=format&fit=crop&q=90" 
                alt="Marketing Team Collaboration" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-blue-800/30 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
