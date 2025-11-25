import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        end
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        activeClassName="text-accent font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("Start", "Home")}
      </NavLink>
      <NavLink
        to="/our-story"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        activeClassName="text-accent font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("Nasza Historia", "Our Story")}
      </NavLink>
      <NavLink
        to="/ceremony"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        activeClassName="text-accent font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("Szczegóły Ceremonii", "Ceremony Details")}
      </NavLink>
    </>
  );

  const mobileNavLinks = (
    <>
      <NavLink
        to="/"
        end
        className="text-base text-white hover:text-white/80 transition-colors py-2"
        activeClassName="!text-wedding-blue-light font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("Start", "Home")}
      </NavLink>
      <NavLink
        to="/our-story"
        className="text-base text-white hover:text-white/80 transition-colors py-2"
        activeClassName="!text-wedding-blue-light font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("Nasza Historia", "Our Story")}
      </NavLink>
      <NavLink
        to="/ceremony"
        className="text-base text-white hover:text-white/80 transition-colors py-2"
        activeClassName="!text-wedding-blue-light font-medium"
        onClick={() => setMobileMenuOpen(false)}
      >
        {t("Szczegóły Ceremonii", "Ceremony Details")}
      </NavLink>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-lg sm:text-xl font-serif font-semibold text-foreground hover:text-accent transition-colors"
          >
            Ilonka & Krzyś
          </NavLink>
          
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks}
            </div>
            
            {/* Language Switcher */}
            <div className="flex gap-2">
              <Button
                variant={language === "pl" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("pl")}
                className={`text-xs px-2 sm:px-3 ${language === "pl" ? "bg-accent text-accent-foreground" : "md:bg-transparent bg-accent/10 text-accent md:text-muted-foreground"}`}
              >
                PL
              </Button>
              <Button
                variant={language === "en" ? "default" : "ghost"}
                size="sm"
                onClick={() => setLanguage("en")}
                className={`text-xs px-2 sm:px-3 ${language === "en" ? "bg-accent text-accent-foreground" : "md:bg-transparent bg-accent/10 text-accent md:text-muted-foreground"}`}
              >
                EN
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[#053ce1] text-white">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex flex-col gap-2">
                    {mobileNavLinks}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
