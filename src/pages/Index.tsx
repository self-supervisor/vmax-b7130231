
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
          src="/lovable-uploads/logo.png" 
          alt="Vmax" 
          className="h-32 sm:h-40 w-auto object-contain -ml-6"
        />
        <div className="mt-8 space-y-6 text-left max-w-[65ch]">
          <p className="text-gray-700">
            Vertical agent companies have unique data and domain expertise. <em>V<sub>max</sub></em> is building an automated RL engineer that transforms these assets into bespoke RL agents with a strong competitive edge.
          </p>
          <p className="text-gray-700">
            The result: agents and simulations that are custom to your task, continuously evolve with your business needs, and impossible for others to copy.
          </p>
          <p className="text-gray-700">
            <em>V<sub>max</sub></em> is founded by 3 RL PhDs from UCL and UPenn, backed by industry experiences in self-driving, robotics, AI infrastructure, and publications in top AI conferences such as NeurIPs, ICML, and AAAI.
          </p>
          <p className="text-gray-700 mt-4">
            Founders: <a href="https://www.linkedin.com/in/heejin-chloe-jeong/" target="_blank" rel="noopener noreferrer" className="hover:underline">Heejin</a>, <a href="https://www.linkedin.com/in/augustine-mavor-parker/" target="_blank" rel="noopener noreferrer" className="hover:underline">Augustine</a>, <a href="https://www.linkedin.com/in/matthewjsargent/" target="_blank" rel="noopener noreferrer" className="hover:underline">Matthew</a>
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
