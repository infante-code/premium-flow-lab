import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function SubmissionThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Thank You!
        </h1>
        
        <p className="text-muted-foreground mb-6">
          Your submission has been received. We'll be in touch soon!
        </p>
        
        <p className="text-sm text-muted-foreground">
          Redirecting to homepage in <span className="text-primary font-semibold">{countdown}</span> seconds...
        </p>
      </div>
    </div>
  );
}
