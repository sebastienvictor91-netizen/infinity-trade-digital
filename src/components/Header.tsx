import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Infinity as InfinityIcon } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { ContactDialog } from "@/components/ContactDialog";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070707]/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center size-8 rounded-lg bg-gradient-to-br from-[#FF9A3D] to-[#FF5C00] glow-orange">
            <InfinityIcon className="size-4 text-black" strokeWidth={3} />
          </span>
          <span className="font-semibold tracking-tight">
            Infinity <span className="text-muted-foreground font-normal">Trade & Digital</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-md text-sm text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ContactDialog />
        </div>
        <button
          className="lg:hidden p-2 rounded-md hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/5 bg-[#070707]/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-3 grid gap-2">
              <ContactDialog />
              <Button asChild variant="ghostGlass" size="lg">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
