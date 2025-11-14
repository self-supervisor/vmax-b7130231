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
        <img src="/lovable-uploads/logo.png" alt="Vmax" className="h-32 sm:h-40 w-auto object-contain -ml-6" />
        <div className="mt-8 space-y-6 text-left max-w-[65ch]">
          <p className="text-gray-700">
            <em>
              V<sub>max</sub>
            </em>{" "}
            is automating reinforcement learning. We transform proprietary data and evals into new sets of environments.
            We refine agents on new examples of the tasks they are intended to perform.
          </p>
          <p className="text-gray-700">
            Crucially, we are removing as much of the human element from this loop as possible. Vmax is actively
            developing new approaches to automated environment design. We are hiring researchers with a deep expertise
            in reinforcement learning, and a keen interest in bringing its more esoteric aspects to real applications.
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
