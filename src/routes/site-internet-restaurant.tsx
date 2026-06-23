import { createFileRoute } from "@tanstack/react-router";
import { MetierPage } from "@/components/MetierPage";
import { Server, Smartphone, MessageCircle, MapPin, MailCheck, Phone, Sparkles, Zap, Utensils } from "lucide-react";

export const Route = createFileRoute("/site-internet-restaurant")({
  head: () => ({
    meta: [
      { title: "Site internet pour restaurant dès 99€ — Infinity Trade & Digital" },
      { name: "description", content: "Carte, réservation, photos et localisation pour attirer plus de clients dans votre restaurant." },
      { property: "og:title", content: "Site internet pour restaurant premium" },
      { property: "og:description", content: "Carte, réservation, photos et localisation pour attirer plus de clients dans votre restaurant." },
    ],
  }),
  component: () => (
    <MetierPage
      metier="restaurant"
      title="Site internet pour restaurant — moderne, rapide, efficace."
      intro="Carte, réservation, photos et localisation pour attirer plus de clients dans votre restaurant."
      benefits={["Plus de demandes clients depuis Google","Image moderne et professionnelle","Affichage parfait sur mobile et tablette","Contact direct par WhatsApp et téléphone","Présence locale renforcée","Mise en ligne rapide et hébergement inclus"]}
      features={[
        { icon: Utensils, title: "Conçu pour restaurant", description: "Un site pensé pour votre métier." },
        { icon: Server, title: "Hébergement inclus", description: "Serveurs rapides, SSL, sauvegardes." },
        { icon: Smartphone, title: "Responsive mobile", description: "Affichage parfait sur tous les écrans." },
        { icon: MessageCircle, title: "Bouton WhatsApp", description: "Vos clients vous contactent en un clic." },
        { icon: MapPin, title: "Google Maps", description: "Carte intégrée pour vous localiser." },
        { icon: MailCheck, title: "Formulaire", description: "Recevez les demandes par email." },
        { icon: Phone, title: "Numéro cliquable", description: "Appel direct depuis le mobile." },
        { icon: Zap, title: "Mise en ligne rapide", description: "Site livré en quelques jours." },
      ]}
    />
  ),
});
