import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import ContactSection from "@/components/ContactSection";
import { Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
      const element = document.querySelector('.video-container');
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
        try {
          if ('orientation' in screen) {
            // @ts-ignore - TypeScript doesn't recognize screen.orientation.lock
            screen.orientation.lock('landscape').catch(() => {
              // Silently fail if orientation lock is not supported
            });
          }
        } catch (error) {
          console.log('Screen orientation API not supported');
        }
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, [isMobile]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
      <div className="w-full max-w-4xl px-4 sm:px-8 py-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
          <span style={{ fontFamily: "'Times New Roman', serif", fontStyle: "italic" }}>V</span>
          <sub style={{ fontFamily: "'Times New Roman', serif", fontSize: '0.7em', position: 'relative', bottom: '-0.1em', fontStyle: "italic" }}>max</sub>
        </h1>
        <div className="relative mb-6">
          {isLoading ? (
            <div className="w-full h-[300px] sm:h-[400px] bg-gray-200 animate-pulse" />
          ) : (
            <div className={`video-container relative ${isFullscreen && isMobile ? 'rotate-90 scale-[1.8] origin-center' : ''}`}>
              <div className="aspect-[16/9] max-w-3xl mx-auto">
                <video
                  src="https://raw.githubusercontent.com/self-supervisor/vmax_public/main/looping_actions.webm"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 border-none text-white rounded-md"
                onClick={toggleFullscreen}
              >
                {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </div>
          )}
        </div>
        <p className="text-lg sm:text-xl text-gray-600 mb-4">
          Generate RL agents from your companies database
        </p>
        <div className="text-sm text-gray-500 mb-8 space-y-4 max-w-2xl mx-auto text-center">
          <p className="mb-2">AI agents need more reinforcement learning. We're tackling this by:</p>
          <ol className="list-decimal space-y-2 inline-block text-center">
            <li>Automating the extraction of RL trajectories from company data</li>
            <li>Training agents with customizable multistep rewards</li>
          </ol>
          <p className="mt-4">Want agents that can work autonomously over long periods? Join our waitlist.</p>
        </div>
        <WaitlistForm />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;