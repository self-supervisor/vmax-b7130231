
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
            Reinforcement learning algorithms can teach agents to become superhuman in any task given a faithful environment and enough compute.
          </p>
          <p className="text-gray-700">
            The environments we currently have for math and coding are short-horizon and strongly verifiable. Most tasks we want agents to do are not like this. The full dynamics of what a human agent thinks and does when approaching a problem are not captured.
          </p>
          <p className="text-gray-700">
            <em>V<sub>max</sub></em> is building RL environments for long-horizon tasks that capture and simulate the ineffable.
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
