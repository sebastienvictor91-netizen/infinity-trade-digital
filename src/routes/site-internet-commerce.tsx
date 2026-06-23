import { createFileRoute } from "@tanstack/react-router";
import { MetierPage } from "@/components/MetierPage";
import {
 Server,
 Smartphone,
 MessageCircle,
 MapPin,
 MailCheck,
 Phone,
 Zap,
 Store,
 ShoppingCart,
 Search,
} from "lucide-react";

export const Route = createFileRoute("/site-internet-commerce")({
 head: () => ({
 meta: [
 {
 title:
 "Création site internet commerce dès 99€ | Infinity Trade & Digital",
 },
 {
 name: "description",
 content:
 "Création de site internet pour commerce, boutique et e-commerce. Site moderne, Google Business, WhatsApp, Google Maps, catalogue produits et mise en ligne rapide.",
 },
 {
 property: "og:title",
 content: "Site internet pour commerce, boutique et e-commerce",
 },
 {
 property: "og:description",
 content:
 "Site moderne pour commerce local : visibilité Google, Google Business, horaires, adresse, produits, WhatsApp, formulaire et e-commerce.",
 },
 ],
 }),
 component: () => (
 <MetierPage
 metier="commerce, boutique et e-commerce"
 title="Création de site internet pour commerce"
 intro="Un site moderne pour présenter votre boutique, vos horaires, vos produits, votre adresse et recevoir plus de contacts depuis Google, WhatsApp et votre fiche Google Business."
 benefits={[
 "Plus de visibilité sur Google et Google Business",
 "Présentation claire de votre boutique et de vos produits",
 "Possibilité d’ajouter un catalogue ou une boutique en ligne",
 "Vos clients vous contactent en 1 clic par WhatsApp ou téléphone",
 "Google Maps, horaires, adresse et informations pratiques",
 "Mise en ligne rapide avec hébergement inclus",
 ]}
 features={[
 {
 icon: Store,
 title: "Site vitrine commerce",
 description:
 "Présentez votre commerce, vos services, vos horaires, votre adresse et vos informations essentielles.",
 },
 {
 icon: Search,
 title: "Google Business & visibilité locale",
 description:
 "Mettez en avant votre commerce sur Google avec une présence locale plus claire et plus professionnelle.",
 },
 {
 icon: ShoppingCart,
 title: "Catalogue ou e-commerce",
 description:
 "Ajoutez vos produits, vos offres, vos collections ou une boutique en ligne selon votre besoin.",
 },
 {
 icon: MapPin,
 title: "Google Maps intégré",
 description:
 "Aidez vos clients à vous trouver facilement avec une carte, une adresse et une zone d’intervention claires.",
 },
 {
 icon: MessageCircle,
 title: "WhatsApp intégré",
 description:
 "Vos clients peuvent poser une question, réserver ou demander une information en un clic.",
 },
 {
 icon: Smartphone,
 title: "Compatible mobile",
 description:
 "Votre site s’affiche correctement sur smartphone, tablette et ordinateur.",
 },
 {
 icon: MailCheck,
 title: "Formulaire de contact",
 description:
 "Recevez directement les demandes clients par e-mail avec les informations importantes.",
 },
 {
 icon: Phone,
 title: "Appel direct",
 description:
 "Ajoutez un numéro cliquable pour permettre aux clients d’appeler directement depuis leur mobile.",
 },
 {
 icon: Server,
 title: "Hébergement inclus",
 description:
 "Hébergement, SSL et base technique propre pour lancer votre site rapidement.",
 },
 {
 icon: Zap,
 title: "Mise en ligne rapide",
 description:
 "Un site simple, professionnel et prêt rapidement pour commencer à être visible.",
 },
 ]}
 />
 ),
});