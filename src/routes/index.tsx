import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Waviboy Academy — From zero to paid brand work in 60 days" },
      {
        name: "description",
        content:
          "Become the AI creative director brands hire. Taste, tools, automation and monetisation in one membership.",
      },
    ],
  }),
  component: Landing,
});

/* ---------- helpers ---------- */

function Placeholder({
  label,
  className = "",
  tone = "ink",
  ratio = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  tone?: "ink" | "cream" | "accent";
  ratio?: string;
}) {
  const bg =
    tone === "ink"
      ? "bg-[oklch(0.22_0.01_60)] text-[oklch(0.85_0.02_80)]"
      : tone === "accent"
        ? "bg-[var(--accent)] text-[var(--ink)]"
        : "bg-[var(--bone)] text-[var(--ink-3)]";
  return (
    <div
      data-replace={`image:${label}`}
      className={`relative overflow-hidden rounded-md ${ratio} ${bg} ${className}`}
    >
      <div className="absolute inset-0 grid place-items-center">
        <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
          {label}
        </span>
      </div>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 70%, white 0, transparent 35%)",
        }}
      />
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow opacity-70">{children}</div>;
}

/* ---------- countdown ---------- */
function useCountdown() {
  const target = +new Date(Date.now() + 1000 * 60 * 60 * 47 + 1000 * 60 * 12);
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
  return `${pad(h)}:${pad(m)}:${pad(s)}`;
}

/* ---------- page ---------- */

