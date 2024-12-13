import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import ContactSection from "@/components/ContactSection";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const element = document.querySelector('.gif-container');
      if (element?.requestFullscreen) {
        element.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
      if (!!document.fullscreenElement && isMobile) {
        screen.orientation.lock('landscape').catch(() => {
          // Silently fail if orientation lock is not supported
        });
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [isMobile]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-4xl px-4 sm:px-8 py-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white bg-clip-text">
          V<sub>max</sub>
        </h1>
        <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6">
          {isLoading ? (
            <div className="w-full h-[300px] sm:h-[400px] bg-gray-700 animate-pulse" />
          ) : (
            <div className={`gif-container relative ${isFullscreen && isMobile ? 'rotate-90 scale-[1.8] origin-center' : ''}`}>
              <div className="aspect-video w-full">
                <img
                  src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDd6Z2E4Y3Vzc2t1OWF4OWF4dWV4bXBxbG92amdyYmx1ZHd0YnV6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l44QiJqGqMr9eXcXu/giphy.gif"
                  alt="Reinforcement Learning Trajectory Visualization"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif";
                  }}
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 border-none text-white"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Generate RL trajectories for training agents from healthcare data
        </p>
        <WaitlistForm />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;