import { Activity, BarChart3, Bell, CheckCircle2, Globe, TrendingUp, Users } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,122,0,0.25),transparent_60%)]" />
      <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(80,160,255,0.15),transparent_60%)]" />

      {/* Globe */}
      <div className="absolute inset-[12%] rounded-full glass overflow-hidden animate-pulse-glow">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_25%,rgba(255,122,0,0.18)_50%,rgba(255,255,255,0)_75%,rgba(255,255,255,0.06))] animate-spin-slow" />
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 grid place-items-center">
          <Globe className="size-24 text-white/20" strokeWidth={1} />
        </div>
        {/* dots */}
        {[
          { t: "12%", l: "30%" }, { t: "30%", l: "70%" }, { t: "60%", l: "20%" },
          { t: "75%", l: "60%" }, { t: "45%", l: "85%" }, { t: "20%", l: "55%" },
        ].map((p, i) => (
          <span key={i} className="absolute size-2 rounded-full bg-[#FF7A00] shadow-[0_0_12px_2px_rgba(255,122,0,0.7)]" style={{ top: p.t, left: p.l }} />
        ))}
      </div>

      {/* Card 1 — Stats */}
      <div className="absolute -top-2 -left-4 sm:left-0 w-56 glass rounded-xl p-4 animate-float">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <BarChart3 className="size-4 text-[#FF9A3D]" /> Conversions
          </div>
          <span className="text-xs text-emerald-400 flex items-center gap-1"><TrendingUp className="size-3" />+38%</span>
        </div>
        <div className="mt-3 text-2xl font-semibold">12,408</div>
        <div className="mt-3 h-10 flex items-end gap-1">
          {[40, 55, 35, 70, 50, 80, 65, 90].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-gradient-to-t from-[#FF7A00] to-[#FFB14E]" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      {/* Card 2 — Pipeline */}
      <div className="absolute top-1/2 -right-2 sm:right-0 -translate-y-1/2 w-60 glass rounded-xl p-4 animate-float-slow">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Users className="size-4 text-[#9ad1ff]" /> Pipeline CRM
        </div>
        <ul className="mt-3 space-y-2 text-sm">
          {[
            { n: "Nouveau lead", c: "bg-[#FF7A00]", v: 8 },
            { n: "Devis envoyé", c: "bg-[#9ad1ff]", v: 5 },
            { n: "Client signé", c: "bg-emerald-400", v: 3 },
          ].map((s) => (
            <li key={s.n} className="flex items-center justify-between">
              <span className="flex items-center gap-2"><span className={`size-2 rounded-full ${s.c}`} />{s.n}</span>
              <span className="text-muted-foreground text-xs">+{s.v}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card 3 — Notification */}
      <div className="absolute bottom-2 left-2 sm:left-6 w-64 glass rounded-xl p-3 animate-float">
        <div className="flex items-start gap-3">
          <div className="size-9 grid place-items-center rounded-lg bg-[#FF7A00]/15">
            <Bell className="size-4 text-[#FF9A3D]" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Nouveau client</div>
            <div className="text-xs text-muted-foreground">Demande via WhatsApp · à l'instant</div>
          </div>
          <CheckCircle2 className="size-4 text-emerald-400" />
        </div>
      </div>

      {/* Card 4 — uptime */}
      <div className="absolute -bottom-2 right-2 sm:right-8 w-44 glass rounded-xl p-3 animate-float-slow">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Activity className="size-4 text-emerald-400" /> Uptime
        </div>
        <div className="mt-1 text-xl font-semibold">99.99%</div>
      </div>
    </div>
  );
}
