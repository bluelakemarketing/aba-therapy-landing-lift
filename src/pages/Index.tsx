
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
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const id = link.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for fixed header
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Welcome toast
    setTimeout(() => {
      toast.success("Welcome to BlueLake Marketing! Scroll to explore our services.", {
        position: "top-center",
        duration: 5000,
      });
    }, 1500);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
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
