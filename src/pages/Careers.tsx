import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Declare Greenhouse types
declare global {
  interface Window {
    Grnhse?: {
      Iframe: {
        load: (jobId?: string, source?: string, ccuid?: string) => void;
      };
    };
  }
}

const Careers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent double-loading
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    // Load Greenhouse script
    const script = document.createElement('script');
    script.src = 'https://boards.greenhouse.io/embed/job_board/js?for=vmax';
    script.async = true;
    document.body.appendChild(script);

    // Wait for script to load and manually trigger iframe
    const checkAndLoad = setInterval(() => {
      if (window.Grnhse && window.Grnhse.Iframe && containerRef.current) {
        clearInterval(checkAndLoad);
        try {
          window.Grnhse.Iframe.load();
        } catch (err) {
          console.error('Greenhouse load error:', err);
        }
      }
    }, 100);

    // Cleanup after 10 seconds
    const timeout = setTimeout(() => clearInterval(checkAndLoad), 10000);

    return () => {
      clearInterval(checkAndLoad);
      clearTimeout(timeout);
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Clean up window.Grnhse to prevent errors on other pages
      delete window.Grnhse;
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
          <div id="grnhse_app" ref={containerRef} className="min-h-[500px] w-full"></div>
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
