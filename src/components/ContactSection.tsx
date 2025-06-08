
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [showEmail, setShowEmail] = useState(false);
  
  // Split email into parts to make it harder for bots to scrape
  const emailParts = ['founders', 'vmax-ai'];
  
  const constructEmail = () => {
    return `${emailParts[0]}@${emailParts[1]}.com`;
  };

  const handleClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <div className="mt-8">
      <Button variant="outline" className="gap-2 rounded-md" onClick={handleClick}>
        <Mail className="h-4 w-4" />
        {showEmail ? constructEmail() : "Get in Touch"}
      </Button>
    </div>
  );
};

export default ContactSection;
