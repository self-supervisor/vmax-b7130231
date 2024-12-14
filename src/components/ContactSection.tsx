import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Mail } from "lucide-react";

const ContactSection = () => {
  // Split email into parts to make it harder for bots to scrape
  const emailParts = ['auggy', 'amp', 'gmail'];
  
  const constructEmail = () => {
    return `${emailParts[0]}.${emailParts[1]}@${emailParts[2]}.com`;
  };

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
              We'd love to hear from you! Here's how to write our email:
            </p>
            <div className="text-sm space-y-1">
              <p>1. Start with "auggy"</p>
              <p>2. Add a dot (.)</p>
              <p>3. Add "amp"</p>
              <p>4. Add "@gmail.com"</p>
            </div>
            <a
              href={`mailto:${constructEmail()}`}
              className="text-sm text-blue-500 hover:underline block mt-2"
              data-email="hidden"
            >
              Click to open email client
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ContactSection;