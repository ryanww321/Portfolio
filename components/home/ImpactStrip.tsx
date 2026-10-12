import { impactStats } from "@/data/highlights";

export function ImpactStrip() {
  return (
    <dl className="grid grid-cols-2 border-y border-border md:grid-cols-4">
      {impactStats.map((stat, index) => (
        <div
          key={stat.label}
          className={[
            "flex flex-col gap-1.5 py-5",
            index % 2 === 1 ? "border-l border-border pl-4 sm:pl-5" : "pr-4",
            index >= 2 ? "border-t border-border md:border-t-0" : "",
            index === 2 ? "md:border-l md:pl-5" : "",
          ].join(" ")}
        >
          <dt className="order-2 text-sm leading-snug text-muted">{stat.label}</dt>
          <dd className="order-1 font-display text-3xl font-bold tabular-nums leading-none text-foreground sm:text-4xl">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
