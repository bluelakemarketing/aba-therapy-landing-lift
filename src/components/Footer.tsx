
import { Instagram, Facebook, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    
    if (emailInput.value) {
      toast.success("Thanks for subscribing to our newsletter!");
      emailInput.value = '';
    }
  };

  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 opacity-100"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-800 mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-700 mix-blend-soft-light filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              BlueLake<span className="text-blue-400">Marketing</span>
            </h2>
            <p className="text-blue-200">
              Specialized digital marketing services for ABA therapy providers. We help ABA practices connect with more families and grow their client base.
            </p>
            <div className="flex space-x-4">
             
              <a 
                href="https://www.linkedin.com/in/dovidrotshtein/" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#services" className="text-blue-200 hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="text-blue-200 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#approach" className="text-blue-200 hover:text-white transition-colors">Our Approach</a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-200 hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-blue-200 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Case Studies</a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">SEO for ABA Practices</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">PPC Advertising</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Content Marketing</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Social Media Marketing</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Analytics & Reporting</a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">Brand Development</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe to our newsletter for tips, industry updates, and marketing insights for ABA providers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900" size={18} />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  className="pl-10 pr-4 py-3 rounded-lg bg-white text-blue-900 focus:ring-blue-400 placeholder:text-blue-900/50 w-full"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-blue-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-300 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} BlueLake Marketing. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-blue-300">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
