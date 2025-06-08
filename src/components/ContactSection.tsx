
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const ContactSection = () => {
  // Split email into parts to make it harder for bots to scrape
  const emailParts = ['founders', 'vmax-ai'];
  
  const constructEmail = () => {
    return `${emailParts[0]}@${emailParts[1]}.com`;
  };

  return (
    <div className="mt-8">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="rounded-sm">
            Get in Touch
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start" className="text-left rounded-sm">
          <p className="text-sm font-mono">
            {constructEmail()}
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default ContactSection;
