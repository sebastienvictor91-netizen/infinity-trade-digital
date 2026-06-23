export const SITE = {
  name: "Infinity Trade & Digital",
  phone: "+33 7 49 87 86 81",
  phoneRaw: "+33749878681",
  whatsappNumber: "+33 7 49 87 86 81",
  whatsappRaw: "+33749878681",
  whatsapp: "https://wa.me/33749878681?text=" + encodeURIComponent("Bonjour Infinity Trade & Digital, je souhaite obtenir des informations concernant la création d'un site web."),
  email: "contact@infinitytradedigital.fr",
};

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/creation-de-site", label: "Création de site" },
  { to: "/seo-visibilite", label: "SEO & Visibilité" },
  { to: "/publicite", label: "Publicité" },
  { to: "/crm-automatisation", label: "CRM & Automatisation" },
  { to: "/influence-promotion", label: "Promotion Musicale" },
  { to: "/contact", label: "Contact" },
] as const;

export const SEO_PAGES = [
  { slug: "site-internet-artisan", title: "Site internet artisan", metier: "artisan" },
  { slug: "site-internet-plombier", title: "Site internet plombier", metier: "plombier" },
  { slug: "site-internet-electricien", title: "Site internet électricien", metier: "électricien" },
  { slug: "site-internet-irve", title: "Site internet IRVE", metier: "installateur IRVE" },
  { slug: "site-internet-photovoltaique", title: "Site internet photovoltaïque", metier: "professionnel du photovoltaïque" },
  { slug: "site-internet-restaurant", title: "Site internet restaurant", metier: "restaurant" },
  { slug: "site-internet-vtc", title: "Site internet VTC", metier: "chauffeur VTC" },
  { slug: "site-internet-pme", title: "Site internet PME", metier: "PME" },
  { slug: "site-internet-commerce", title: "Site internet commerce", metier: "commerce de proximité" },
  { slug: "site-internet-entreprise", title: "Site internet entreprise", metier: "entreprise" },
] as const;
