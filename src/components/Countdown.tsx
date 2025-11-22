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
    "bg-[#053ce1] text-white rounded-xl shadow-lg px-8 py-6 min-w-[110px] text-center";

  const numberClass =
    "text-4xl sm:text-5xl font-serif font-bold leading-none";

  const labelClass =
    "mt-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] text-white/80";

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <div className={boxClass}>
        <div className={numberClass}>
          {String(timeLeft.months).padStart(2, "0")}
        </div>
        <div className={labelClass}>{t("Miesięcy", "Months")}</div>
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
        <div className={labelClass}>{t("Godzin", "Hours")}</div>
      </div>

      <div className={boxClass}>
        <div className={numberClass}>
          {String(timeLeft.minutes).padStart(2, "0")}
        </div>
        <div className={labelClass}>{t("Minut", "Minutes")}</div>
      </div>
    </div>
  );
};
