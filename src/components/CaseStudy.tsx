
import { ArrowRight, BarChart2, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const CaseStudy = () => {
  return (
    <section id="case-study" className="py-20 md:py-28 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/lovable-uploads/d3176bb3-7238-4f68-85ff-feb7a843005b.png')] bg-no-repeat bg-right-top opacity-5"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-200 mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-teal-200 mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-4">
            Success Story
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-blue-600">Real Results</span> for ABA Practices
          </h2>
          <p className="text-lg text-foreground/70">
            See how we've helped ABA therapy providers achieve remarkable growth through strategic digital marketing.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side - Images and logo */}
              <div className="p-8 flex flex-col">
                <div className="rounded-xl overflow-hidden mb-6 shadow-md">
                  <img 
                    src="/lovable-uploads/d3176bb3-7238-4f68-85ff-feb7a843005b.png"
                    alt="Child during ABA therapy session" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 bg-white p-4 rounded-xl shadow-sm">
                    <img 
                      src="https://assets.gammaplatform.com/a5f6f5f2-84b5-48be-a4b4-1a12c47f9e46/img/0881ba2d-1e3e-4c1f-bbb3-39876fa2b486.png" 
                      alt="Autumn ABA Logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-blue-600">Autumn ABA</h3>
                  <p className="text-foreground/70">ABA Therapy Provider</p>
                </div>
              </div>
              
              {/* Right side - Case study content */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-bold mb-6">
                    Rapid Growth Through Digital Marketing
                  </h3>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Challenge</h4>
                    <p className="text-foreground/80 mb-4">
                      Autumn ABA, a startup ABA therapy company, invested in Google and Facebook ads but struggled to attract the right audience.
                    </p>
                    <ul className="space-y-2 text-foreground/70">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Low engagement and minimal leads</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>High ad spend with little return</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>Difficulty targeting the right families</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Solution</h4>
                    <p className="text-foreground/80">
                      Blue Lake Marketing took over the management and created all new, high-quality, optimized campaigns and ads for Google and Facebook/Instagram.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-blue-600 mb-4">Results</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <BarChart2 className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm text-foreground/70">Leads</p>
                            <p className="text-xl font-bold">70+ per month</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Users className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm text-foreground/70">Client Acquisition</p>
                            <p className="text-xl font-bold">62% from ads</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <Users className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm text-foreground/70">Team Expansion</p>
                            <p className="text-xl font-bold">Hired 2 employees</p>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <TrendingUp className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm text-foreground/70">Future Growth</p>
                            <p className="text-xl font-bold">New locations</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center lg:text-left">
                  <Button 
                    className="group bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.location.href="#contact"}
                  >
                    Get similar results for your practice
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <img
                    src="https://www.gravatar.com/avatar/0?d=mp"
                    alt="Dovid Rotshtein"
                    className="w-10 h-10 rounded-full mr-3 border-2 border-white/20"
                  />
                  <div>
                    <p className="font-medium">by Dovid Rotshtein</p>
                    <p className="text-sm text-white/70">Marketing Director</p>
                  </div>
                </div>
                
                <p className="text-lg font-medium italic text-center md:text-right">
                  "We helped Autumn ABA achieve sustainable growth."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
