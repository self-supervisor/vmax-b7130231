import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="mt-8 text-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="gap-2 rounded-md">
            <Mail className="h-4 w-4" />
            Get in Touch
          </Button>
        </PopoverTrigger>
        <PopoverContent className="text-left rounded-md">
          <div className="space-y-2">
            <h3 className="font-medium">Contact Us</h3>
            <p className="text-sm text-muted-foreground">
              We'd love to hear from you! Reach out to us at:
            </p>
            <a
              href="mailto:contact@example.com"
              className="text-sm text-blue-500 hover:underline block"
            >
              contact@example.com
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ContactSection;