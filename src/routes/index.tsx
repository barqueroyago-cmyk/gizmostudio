import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import textureAsset from "@/assets/texture-bg.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GIZMO STUDIO — AI Creative Direction & Visual Systems" },
      {
        name: "description",
        content:
          "From zero to your first paid brand client with AI. By GIZMO STUDIO.",
      },
    ],
  }),
  component: Landing,
});

const TEXTURE_URL = textureAsset.url;
const textureStyle: React.CSSProperties = {
  backgroundImage: `url(${TEXTURE_URL})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

/* ---------- helpers ---------- */

function Placeholder({
  label,
  className = "",
  tone = "ink",
  ratio = "aspect-[4/5]",
  rotate = 0,
}: {
  label: string;
  className?: string;
  tone?: "ink" | "cream" | "accent" | "chrome";
  ratio?: string;
  rotate?: number;
}) {
  const bg =
    tone === "ink"
      ? "bg-[oklch(0.22_0.01_60)] text-[oklch(0.85_0.02_80)]"
      : tone === "accent"
        ? "bg-[var(--accent)] text-white"
        : tone === "chrome"
          ? "bg-gradient-to-br from-[#c7d4ff] via-[#e9eefc] to-[#7e9aff] text-[var(--ink)]"
          : "bg-[var(--bone)] text-[var(--ink-3)]";
  return (
    <div
      data-replace={`image:${label}`}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      className={`relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ${ratio} ${bg} ${className}`}
    >
      <div className="absolute inset-0 grid place-items-center">
        <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
          {label}
        </span>
      </div>
      <span className="absolute left-2 top-2 mono text-[9px] uppercase tracking-[0.22em] bg-white/80 text-[var(--ink)] px-1.5 py-0.5 rounded">
        MADE WITH AI
      </span>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-70 flex items-center gap-2">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
      {children}
    </div>
  );
}

/* ---------- countdown ---------- */
function useCountdown() {
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 47 + 1000 * 60 * 12);
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, target - now);
  const h = Math.floor(diff / 3.6e6);
  const m = Math.floor((diff % 3.6e6) / 6e4);
  const s = Math.floor((diff % 6e4) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return { h: pad(h), m: pad(m), s: pad(s) };
}

/* ---------- page ---------- */

function Landing() {
  const { h, m, s } = useCountdown();
  const [plan, setPlan] = useState<"full" | "split">("full");

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)] font-[family-name:var(--font-display)]">
      {/* Sticky top header / countdown bar */}
      <div className="sticky top-0 z-50 px-3 pt-3">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 rounded-full bg-[var(--ink)] px-4 py-2 text-[var(--cream)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[var(--accent)] text-white text-[10px] font-black">G</span>
            <span className="hidden sm:inline font-black tracking-tight text-sm">GIZMO STUDIO</span>
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden md:inline mono uppercase tracking-[0.18em] opacity-70">
              Founding price locks in
            </span>
            <span className="mono tabular-nums text-[var(--accent)] font-bold text-[13px]">
              {h}:{m}:{s}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#pricing"
              className="rounded-full bg-[var(--accent)] px-3 sm:px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white hover:brightness-110 transition"
            >
              Join now →
            </a>
            <a href="#" className="hidden sm:inline mono text-[10px] uppercase tracking-[0.22em] opacity-70 hover:opacity-100">
              Log in
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 pt-10 sm:px-6">
          <div className="flex items-center justify-between">
            <Eyebrow>BY GIZMO STUDIO · EST. 2024</Eyebrow>
            <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 hidden sm:inline">
              AI Creative Direction &amp; Visual Systems
            </span>
          </div>

          <div className="grid gap-10 pb-24 pt-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-8 relative">
              {/* floating decorative cards (desktop) */}
              <div className="hidden lg:block absolute -left-6 top-24 w-40">
                <Placeholder label="campaign 01" ratio="aspect-[3/4]" tone="ink" rotate={-6} />
              </div>
              <div className="hidden lg:block absolute -right-10 -top-2 w-36">
                <Placeholder label="chrome 02" ratio="aspect-square" tone="chrome" rotate={8} />
              </div>

              <h1 className="font-black tracking-[-0.045em] leading-[0.88] text-[14vw] sm:text-[11vw] lg:text-[9.2vw] uppercase">
                <span className="block">From zero</span>
                <span className="block">to your first</span>
                <span className="block">
                  <span className="text-[var(--accent)]">paid</span> brand
                </span>
                <span className="block">client with <span className="text-[var(--accent)]">AI.</span></span>
              </h1>

              <div className="mt-6 flex items-start gap-3">
                <svg width="36" height="36" viewBox="0 0 36 36" className="mt-1 shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 24 Q14 6, 22 16 T34 14" />
                  <path d="M28 10 L34 14 L30 20" />
                </svg>
                <p className="hand text-3xl sm:text-4xl text-[var(--ink-2)]">
                  in <span className="text-[var(--accent)] underline decoration-[var(--accent)] decoration-2 underline-offset-4">60 days.</span> then scale to <span className="text-[var(--accent)]">$10K/mo.</span>
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_0_0_var(--ink)] transition-transform hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--ink)]"
                >
                  Lock in founding price
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <span className="hand text-2xl text-[var(--ink-3)]">
                  trusted by 2,400+ creators
                </span>
              </div>
            </div>

            <aside className="lg:col-span-4 grid grid-cols-2 gap-3 content-start">
              <div className="col-span-2">
                <Placeholder label="Hero portrait" ratio="aspect-[4/5]" tone="ink" />
              </div>
              <Placeholder label="still 03" ratio="aspect-square" tone="chrome" rotate={-3} />
              <Placeholder label="editorial 04" ratio="aspect-square" tone="ink" rotate={3} />
              <p className="col-span-2 mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                BY GIZMO STUDIO — AI Creative Direction &amp; Visual Systems
              </p>
            </aside>
          </div>

          {/* Made with AI marquee */}
          <div className="overflow-hidden border-y border-[var(--ink)]/15 py-3">
            <div className="marquee-track-fast">
              {Array.from({ length: 2 }).flatMap((_, k) =>
                ["campaign 01", "still 02", "model 03", "product 04", "editorial 05", "fashion 06"].map(
                  (l, i) => (
                    <div key={`${k}-${i}`} className="flex items-center gap-3">
                      <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                        ★ Made with AI
                      </span>
                      <Placeholder label={l} ratio="aspect-[4/3]" className="h-16 w-24 shadow-none" tone="ink" />
                    </div>
                  ),
                ),
              )}
            </div>
          </div>
        </div>
      </header>

      {/* SECTION — barriers gone (BLACK) */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>02 / The barriers are gone</Eyebrow>
          <h2 className="mt-6 max-w-5xl font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl lg:text-8xl uppercase">
            You don't need a studio, a camera, a team — or <span className="text-[var(--accent)]">permission.</span>
          </h2>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "No film school",
              "No expensive gear",
              "No agency contacts",
              "No 10-year career",
            ].map((b, i) => (
              <li key={b} className="border-t border-[var(--line-dark)] pt-6">
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  0{i + 1}
                </span>
                <p className="mt-2 text-2xl font-bold">{b}</p>
              </li>
            ))}
          </ul>
          <p className="hand mt-16 max-w-3xl text-4xl text-[var(--cream)]/80">
            the only thing left is <span className="text-[var(--accent)]">taste</span> — and the willingness to ship.
          </p>
        </div>
      </section>

      {/* Capability grid */}
      <section className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>03 / What you'll make</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
            Campaign-grade work, on demand.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              "Campaign stills",
              "Product photography",
              "Editorial covers",
              "Brand films",
              "Look-books",
              "Social cut-downs",
              "Out-of-home",
              "Identity systems",
              "Pitch decks",
            ].map((c, i) => (
              <div key={c} className="group relative overflow-hidden rounded-2xl">
                <Placeholder label={c} ratio="aspect-square" tone={i % 3 === 0 ? "chrome" : "ink"} />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-3 text-white">
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    0{i + 1}
                  </span>
                  <span className="font-bold text-lg">{c}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>04 / Direction vs decoration</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
            What <span className="text-[var(--accent)]">not</span> to do — and what actually sells.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[var(--line-dark)] p-8">
              <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                Most creators
              </span>
              <ul className="mt-6 space-y-4 text-xl">
                {[
                  "Random AI images with no thesis",
                  "Imitating viral style of the week",
                  "Selling prompts, not outcomes",
                  "No system, no client, no income",
                ].map((x) => (
                  <li key={x} className="flex gap-3 items-start">
                    <span className="text-[var(--accent)] text-2xl leading-none">✕</span>
                    <span className="line-through opacity-60">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[var(--cream)] p-8 text-[var(--ink)]" style={textureStyle}>
              <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                What brands pay for
              </span>
              <ul className="mt-6 space-y-4 text-xl">
                {[
                  "A point of view brands recognise",
                  "Campaign-grade work, not single posts",
                  "Repeatable systems, not one-offs",
                  "Retainers, not freelance scraps",
                ].map((x) => (
                  <li key={x} className="flex gap-3 items-start">
                    <span className="text-[var(--accent)] font-bold">✓</span>
                    <span className="font-medium">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by marquee */}
      <section className="border-y border-[var(--ink)]/15 py-10" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>Trusted by teams at</Eyebrow>
          <div className="mt-6 overflow-hidden">
            <div className="marquee-track items-center">
              {Array.from({ length: 2 }).flatMap((_, k) =>
                Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`${k}-${i}`}
                    className="grid h-12 w-36 place-items-center rounded border border-[var(--ink)]/15 bg-white/40 backdrop-blur"
                    data-replace={`logo:placeholder-${i}`}
                  >
                    <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                      Brand {i + 1}
                    </span>
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Four moves — the GIZMO Studio method */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>05 / The GIZMO Studio method</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
            Four moves. Zero to <span className="text-[var(--accent)]">paid work.</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Taste", d: "Build a point of view brands recognise on sight." },
              { n: "02", t: "Tools", d: "Master the AI stack that produces brand-grade output." },
              { n: "03", t: "Automation", d: "Turn one idea into a full campaign in an afternoon." },
              { n: "04", t: "Monetise", d: "Package it as an offer brands actually pay for." },
            ].map((mv) => (
              <div
                key={mv.n}
                className="rounded-2xl border border-[var(--line-dark)] p-6 transition-transform hover:-translate-y-1"
              >
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  {mv.n}
                </span>
                <h3 className="mt-3 text-3xl font-black tracking-tight">{mv.t}</h3>
                <p className="mt-3 text-sm opacity-80">{mv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member work */}
      <section className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>06 / Member work</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
            Proof that people are <span className="text-[var(--accent)]">building this.</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Placeholder
                key={i}
                label={`Member ${i + 1}`}
                ratio={i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}
                tone={i % 2 ? "ink" : "chrome"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>07 / Testimonials</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
            <span className="text-[var(--accent)]">"</span>The clearest path I've seen.<span className="text-[var(--accent)]">"</span>
          </h2>
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {[
              "Booked my first $3K brand client in week 5.",
              "I went from making AI memes to a real retainer.",
              "Three brands DM'd me after my first campaign drop.",
              "The taste module alone changed how I see everything.",
              "My pitch deck closed in one call.",
              "I finally have a system, not just a vibe.",
            ].map((q, i) => (
              <figure
                key={q}
                className="rounded-2xl border border-[var(--line-dark)] p-6"
              >
                <span className="text-[var(--accent)] text-4xl leading-none">"</span>
                <blockquote className="mt-2 text-xl font-medium leading-snug">{q}</blockquote>
                <figcaption className="mono mt-4 text-[10px] uppercase tracking-[0.22em] opacity-60">
                  Member {i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>08 / Inside GIZMO STUDIO — Curriculum</Eyebrow>
          <h2 className="mt-6 max-w-4xl font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
            Nine modules. Total value <span className="line-through opacity-50">$997</span>{" "}
            <span className="text-[var(--accent)]">$797.</span>
          </h2>
          <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Foundations of AI direction",
              "Taste & visual thesis",
              "The image stack",
              "Motion & campaign films",
              "Automation pipelines",
              "Building the offer",
              "Finding clients",
              "Pitching & closing",
              "Retainers & scaling",
            ].map((mod, i) => (
              <li
                key={mod}
                className="rounded-2xl border border-[var(--ink)]/15 bg-white/50 backdrop-blur p-5"
              >
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  Module 0{i + 1}
                </span>
                <p className="mt-2 text-2xl font-bold">{mod}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Membership Club */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Placeholder label="GIZMO Studio Membership Club" ratio="aspect-[4/5]" tone="chrome" />
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>09 / GIZMO Studio Membership Club</Eyebrow>
            <h2 className="mt-6 font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
              A private room for people <span className="text-[var(--accent)]">shipping.</span>
            </h2>
            <ul className="mt-10 space-y-4 text-lg">
              {[
                "Weekly live calls — replays included",
                "GIZMO TV — drops, breakdowns & tutorials",
                "GIZMO Bot — your AI direction co-pilot",
                "Leaderboard, swap shop, and feedback room",
              ].map((x) => (
                <li key={x} className="flex gap-3 items-start border-t border-[var(--line-dark)] pt-4">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <Placeholder label="Founder portrait" ratio="aspect-[4/5]" tone="ink" />
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>BY GIZMO STUDIO</Eyebrow>
            <h2 className="mt-6 font-black tracking-[-0.04em] leading-[0.92] text-4xl sm:text-6xl uppercase">
              Hi — we're <span className="text-[var(--accent)]">GIZMO STUDIO.</span>
            </h2>
            <p className="hand mt-6 text-3xl text-[var(--ink-2)]">
              we direct, we ship, we teach the system behind it.
            </p>
            <p className="mt-6 text-lg leading-relaxed opacity-80">
              GIZMO STUDIO is an AI creative direction practice. We build visual systems for brands and teach the method behind them inside this program.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <div className="text-center">
            <Eyebrow>10 / Pricing</Eyebrow>
            <h2 className="mt-6 font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
              Lock in the <span className="text-[var(--accent)]">founding</span> price.
            </h2>
          </div>

          <div className="mx-auto mt-10 flex w-full justify-center">
            <div className="inline-flex rounded-full border border-[var(--ink)]/20 bg-white/60 backdrop-blur p-1">
              {(["full", "split"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPlan(p)}
                  className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                    plan === p
                      ? "bg-[var(--ink)] text-[var(--cream)]"
                      : "text-[var(--ink-3)]"
                  }`}
                >
                  {p === "full" ? "Pay in full" : "4× payments"}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border-2 border-[var(--ink)] bg-white p-10 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  GIZMO STUDIO — Founding access
                </span>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-7xl font-black tracking-tight">
                    {plan === "full" ? "$399" : "$219"}
                  </span>
                  <span className="text-xl opacity-60 font-medium">
                    {plan === "full" ? "one-time" : "× 4 monthly"}
                  </span>
                </div>
                <p className="hand mt-2 text-2xl text-[var(--ink-3)]">
                  was <span className="line-through">$997</span> — founding cohort only.
                </p>
              </div>
              <a
                href="#"
                data-replace="link:stripe-checkout"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_0_0_var(--ink)] transition-transform hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--ink)]"
              >
                Start now →
              </a>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-[var(--ink)]/10 pt-8 sm:grid-cols-2">
              {[
                "9 core modules + 6 bonus drops",
                "Private community + leaderboard",
                "Weekly live calls with GIZMO STUDIO",
                "Templates, prompts, automation kits",
                "First-client placement program",
                "Lifetime updates",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="text-[var(--accent)] font-bold">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <Eyebrow>11 / Questions</Eyebrow>
          <h2 className="mt-6 font-black tracking-[-0.04em] leading-[0.92] text-5xl sm:text-7xl uppercase">
            Frequently asked<span className="text-[var(--accent)]">.</span>
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {[
              ["Do I need experience?", "No — the curriculum starts from zero and ramps to client-ready output."],
              ["How long is access?", "Lifetime access plus all future updates."],
              ["What tools do I need?", "A laptop and a couple of paid AI tools — full stack covered inside."],
              ["Is there a refund?", "14-day refund window, no questions asked."],
              ["When do calls happen?", "Weekly, with replays available across time zones."],
              ["Will it stay this price?", "No — the founding price ends when the cohort fills."],
            ].map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-[var(--line-dark)]">
                <AccordionTrigger className="text-2xl font-bold py-6 hover:no-underline">
                  <span className="flex gap-4"><span className="text-[var(--accent)]">?</span>{q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-base opacity-80 pb-6">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center" style={textureStyle}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <Eyebrow>BY GIZMO STUDIO</Eyebrow>
          <h2 className="mt-6 font-black tracking-[-0.045em] leading-[0.9] text-6xl sm:text-8xl uppercase">
            Your first paid client is{" "}
            <span className="text-[var(--accent)]">already in the building.</span>
          </h2>
          <a
            href="#pricing"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[var(--cream)] shadow-[0_10px_0_0_var(--accent)] transition-transform hover:translate-y-[2px] hover:shadow-[0_5px_0_0_var(--accent)]"
          >
            Join GIZMO STUDIO →
          </a>
          <p className="hand mt-6 text-2xl text-[var(--ink-3)]">
            <span className="line-through">$997</span> — founding cohort only.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--ink)]/15 py-12 bg-[var(--cream)]" style={textureStyle}>
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 pb-20">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--accent)] text-white">
              <span className="font-black">G</span>
            </div>
            <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
              © GIZMO STUDIO · AI Creative Direction &amp; Visual Systems
            </span>
          </div>
          <div className="flex flex-wrap gap-5 text-[11px] uppercase tracking-[0.22em] opacity-70">
            <a href="#" data-replace="link:terms">Terms</a>
            <a href="#" data-replace="link:privacy">Privacy</a>
            <a href="#" data-replace="link:refund">Refund</a>
            <a href="mailto:hello@example.com" data-replace="link:contact">Contact</a>
          </div>
        </div>
      </footer>

      {/* Floating bottom nav pill */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-[var(--line-dark)] bg-[var(--ink)]/95 p-1.5 text-[var(--cream)] shadow-2xl backdrop-blur">
          <span className="px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--accent)]">
            GIZMO
          </span>
          {[
            ["Curriculum", "#"],
            ["Work", "#"],
            ["Membership", "#"],
            ["Testimonials", "#"],
            ["Pricing", "#pricing"],
            ["FAQ", "#"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="hidden sm:inline rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] hover:bg-white/10"
            >
              {l}
            </a>
          ))}
          <a
            href="#pricing"
            className="ml-1 rounded-full bg-[var(--accent)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
          >
            Join now →
          </a>
        </div>
      </div>
    </div>
  );
}
