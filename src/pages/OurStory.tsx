import { useLanguage } from "@/contexts/LanguageContext";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const OurStory = () => {
  const { t } = useLanguage();
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Placeholder gallery images - replace with actual photos
  const galleryImages = [
    { id: 1, alt: t("Zdjęcie 1", "Photo 1") },
    { id: 2, alt: t("Zdjęcie 2", "Photo 2") },
    { id: 3, alt: t("Zdjęcie 3", "Photo 3") },
    { id: 4, alt: t("Zdjęcie 4", "Photo 4") },
    { id: 5, alt: t("Zdjęcie 5", "Photo 5") },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 relative">

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-3 md:mb-4 px-4">
            {t("Nasza Historia", "Our Story")}
          </h1>
          <div className="w-20 md:w-24 h-0.5 md:h-1 bg-accent mx-auto"></div>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 lg:space-y-16">
          <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-accent mb-4 md:mb-6">
              {t("Jak się poznaliśmy", "How we met")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl">
              {t(
                "Tutaj opisz swoją historię... Opowiedz jak się poznaliście, jakie były wasze pierwsze wspólne chwile, co sprawiło, że wiedzieliście, że to właśnie ta osoba jest tą jedyną. Wasza historia jest wyjątkowa i z pewnością zainteresuje gości weselnych.",
                "Describe your relationship story here... Write down how you met, what your first moments together were like, and what made you realize this person was the one. Your story is certainly unique and will interest your wedding guests."
              )}
            </p>
          </div>

          <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-accent mb-4 md:mb-6">
              {t("Oświadczyny", "The Proposal")}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg lg:text-xl">
              {t(
                "Opowiedz o oświadczynach... Gdzie się odbyły, jak wyglądały, jakie były okoliczności. To jeden z najważniejszych momentów waszej wspólnej historii.",
                "Tell about the proposal... Where it took place, what it was like, what the circumstances were. This is one of the most important moments of your shared history."
              )}
            </p>
          </div>

          {/* Couple Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-12 md:mt-16 lg:mt-20 pt-12 md:pt-16 border-t border-border">
            {/* Bride */}
            <div className="text-center px-4">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-4 md:mb-6 rounded-full bg-muted overflow-hidden">
                {/* Placeholder for bride photo */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm md:text-base">
                  {t("Zdjęcie Panny Młodej", "Bride's Photo")}
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-decorative mb-2">Ilonka</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                {t("Panna Młoda", "The Bride")}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                {t(
                  "Tutaj możesz napisać krótki tekst o sobie. Pozwoli to gościom lepiej Cię poznać. Napisz wszystkie ciekawe informacje o sobie, możesz napisać o swoich zainteresowaniach lub o tym, jak zmieniło się Twoje życie po spotkaniu drugiej połowy.",
                  "Here you can write a short text about yourself. This will allow guests to get to know you better. Write all interesting information about yourself, you can write about your interests or how your life changed after meeting your other half."
                )}
              </p>
            </div>

            {/* Groom */}
            <div className="text-center px-4">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto mb-4 md:mb-6 rounded-full bg-muted overflow-hidden">
                {/* Placeholder for groom photo */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm md:text-base">
                  {t("Zdjęcie Pana Młodego", "Groom's Photo")}
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-decorative mb-2">Krzyś</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                {t("Pan Młody", "The Groom")}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
                {t(
                  "Tutaj możesz napisać krótki tekst o sobie. Pozwoli to gościom lepiej Cię poznać. Napisz wszystkie ciekawe informacje o sobie, możesz napisać o swoich zainteresowaniach lub o tym, jak zmieniło się Twoje życie po spotkaniu drugiej połowy.",
                  "Here you can write a short text about yourself. This will allow guests to get to know you better. Write all interesting information about yourself, you can write about your interests or how your life changed after meeting your other half."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery - Full Width at Bottom */}
      <div className="w-full py-16 md:py-20 lg:py-24 bg-wedding-cream">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 md:mb-16">
            {t("Nasza Galeria", "Our Gallery")}
          </h2>
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {galleryImages.map((image) => (
                <CarouselItem key={image.id} className="pl-2 md:pl-4">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted shadow-lg">
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      <div className="text-center">
                        <p className="text-lg md:text-xl mb-2">{image.alt}</p>
                        <p className="text-sm">{t("Dodaj swoje zdjęcie", "Add your photo")}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 md:left-8 w-12 h-12 md:w-14 md:h-14" />
            <CarouselNext className="right-4 md:right-8 w-12 h-12 md:w-14 md:h-14" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OurStory;