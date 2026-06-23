import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <section id={id} className={cn("py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {(eyebrow || title || description) && (
          <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-wider text-muted-foreground">
                <span className="size-1.5 rounded-full bg-[#FF7A00]" /> {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-base sm:text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}
        <div className={cn((eyebrow || title || description) && "mt-12 lg:mt-16")}>{children}</div>
      </div>
    </section>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description?: string;
}) {
  return (
    <div className="group relative glass rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#FF7A00]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="size-11 grid place-items-center rounded-xl bg-gradient-to-br from-[#FF9A3D]/20 to-[#FF5C00]/10 border border-[#FF7A00]/20">
        <Icon className="size-5 text-[#FF9A3D]" />
      </div>
      <h3 className="mt-5 text-lg font-semibold">{title}</h3>
      {description && <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}
