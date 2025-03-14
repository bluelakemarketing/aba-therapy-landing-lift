
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Founder from "@/components/Founder";
import Approach from "@/components/Approach";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Index = () => {
  useEffect(() => {
    // Enhanced smooth scrolling for anchor links and buttons
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button');
      
      if (!link) return;
      
      // Check for anchor links with hash
      if (link.tagName === 'A' && link.hasAttribute('href') && link.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = link.getAttribute('href')?.substring(1);
        scrollToElement(id);
      }
      
      // Check for buttons with onClick that use element.scrollIntoView
      // This is handled directly in the onClick handlers of those buttons
    };
    
    const scrollToElement = (id: string | undefined) => {
      if (!id) return;
      
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };
    
    document.addEventListener('click', handleSmoothScroll);
    
    // Welcome toast
    setTimeout(() => {
      toast.success("Welcome to BlueLake Marketing! Scroll to explore our services.", {
        position: "top-center",
        duration: 5000,
      });
    }, 1500);
    
    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Founder />
      <Approach />
      <CaseStudy />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
