import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Careers = () => {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent double-loading in development
    if (scriptLoadedRef.current) return;
    
    const loadGreenhouseScript = () => {
      const script = document.createElement('script');
      script.src = 'https://boards.greenhouse.io/embed/job_board/js?for=vmax';
      script.async = false; // Load synchronously to ensure proper initialization
      script.id = 'greenhouse-jb-script';
      
      script.onload = () => {
        console.log('Greenhouse script loaded successfully');
      };
      
      script.onerror = () => {
        console.error('Failed to load Greenhouse script');
      };
      
      document.body.appendChild(script);
      scriptLoadedRef.current = true;
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (!document.getElementById('greenhouse-jb-script')) {
        loadGreenhouseScript();
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      const script = document.getElementById('greenhouse-jb-script');
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-[95vw] px-4 sm:px-8 py-8">
        <Link to="/">
          <img 
            src="/lovable-uploads/logo.png" 
            alt="Vmax" 
            className="h-32 sm:h-40 w-auto object-contain -ml-6"
          />
        </Link>
        <div className="mt-8 space-y-6 text-left max-w-[65ch]">
          <h1 className="text-2xl font-semibold text-gray-900">Careers</h1>
        </div>
        <div className="mt-8 text-left">
          <div id="grnhse_app" className="min-h-[500px] w-full"></div>
        </div>
        <div className="mt-8 text-left">
          <Link to="/">
            <Button variant="outline" className="rounded-sm">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;