function Landing() {
  const t = useCountdown();
  const [plan, setPlan] = useState<"full" | "split">("full");

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)]">
      {/* Sticky top countdown */}
      <div className="sticky top-0 z-50 bg-[var(--ink)] text-[var(--cream)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-4 py-2 text-[11px] sm:px-6">
          <span className="mono uppercase tracking-[0.22em] opacity-80">
            Founding price ends in
          </span>
          <span className="mono text-[13px] tabular-nums">{t}</span>
          <a
            href="#pricing"
            className="mono uppercase tracking-[0.22em] text-[var(--accent)] hover:underline"
          >
            Lock in →
          </a>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-4 pt-6 sm:px-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="spin-slow grid h-10 w-10 place-items-center rounded-full bg-[var(--ink)] text-[var(--cream)]">
                <span className="serif text-lg">W</span>
              </div>
              <span className="mono text-[11px] uppercase tracking-[0.22em]">
                Waviboy / Academy
              </span>
            </div>
            <a
              href="#pricing"
              className="hidden rounded-full border border-[var(--ink)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] hover:bg-[var(--ink)] hover:text-[var(--cream)] sm:inline-block"
            >
              Lock in price →
            </a>
          </nav>

          {/* Made with AI marquee */}
          <div className="mt-10 overflow-hidden border-y border-[var(--line)] py-3">
            <div className="marquee-track-fast">
              {Array.from({ length: 2 }).flatMap((_, k) =>
                ["campaign 01", "still 02", "model 03", "product 04", "editorial 05", "fashion 06"].map(
                  (l, i) => (
                    <div key={`${k}-${i}`} className="flex items-center gap-3">
                      <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                        Made with AI
                      </span>
                      <Placeholder label={l} ratio="aspect-[4/3]" className="h-16 w-24" />
                    </div>
                  ),
                ),
              )}
            </div>
          </div>

          <div className="grid gap-10 pb-20 pt-14 lg:grid-cols-12">
            <div className="lg:col-span-9">
              <Eyebrow>01 — Founding cohort • 2026</Eyebrow>
              <h1 className="headline mt-6 text-[14vw] leading-[0.9] sm:text-[10vw] lg:text-[8.4vw]">
                From zero to your{" "}
                <span className="serif italic text-[var(--accent)]">first paid</span>{" "}
                brand client with AI.
                <br />
                In <span className="serif italic">60 days.</span> Then scale to{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">$10K/mo.</span>
                  <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[var(--accent)]/70" />
                </span>
              </h1>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#pricing"
                  className="group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--ink)] shadow-[0_8px_0_0_var(--ink)] transition-transform hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--ink)]"
                >
                  Lock in price
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <span className="serif italic text-[var(--ink-3)]">
                  trusted by 2,400+ creators
                </span>
              </div>
            </div>

            <aside className="lg:col-span-3">
              <Placeholder label="Hero portrait" ratio="aspect-[3/4]" />
              <p className="mono mt-3 text-[10px] uppercase tracking-[0.22em] opacity-60">
                Founded 2024 — the AI creative direction company
              </p>
            </aside>
          </div>
        </div>
      </header>

      {/* SECTION — barriers gone */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>02 / The barriers are gone</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">
            You don't need a studio, a camera, a team — or permission.
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "No film school",
              "No expensive gear",
              "No agency contacts",
              "No 10-year career",
            ].map((b, i) => (
              <li
                key={b}
                className="border-t border-[var(--line-dark)] pt-6"
              >
                <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-50">
                  0{i + 1}
                </span>
                <p className="serif mt-2 text-2xl">{b}</p>
              </li>
            ))}
          </ul>
          <p className="serif mt-12 max-w-3xl text-3xl italic opacity-80">
            The only thing left is taste — and the willingness to ship.
          </p>
        </div>
      </section>

      {/* Capability grid */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>03 / What you'll be able to make</Eyebrow>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
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
              <div
                key={c}
                className="group relative overflow-hidden rounded-md"
              >
                <Placeholder label={c} ratio="aspect-square" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-3 text-[var(--cream)]">
                  <span className="mono text-[10px] uppercase tracking-[0.22em]">
                    0{i + 1}
                  </span>
                  <span className="serif text-lg">{c}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[var(--bone)] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>04 / Direction vs decoration</Eyebrow>
          <h2 className="headline mt-6 max-w-3xl text-5xl sm:text-6xl">
            What <em className="serif italic">not</em> to do — and what actually sells.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-8">
              <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--ink-3)]">
                Most creators
              </span>
              <ul className="mt-4 space-y-3 text-lg">
                {[
                  "Random AI images with no thesis",
                  "Imitating viral style of the week",
                  "Selling prompts, not outcomes",
                  "No system, no client, no income",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-[var(--accent)]">✕</span>
                    <span className="line-through opacity-70">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-[var(--ink)] p-8 text-[var(--cream)]">
              <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                What brands pay for
              </span>
              <ul className="mt-4 space-y-3 text-lg">
                {[
                  "A point of view brands recognise",
                  "Campaign-grade work, not single posts",
                  "Repeatable systems, not one-offs",
                  "Retainers, not freelance scraps",
                ].map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-[var(--accent)]">→</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by marquee */}
      <section className="border-y border-[var(--line)] py-10">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>Trusted by teams at</Eyebrow>
          <div className="mt-6 overflow-hidden">
            <div className="marquee-track items-center">
              {Array.from({ length: 2 }).flatMap((_, k) =>
                Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`${k}-${i}`}
                    className="grid h-10 w-32 place-items-center rounded border border-[var(--line)] bg-[var(--bone)]"
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

      {/* Four moves */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>05 / The method</Eyebrow>
          <h2 className="headline mt-6 max-w-3xl text-5xl sm:text-6xl">
            Four moves. Zero to paid work.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Taste", d: "Build a point of view brands recognise on sight." },
              { n: "02", t: "Tools", d: "Master the AI stack that produces brand-grade output." },
              { n: "03", t: "Automation", d: "Turn one idea into a full campaign in an afternoon." },
              { n: "04", t: "Monetise", d: "Package it as an offer brands actually pay for." },
            ].map((m) => (
              <div
                key={m.n}
                className="rounded-2xl border border-[var(--line)] bg-[var(--cream)] p-6 transition-transform hover:-translate-y-1"
              >
                <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                  {m.n}
                </span>
                <h3 className="serif mt-3 text-3xl">{m.t}</h3>
                <p className="mt-3 text-sm opacity-80">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member work */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>06 / Member work</Eyebrow>
          <h2 className="headline mt-6 max-w-3xl text-5xl sm:text-6xl">
            Proof that people are <span className="serif italic text-[var(--accent)]">building this.</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Placeholder
                key={i}
                label={`Member ${i + 1}`}
                ratio={i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>07 / What members say</Eyebrow>
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
                className="rounded-2xl border border-[var(--line)] bg-[var(--bone)] p-6"
              >
                <blockquote className="serif text-2xl leading-snug">"{q}"</blockquote>
                <figcaption className="mono mt-4 text-[10px] uppercase tracking-[0.22em] opacity-60">
                  Member {i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-[var(--bone)] py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>08 / Curriculum</Eyebrow>
          <h2 className="headline mt-6 max-w-3xl text-5xl sm:text-6xl">
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
            ].map((m, i) => (
              <li
                key={m}
                className="rounded-xl border border-[var(--line)] bg-[var(--cream)] p-5"
              >
                <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                  Module 0{i + 1}
                </span>
                <p className="serif mt-2 text-2xl">{m}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <div className="text-center">
            <Eyebrow>09 / Pricing</Eyebrow>
            <h2 className="headline mt-6 text-5xl sm:text-7xl">
              Lock in the <span className="serif italic text-[var(--accent)]">founding</span> price.
            </h2>
          </div>

          <div className="mx-auto mt-10 inline-flex w-full justify-center">
            <div className="inline-flex rounded-full border border-[var(--line)] bg-[var(--bone)] p-1">
              {(["full", "split"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPlan(p)}
                  className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.18em] transition-colors ${
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

          <div className="mt-10 rounded-3xl border border-[var(--line)] bg-[var(--cream)] p-10 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.3)]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                  Waviboy Academy — Founding access
                </span>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="serif text-7xl">
                    {plan === "full" ? "$399" : "$219"}
                  </span>
                  <span className="serif text-xl opacity-60">
                    {plan === "full" ? "one-time" : "× 4 monthly"}
                  </span>
                </div>
                <p className="mt-2 serif italic text-[var(--ink-3)]">
                  Was <span className="line-through">$997</span> — founding cohort only.
                </p>
              </div>
              <a
                href="#"
                data-replace="link:stripe-checkout"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 text-sm uppercase tracking-[0.18em] shadow-[0_8px_0_0_var(--ink)] transition-transform hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--ink)]"
              >
                Start now →
              </a>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-[var(--line)] pt-8 sm:grid-cols-2">
              {[
                "9 core modules + 6 bonus drops",
                "Private community + leaderboard",
                "Weekly live calls with Waviboy",
                "Templates, prompts, automation kits",
                "First-client placement program",
                "Lifetime updates",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="text-[var(--accent)]">✓</span>
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
          <Eyebrow>10 / Questions</Eyebrow>
          <h2 className="headline mt-6 text-5xl sm:text-6xl">
            Frequently <span className="serif italic">asked.</span>
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {[
              ["Do I need experience?", "No — the curriculum starts from zero and ramps to client-ready output."],
              ["How long is access?", "Lifetime access plus all future updates."],
              ["What tools do I need?", "A laptop and a couple of paid AI tools — full stack covered inside."],
              ["Is there a refund?", "14-day refund window, no questions asked."],
              ["When do calls happen?", "Weekly, with replays available across time zones."],
              ["Will it stay this price?", "No — founding price ends when the cohort fills."],
            ].map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-[var(--line-dark)]">
                <AccordionTrigger className="serif text-2xl">{q}</AccordionTrigger>
                <AccordionContent className="text-base opacity-80">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <h2 className="headline text-6xl sm:text-8xl">
            Your first paid client is{" "}
            <span className="serif italic text-[var(--accent)]">already in the building.</span>
          </h2>
          <a
            href="#pricing"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-10 py-5 text-sm uppercase tracking-[0.2em] text-[var(--cream)] shadow-[0_10px_0_0_var(--accent)] transition-transform hover:translate-y-[2px] hover:shadow-[0_5px_0_0_var(--accent)]"
          >
            Lock in $797 →
          </a>
          <p className="serif mt-6 italic text-[var(--ink-3)]">
            <span className="line-through">$997</span> — founding cohort only.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--line)] py-12">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--ink)] text-[var(--cream)]">
              <span className="serif">W</span>
            </div>
            <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
              © Waviboy Academy
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
          {[
            ["Method", "#"],
            ["Work", "#"],
            ["FAQ", "#"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] hover:bg-white/10"
            >
              {l}
            </a>
          ))}
          <a
            href="#pricing"
            className="ml-1 rounded-full bg-[var(--accent)] px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--ink)]"
          >
            Lock in →
          </a>
        </div>
      </div>
    </div>
  );
}
