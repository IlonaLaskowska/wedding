import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Clock, Music, Camera, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

const Ceremony = () => {
  const { t } = useLanguage();

  const details = [
    {
      icon: Clock,
      title: t("Godzina", "Time"),
      content: "16:00",
      description: t("22 maja 2026", "May 22, 2026"),
    },
    {
      icon: MapPin,
      title: t("Miejsce", "Location"),
      content: "Folwark Ruchenka",
      description: t("Ceremonia odbędzie się na świeżym powietrzu", "The ceremony will take place outdoors"),
    },
    {
      icon: Music,
      title: t("Przyjęcie", "Reception"),
      content: t("Po ceremonii", "Following the ceremony"),
      description: t("Po ceremonii planujemy spokojne rozpoczęcie na zewnątrz z winem i przystawkami. Kolacja przewidywana jest na godzinę 18:00. Następnie taniec, muzyka i zabawa do białego rana.", "After the ceremony we plan to have a peaceful start outdoors with wine and snacks. Dinner is expected to start at 6:00 PM. Then dancing, music and celebration until dawn."),
    },
    {
      icon: Camera,
      title: t("Dress Code", "Dress Code"),
      content: t("Elegancki, Boho", "Elegant, Boho"),
      description: t("Ceremonia odbywa się na zewnątrz. Polecamy zabrać wygodne obuwie na zmianę oraz coś ciepłego do okrycia wieczorem.", "Outdoor ceremony. We would recommend to take comfortable shoes to change and something warm to wear later in the night."),
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            {t("Szczegóły Ceremonii", "Ceremony Details")}
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground">
            {t("Wszystkie informacje, które musisz wiedzieć", "All the information you need to know")}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {details.map((detail, index) => (
            <Card key={index} className="p-8 border-2 hover:border-accent transition-colors">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10">
                  <detail.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-2xl font-serif mb-2">{detail.content}</p>
                  <p className="text-muted-foreground">{detail.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-serif mb-8 text-center">
            {t("Jak dojechać", "How to get there")}
          </h2>
          <Card className="p-8">
            <div className="aspect-video rounded-lg mb-6 overflow-hidden">
              <iframe
                title={t("Mapa dojazdu", "Map preview")}
                src="https://www.google.com/maps?q=Folwark%20Ruchenka%2C%20S%C5%82oneczna%2025%2C%2007-100%20Ruchna&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-serif mb-2">Folwark Ruchenka</h3>
              <p className="text-muted-foreground mb-4">
                {t("Słoneczna 25, 07-100 Ruchna", "Słoneczna 25, 07-100 Ruchna")}
              </p>
              <a
                href="https://maps.app.goo.gl/vrqUj2HWB8GbZ1Hy6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
              >
                {t("Otwórz w Mapach Google", "Open in Google Maps")}
              </a>
            </div>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="p-8 bg-wedding-cream border-2">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-accent/10">
              <Gift className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">
                {t("Dodatkowe informacje", "Additional Information")}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  {t(
                    "• Ceremonia odbędzie się na świeżym powietrzu - prosimy o dostosowanie stroju do warunków",
                    "• The ceremony will be held outdoors - please dress accordingly"
                  )}
                </li>
                <li>
                  {t(
                    "• Parking dostępny na terenie obiektu",
                    "• Parking available on site"
                  )}
                </li>
                <li>
                  {t(
                    "• W razie pytań, skontaktuj się z nami",
                    "• If you have any questions, please contact us"
                  )}
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Ceremony;
