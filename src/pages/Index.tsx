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
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 text-left">
          <span className="italic">V</span>
          <sub className="text-[0.7em] relative bottom-[-0.1em] italic">max</sub>
        </h1>
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