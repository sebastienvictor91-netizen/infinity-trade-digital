import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — Infinity Trade & Digital" },
      { name: "description", content: "Mentions légales du site Infinity Trade & Digital." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <Section eyebrow="Mentions légales" title="Informations légales">
        <div className="prose prose-invert max-w-3xl mx-auto text-muted-foreground space-y-4 text-sm leading-relaxed">
          <p><strong className="text-foreground">Éditeur :</strong> Infinity Trade & Digital.</p>
          <p><strong className="text-foreground">Contact :</strong> +33 7 49 87 86 81 — contact@infinitytradedigital.fr</p>
          <p><strong className="text-foreground">Hébergement :</strong> infrastructure cloud sécurisée.</p>
          <p>L'ensemble des contenus présents sur ce site (textes, images, marques) sont protégés. Toute reproduction est interdite sans autorisation préalable.</p>
        </div>
      </Section>
    </Layout>
  );
}
