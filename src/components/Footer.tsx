import { Link } from "@tanstack/react-router";
import { Infinity as InfinityIcon, Mail, MessageCircle, Linkedin, Instagram } from "lucide-react";
import { NAV, SITE, SEO_PAGES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center size-8 rounded-lg bg-gradient-to-br from-[#FF9A3D] to-[#FF5C00] glow-orange">
              <InfinityIcon className="size-4 text-black" strokeWidth={3} />
            </span>
            <span className="font-semibold">Infinity Trade & Digital</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Infrastructure digitale moderne pour développer votre activité : site, visibilité, publicité et CRM.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="size-9 grid place-items-center rounded-md glass hover:bg-white/[0.06]">
              <MessageCircle className="size-4" />
            </a>
            <a href={`mailto:${SITE.email}`} className="size-9 grid place-items-center rounded-md glass hover:bg-white/[0.06]">
              <Mail className="size-4" />
            </a>
            <a href="#" className="size-9 grid place-items-center rounded-md glass hover:bg-white/[0.06]">
              <Linkedin className="size-4" />
            </a>
            <a href="#" className="size-9 grid place-items-center rounded-md glass hover:bg-white/[0.06]">
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-foreground">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Sites par métier</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SEO_PAGES.slice(0, 6).map((p) => (
              <li key={p.slug}><Link to={`/${p.slug}` as string} className="hover:text-foreground">{p.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href={`tel:${SITE.phoneRaw}`} className="hover:text-foreground">{SITE.phone}</a></li>
            <li><a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp direct</a></li>
            <li><a href={`mailto:${SITE.email}`} className="hover:text-foreground">{SITE.email}</a></li>
            <li><Link to="/mentions-legales" className="hover:text-foreground">Mentions légales</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Infinity Trade & Digital — Tous droits réservés.
      </div>
    </footer>
  );
}
