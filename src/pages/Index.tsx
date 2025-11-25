import { useLanguage } from "@/contexts/LanguageContext";
import { Countdown } from "@/components/Countdown";
import heroImage from "@/assets/img_landing_page2.jpg";
import watercolor12 from "@/assets/watercolor_12.png";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-start justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover [background-position:36.67%_center] md:[background-position:30%_center] lg:[background-position:center]"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background"></div>
          
          {/* Watercolor overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none opacity-60 sm:opacity-70 z-5">
            <img
              src={watercolor12}
              alt="Watercolor decoration"
              className="w-full h-auto object-cover object-bottom max-h-[200px] sm:max-h-none"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto mt-16 sm:mt-20 md:mt-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-bold mb-3 sm:mb-4 text-white">
            Ilonka & Krzyś
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 font-light tracking-wide px-2">
            {t("Pobieramy się!", "We're getting married!")}
          </p>
          
          <div className="mb-4 px-2">
            <Countdown />
          </div>
          
          <div className="text-white/80 text-base sm:text-lg mt-6 sm:mt-[10mm] px-2">
            <p className="mb-2 text-wedding-blue-dark text-sm sm:text-base md:text-lg">22.05.2026 • 16:00</p>
            <p className="font-decorative text-xl sm:text-2xl">Folwark Ruchenka</p>
          </div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-[#053ce1]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 text-white px-2">
            {t("Zapraszamy na nasz wielki dzień", "Join us on our special day")}
          </h2>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed px-2">
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
