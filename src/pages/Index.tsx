import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl p-8 text-center">
        <h1 className="text-5xl font-bold mb-6 text-white bg-clip-text">
          Generate RL Trajectories from Medical Records
        </h1>
        <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6">
          {isLoading ? (
            <div className="w-full h-[400px] bg-gray-700 animate-pulse" />
          ) : (
            <img
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6Z2E4Y3Vzc2t1OWF4OWF4dWV4bXBxbG92amdyYmx1ZHd0YnV6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l44QiJqGqMr9eXcXu/giphy.gif"
              alt="Reinforcement Learning Trajectory Visualization"
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif";
              }}
            />
          )}
        </div>
        <p className="text-xl text-gray-300 mb-8">
          Transform medical records into reinforcement learning trajectories for training AI agents
        </p>
        <WaitlistForm />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;