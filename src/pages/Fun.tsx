import { useMemo, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import watercolor12 from "@/assets/watercolor_12.png";

const gifts = [
  { pl: "oliwa z oliwek", en: "olive oil" },
  { pl: "miód", en: "honey" },
  { pl: "herbata", en: "tea" },
  { pl: "kawa", en: "coffee" },
  { pl: "wino", en: "wine" },
  { pl: "śmieszne skarpetki", en: "funny socks" },
  { pl: "świece sojowe", en: "soy candles" },
];

const spinDurationMs = 4600;

const segmentColors = [
  "hsl(var(--accent))",
  "hsl(var(--accent) / 0.9)",
  "hsl(var(--accent) / 0.8)",
  "hsl(var(--accent) / 0.7)",
  "hsl(var(--wedding-blue) / 0.8)",
  "hsl(var(--wedding-blue-light))",
  "hsl(var(--wedding-cream))",
];

const normalizeAngle = (angle: number) => ((angle % 360) + 360) % 360;

const labelOffsets: Record<string, { x?: number; y?: number }> = {
  "funny socks": { x: -2, y: -25 },
  wine: { x: -20, y: -18 },
  coffee: { x: -25, y: 10 },
  tea: { x: -10, y: 30 },
  honey: { x: 10, y: 20 },
  "olive oil": { x: 30, y: -10 },
  "soy candles": { x: 15, y: -20 },
};

const Fun = () => {
  const { language, t } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedGift, setSelectedGift] = useState<(typeof gifts)[number] | null>(null);
  const pendingGiftRef = useRef<(typeof gifts)[number] | null>(null);

  const segmentAngle = 360 / gifts.length;

  const wheelGradient = useMemo(() => {
    const segments = gifts.map((_, index) => {
      const start = index * segmentAngle;
      const end = (index + 1) * segmentAngle;
      const color = segmentColors[index % segmentColors.length];
      return `${color} ${start}deg ${end}deg`;
    });

    return `conic-gradient(from -90deg, ${segments.join(", ")})`;
  }, [segmentAngle]);

  const spinWheel = () => {
    if (isSpinning) return;

    const selectedIndex = Math.floor(Math.random() * gifts.length);
    const selected = gifts[selectedIndex];
    const segmentCenter = selectedIndex * segmentAngle + segmentAngle / 2;

    pendingGiftRef.current = selected;
    setSelectedGift(null);
    setIsSpinning(true);

    setRotation((current) => {
      const currentNormalized = normalizeAngle(current);
      const targetNormalized = normalizeAngle(360 - segmentCenter);
      const deltaNormalized = normalizeAngle(targetNormalized - currentNormalized);
      const extraTurns = 6 * 360;

      return current + extraTurns + deltaNormalized;
    });
  };

  const handleTransitionEnd = (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform") return;
    if (!isSpinning) return;

    setIsSpinning(false);
    setSelectedGift(pendingGiftRef.current);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-[#053ce1] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none opacity-60 sm:opacity-70 z-0">
        <img
          src={watercolor12}
          alt="Watercolor decoration"
          className="w-full h-auto object-cover object-bottom max-h-[200px] sm:max-h-none"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-3">
            {t("Prezenty", "Gifts")}
          </h1>
          <p className="text-white/90 text-lg">
            {t(
              "Zakręć kołem fortuny i sprawdź swój prezent.",
              "Spin the wheel and discover your gift."
            )}
          </p>
        </div>

        <Card className="p-6 md:p-10 bg-white/95 border-0 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="relative mx-auto h-80 w-80 sm:h-96 sm:w-96">
                <div
                  className="absolute inset-0 rounded-full border-[10px] border-white shadow-2xl"
                  style={{
                    background: wheelGradient,
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning
                      ? `transform ${spinDurationMs}ms cubic-bezier(0.15, 0.8, 0.15, 1)`
                      : "none",
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  <div className="absolute inset-0 rounded-full">
                    {gifts.map((gift, index) => {
                      const angle = index * segmentAngle + segmentAngle / 2;
                      const radians = (angle * Math.PI) / 180;
                      const radius = 33;
                      const left = 50 + Math.sin(radians) * radius;
                      const top = 50 - Math.cos(radians) * radius;
                      const offset = labelOffsets[gift.en] ?? {};
                      const label = t(gift.pl, gift.en);
                      const displayLabel =
                        gift.en === "olive oil"
                          ? label.replace(/\s+z\s+/i, "\nz ")
                          : gift.en === "soy candles"
                          ? label.replace(/\s+/i, "\n")
                          : label;

                      return (
                        <span
                          key={gift.en}
                          className="absolute text-[11px] sm:text-xs font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] text-center leading-tight"
                          style={{
                            left: `calc(${left}% + ${(offset.x ?? 0).toString()}px)`,
                            top: `calc(${top}% + ${(offset.y ?? 0).toString()}px)`,
                            transform: `translate(-50%, -50%) rotate(${-rotation}deg)`,
                            width: "88px",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {displayLabel}
                        </span>
                      );
                    })}
                  </div>
                  <div className="absolute inset-[34%] rounded-full bg-white/35 border border-white/60" />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-0 h-0 border-l-[14px] border-r-[14px] border-t-0 border-b-[24px] border-l-transparent border-r-transparent border-b-accent z-20" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-accent border-2 border-white z-20" />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif text-foreground mb-3">
                  {t("Opcje prezentów", "Gift options")}
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                  {gifts.map((gift) => (
                    <li key={gift.en}>
                      - {t(gift.pl, gift.en)}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={spinWheel}
                disabled={isSpinning}
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                {isSpinning ? t("Losowanie...", "Spinning...") : t("Zakręć kołem", "Spin the wheel")}
              </Button>

              <div className="min-h-16">
                {selectedGift ? (
                  <div className="rounded-lg bg-accent/10 border border-accent/20 p-4">
                    <p className="text-sm text-muted-foreground mb-1">
                      {t("Wylosowany prezent", "Selected gift")}
                    </p>
                    <p className="text-2xl font-serif text-accent">
                      {language === "pl" ? selectedGift.pl : selectedGift.en}
                    </p>
                  </div>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    {t(
                      "Kliknij przycisk i zobacz, co wylosujesz.",
                      "Press spin and see what you get."
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Fun;
