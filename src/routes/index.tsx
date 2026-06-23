import { createFileRoute } from "@tanstack/react-router";
import { HomeContent } from "@/components/HomeContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infinity Trade & Digital — Sites web premium, SEO, Publicité, CRM" },
      { name: "description", content: "Site web moderne dès 99€, hébergement inclus, SEO, publicité Google et CRM. Infrastructure digitale premium pour professionnels." },
      { property: "og:title", content: "Infinity Trade & Digital" },
      { property: "og:description", content: "Sites premium, visibilité Google, publicité et CRM pour professionnels." },
    ],
  }),
  component: HomeContent,
});
