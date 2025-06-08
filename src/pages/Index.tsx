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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
      <div className="w-full max-w-[95vw] px-4 sm:px-8 py-8">
        <img 
          src="/lovable-uploads/8383a9b0-d8f4-4369-b18e-03473d5e90ed.png" 
          alt="Vmax" 
          className="h-16 sm:h-20 w-auto object-contain"
        />
        <div className="mt-8 space-y-6 text-left max-w-[65ch]">
          <p className="text-gray-700">
            Vmax is developing new ways to leverage reinforcement learning and large language models.
          </p>
          <p className="text-gray-700">
            Reasoning models are superhuman in domains where there is an abundance of structured data, where there is a clear sense of what a "correct" line of reasoning entails.
          </p>
          <p className="text-gray-700">
            However, most data that humans work with and produce is not so neatly structured. Reasoning can often be ambiguous, subjective, and implicit rather than explicitly defined.
          </p>
          <p className="text-gray-700">
            We are building tools to extract and utilise reasoning traces in new domains.
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
