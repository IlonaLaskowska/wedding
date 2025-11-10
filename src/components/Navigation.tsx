import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-xl font-serif font-semibold text-foreground hover:text-accent transition-colors"
          >
            Ilonka & Krzyś
          </NavLink>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <NavLink
                to="/"
                end
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-accent font-medium"
              >
                {t("Start", "Home")}
              </NavLink>
              <NavLink
                to="/our-story"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-accent font-medium"
              >
                {t("Nasza Historia", "Our Story")}
              </NavLink>
              <NavLink
                to="/ceremony"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-accent font-medium"
              >
                {t("Szczegóły Ceremonii", "Ceremony Details")}
              </NavLink>
              <NavLink
                to="/confirmation"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-accent font-medium"
              >
                {t("Potwierdzenie", "Confirmation")}
              </NavLink>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={language === "pl" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("pl")}
                className="text-xs"
              >
                PL
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className="text-xs"
              >
                EN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
