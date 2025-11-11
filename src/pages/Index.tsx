import { useLanguage } from "@/contexts/LanguageContext";
import { Countdown } from "@/components/Countdown";
import heroImage from "@/assets/img_landing_page2.jpg";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-white -mt-20">
            Ilonka & Krzyś
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light tracking-wide">
            {t("Pobieramy się!", "We're getting married!")}
          </p>
          
          <div className="mb-4">
            <Countdown />
          </div>
          
          <div className="text-white/80 text-lg mt-[10mm]">
            <p className="mb-2">22.05.2026 • 16:00</p>
            <p className="font-decorative text-2xl">Folwark Ruchenka</p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-20 px-4 bg-wedding-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            {t("Zapraszamy na nasz wielki dzień", "Join us on our special day")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t(
              "Z radością zapraszamy Was do podzielenia się z nami jednym z najważniejszych momentów naszego życia. Będzie nam niezmiernie miło gościć Was podczas ceremonii ślubnej oraz przyjęcia weselnego.",
              "We joyfully invite you to share with us one of the most important moments of our lives. We would be delighted to have you join us for our wedding ceremony and reception."
            )}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
