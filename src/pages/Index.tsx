
import { useState, useEffect } from "react";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[95vw] px-4 sm:px-8 py-8">
        <img 
          src="/lovable-uploads/8383a9b0-d8f4-4369-b18e-03473d5e90ed.png" 
          alt="Vmax" 
          className="h-32 sm:h-40 w-auto object-contain -ml-6"
        />
        <div className="mt-8 space-y-6 text-left max-w-[65ch]">
          <p className="text-gray-700">
            Vertical agent companies have unique data and domain expertise. Vmax transforms these assets into bespoke RL agents with a strong competitive edge.
          </p>
          <p className="text-gray-700">
            The result: agents and simulations that are custom to your task, continuously evolve with your business needs, and impossible for others to copy.
          </p>
          <p className="text-gray-700">
            Vmax is founded by 3 RL PhDs from UCL and UPenn, backed by industry experiences in self-driving, robotics, AI infrastructure, and publications in top AI conferences such as NeurIPS, ICML, and AAAI.
          </p>
          <p className="text-gray-700 mt-4">
            Heejin, Augustine, Matthew
          </p>
        </div>
        <div className="mt-8 text-left">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
