
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
            Reinforcement learning algorithms can teach neural networks to become superhuman in any task given a faithful simulator.
          </p>
          <p className="text-gray-700">
            Current LLM systems trained with RL are constrained to math and coding because these are the only environments that can be simulated in a scratchpad.
          </p>
          <p className="text-gray-700">
            Vmax is building the simulators for everything else - bridging the gap between current LLM models and general super intelligence.
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
