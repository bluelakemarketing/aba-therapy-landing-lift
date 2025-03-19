import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare email data
      const emailData = {
        to: "dovid@bluelakemarketing.com",
        subject: `New contact form   submission from ${formData.name}`,
        message: `
          Name: ${formData.name}
          Email: ${formData.email}
          Phone: ${formData.phone || 'Not provided'}
          ABA Practice: ${formData.company}
          
          Message:
          ${formData.message}
        `,
      };
      
      // Send form data via email
      const response = await fetch("https://formsubmit.co/dovid@bluelakemarketing.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Contact from ${formData.name} - BlueLake Marketing`,
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      
      toast.success("Thank you for your message! We'll be in touch soon.", {
        position: "top-center",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("There was a problem sending your message. Please try again.", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-blue-50/80 to-transparent"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-blue-50 filter blur-3xl opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-blue-600">Grow Your ABA Practice?</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Contact us today to schedule a free consultation and discover how our specialized marketing services can help your ABA therapy practice thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-right">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-700 rounded-full p-3 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Phone</p>
                    <p className="text-xl font-medium">+1 (216) 906-3962</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-700 rounded-full p-3 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-foreground/60 text-sm">Email</p>
                    <p className="text-xl font-medium">dovid@bluelakemarketing.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-semibold text-xl mb-4">Schedule a Call</h4>
                <p className="text-foreground/70 mb-6">
                  Book a free 30-minute consultation to discuss your ABA practice's marketing needs.
                </p>
                <Button className="w-full bg-green-600 hover:bg-blue-700 text-white rounded-full h-12"
                  onClick={() => window.open('https://calendly.com/dovid-rotshtein/', '_blank')}
                  >
                  BOOK DISCOVERY CALL
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-left">
            <div className="glass rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Full Name*</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address*</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">ABA Practice Name*</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your ABA Practice"
                      required
                      className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Your Message*</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your marketing needs and goals..."
                    required
                    className="rounded-lg border-gray-200 focus:border-blue-500 focus:ring-blue-500 min-h-[120px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 text-lg"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
