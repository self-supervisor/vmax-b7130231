import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Careers = () => {
  useEffect(() => {
    // Load Greenhouse script only on this page
    const script = document.createElement('script');
    script.src = 'https://boards.greenhouse.io/embed/job_board/js?for=vmax';
    script.async = true;
    script.id = 'greenhouse-script';
    
    // Only add if not already present
    if (!document.getElementById('greenhouse-script')) {
      document.body.appendChild(script);
    }

    return () => {
      // Clean up script when leaving the page
      const existingScript = document.getElementById('greenhouse-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
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
