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

  const calculateTimeLeft = () => {
    const now = new Date();

    // If wedding already passed → everything 0
    if (now >= WEDDING_DATE) {
      setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0 });
      return;
    }

    // Work from "now", but ignore seconds for stability
    const from = new Date(now.getTime());
    from.setSeconds(0, 0);

    // Count full calendar months between now and wedding
    let temp = new Date(from.getTime());
    let months = 0;

    while (true) {
      const next = new Date(temp.getTime());
      next.setMonth(next.getMonth() + 1);

      if (next <= WEDDING_DATE) {
        temp = next;
        months++;
      } else {
        break;
      }
    }

    // Remaining difference after full months
    const diffMs = WEDDING_DATE.getTime() - temp.getTime();
    const totalMinutes = Math.floor(diffMs / (1000 * 60));

    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes / 60) % 24);
    const minutes = totalMinutes % 60;

    setTimeLeft({ months, days, hours, minutes });
  };

  useEffect(() => {
    calculateTimeLeft();                 // initial
    const timer = setInterval(calculateTimeLeft, 60000); // every minute

    return () => clearInterval(timer);
  }, []);

  const boxClass =
    "bg-[#053ce1] text-white rounded-xl shadow-lg px-3 sm:px-4 md:px-5 py-3 sm:py-4 md:py-5 min-w-[70px] sm:min-w-[80px] md:min-w-[90px] text-center";

  const numberClass =
    "text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-none";

  const labelClass =
    "mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/80";

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
      <div className={boxClass}>
        <div className={numberClass}>
          {String(timeLeft.months).padStart(2, "0")}
        </div>
        <div className={labelClass}>{t("Mies", "Months")}</div>
      </div>

      <div className={boxClass}>
        <div className={numberClass}>
          {String(timeLeft.days).padStart(2, "0")}
        </div>
        <div className={labelClass}>{t("Dni", "Days")}</div>
      </div>

      <div className={boxClass}>
        <div className={numberClass}>
          {String(timeLeft.hours).padStart(2, "0")}
        </div>
        <div className={labelClass}>{t("Godz", "Hours")}</div>
      </div>

      <div className={boxClass}>
        <div className={numberClass}>
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <div className={labelClass}>{t("Min", "Minutes")}</div>
      </div>
    </div>
  );
};
