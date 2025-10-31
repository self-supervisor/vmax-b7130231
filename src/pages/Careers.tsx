import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Job {
  id: number;
  title: string;
  location: { name: string };
  absolute_url: string;
  updated_at: string;
}

const Careers = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://boards-api.greenhouse.io/v1/boards/vmax/jobs')
      .then(res => res.json())
      .then(data => {
        setJobs(data.jobs || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load jobs:', err);
        setLoading(false);
      });
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
          {loading ? (
            <p className="text-gray-600">Loading positions...</p>
          ) : jobs.length === 0 ? (
            <p className="text-gray-600">No open positions at this time.</p>
          ) : (
            <div className="space-y-4">
              {jobs.map(job => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    <CardDescription>{job.location.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={job.absolute_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      View Position & Apply →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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
