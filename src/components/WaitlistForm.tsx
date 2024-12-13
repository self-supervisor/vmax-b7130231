import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          to_email: 'YOUR_EMAIL@example.com', // Replace with your email
          from_email: email,
          message: `New waitlist signup from: ${email}`,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast({
        title: "Successfully joined waitlist!",
        description: "We'll notify you when we launch.",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Error joining waitlist",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

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