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
              We'd love to hear from you! You can reach us at:
            </p>
            <p className="text-sm font-mono">
              auggy.amp [at] gmail [dot] com
            </p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ContactSection;