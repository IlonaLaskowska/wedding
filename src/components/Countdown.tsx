import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const WEDDING_DATE = new Date("2026-05-22T16:00:00");

export const Countdown = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);

        setTimeLeft({ months, days, hours, minutes });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      <div className="bg-card rounded-lg shadow-md p-6 min-w-[100px] text-center border border-border">
        <div className="text-4xl font-serif font-bold text-foreground">{String(timeLeft.months).padStart(2, '0')}</div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
          {t("Miesięcy", "Months")}
        </div>
      </div>
      <div className="bg-card rounded-lg shadow-md p-6 min-w-[100px] text-center border border-border">
        <div className="text-4xl font-serif font-bold text-foreground">{String(timeLeft.days).padStart(2, '0')}</div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
          {t("Dni", "Days")}
        </div>
      </div>
      <div className="bg-card rounded-lg shadow-md p-6 min-w-[100px] text-center border border-border">
        <div className="text-4xl font-serif font-bold text-foreground">{String(timeLeft.hours).padStart(2, '0')}</div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
          {t("Godzin", "Hours")}
        </div>
      </div>
      <div className="bg-card rounded-lg shadow-md p-6 min-w-[100px] text-center border border-border">
        <div className="text-4xl font-serif font-bold text-foreground">{String(timeLeft.minutes).padStart(2, '0')}</div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
          {t("Minut", "Minutes")}
        </div>
      </div>
    </div>
  );
};
