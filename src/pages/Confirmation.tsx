import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

const Confirmation = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "",
    guests: "",
    meal: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast.success(
      t(
        "Dziękujemy za potwierdzenie! Wkrótce się z Tobą skontaktujemy.",
        "Thank you for confirming! We'll be in touch soon."
      )
    );
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 bg-wedding-cream">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">
            {t("Potwierdzenie Obecności", "RSVP")}
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            {t(
              "Prosimy o potwierdzenie obecności do 21 marca 2026",
              "Please confirm your attendance by April 1, 2026"
            )}
          </p>
        </div>

        {/* Form */}
        <Card className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">
                {t("Imię i nazwisko", "Full Name")} *
              </Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder={t("Jan Kowalski", "John Smith")}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">
                {t("Adres e-mail", "Email Address")} *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="mail@example.com"
              />
            </div>

            {/* Attendance */}
            <div className="space-y-4">
              <Label>
                {t("Czy będziesz obecny/a?", "Will you attend?")} *
              </Label>
              <RadioGroup
                required
                value={formData.attendance}
                onValueChange={(value) =>
                  setFormData({ ...formData, attendance: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes" className="font-normal cursor-pointer">
                    {t("Tak, z przyjemnością!", "Yes, with pleasure!")}
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no" className="font-normal cursor-pointer">
                    {t("Niestety nie mogę", "Unfortunately, I can't make it")}
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Number of Guests */}
            {formData.attendance === "yes" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="guests">
                    {t("Liczba gości", "Number of guests")}
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    value={formData.guests}
                    onChange={(e) =>
                      setFormData({ ...formData, guests: e.target.value })
                    }
                    placeholder="1"
                  />
                </div>

                {/* Dietary Requirements */}
                <div className="space-y-2">
                  <Label htmlFor="meal">
                    {t("Wymagania żywieniowe", "Dietary requirements")}
                  </Label>
                  <div>
                    <Label className="sr-only" htmlFor="meal">
                      {t("Preferencje posiłku", "Meal preference")}
                    </Label>
                    <Select
                      value={formData.meal}
                      onValueChange={(value) =>
                        setFormData({ ...formData, meal: value })
                      }
                    >
                      <SelectTrigger id="meal" className="w-full">
                        <SelectValue
                          placeholder={t("Wybierz opcję", "Choose an option")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regular">
                          {t("Regularne", "Regular")}
                        </SelectItem>
                        <SelectItem value="vege">
                          {t("Wegetariańskie", "Vegetarian")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </>
            )}

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">
                {t("Wiadomość dla Pary Młodej", "Message for the couple")}
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={t(
                  "Twoje życzenia i wszelkie pytania...",
                  "Your wishes and any questions..."
                )}
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg">
              {t("Wyślij potwierdzenie", "Send Confirmation")}
            </Button>
          </form>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center text-muted-foreground">
          <p>
            {t(
              "W razie pytań, skontaktuj się z nami telefonicznie",
              "If you have any questions, contact us via phone"
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
