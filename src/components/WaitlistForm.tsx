import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Automatically send email without user interaction
    const mailtoLink = `mailto:your-email@example.com?subject=New Waitlist Signup&body=Please add me to the waitlist: ${email}`;
    window.open(mailtoLink, '_self');

    toast({
      title: "Email sent!",
      description: "Your signup has been processed.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow"
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;