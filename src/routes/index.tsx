import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import textureAsset from "@/assets/texture-bg.png.asset.json";
import chromeAsset from "@/assets/wb/chrome__shape-1.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KARKA — Streetwear independiente" },
      { name: "description", content: "KARKA. Streetwear independiente. Prendas definidas por su diseño, sus proporciones y sus detalles." },
      { property: "og:title", content: "KARKA — Streetwear independiente" },
      { property: "og:description", content: "Streetwear independiente. Cada detalle cuenta. Descubre KARKA." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gizmostudio.lovable.app/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "KARKA — Streetwear independiente" },
      { name: "twitter:description", content: "Streetwear independiente. Cada detalle cuenta. Descubre KARKA." },
    ],
    links: [{ rel: "canonical", href: "https://gizmostudio.lovable.app/" }],
  }),
  component: Landing,
});

const textureStyle: React.CSSProperties = {
  backgroundImage: `url(${textureAsset.url})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

type Lang = "es" | "en";
type Dict = {
  brandTag: string; heroTag: string;
  heroLine1: string; heroLine2: string; heroLine3a: string; heroLine3b: string; heroLine4a: string; heroLine4b: string;
  heroSupport: string; heroCTA: string; visualLabel: string;
  introEyebrow: string; introHeadA: string; introHeadB: string; concepts: string[];
  collectionEyebrow: string; collectionHead: string; collectionLabel: string;
  designEyebrow: string; designHeadA: string; designHeadB: string; principles: { t: string; d: string }[];
  lookbookEyebrow: string; lookbookHeadA: string; lookbookHeadB: string; lookbookLabel: string;
  releaseEyebrow: string; releaseHeadA: string; releaseHeadB: string; releaseItems: string[];
  aboutEyebrow: string; aboutHeadA: string; aboutHeadB: string; aboutHand: string; aboutBody: string;
  faqEyebrow: string; faqHeadA: string; faqs: [string, string][];
  finalEyebrow: string; finalA: string; finalB: string; finalCTA: string;
  footerCopy: string; footerItems: string[]; footerNotice: string;
  navCollection: string; navLookbook: string; navAbout: string; navFAQ: string;
};

const ES: Dict = {
  brandTag: "KARKA · STREETWEAR INDEPENDIENTE", heroTag: "Cada detalle cuenta.",
  heroLine1: "DISEÑADO", heroLine2: "PARA MARCAR", heroLine3a: "LA", heroLine3b: "", heroLine4a: "", heroLine4b: "DIFERENCIA.",
  heroSupport: "Streetwear independiente. Cada detalle cuenta.", heroCTA: "DESCUBRE KARKA.", visualLabel: "Espacio visual de KARKA",
  introEyebrow: "02 / Identidad", introHeadA: "LA DIFERENCIA ESTÁ EN LOS ", introHeadB: "DETALLES.",
  concepts: ["Patronaje.", "Proporciones.", "Construcción.", "Identidad."],
  collectionEyebrow: "03 / Colección", collectionHead: "PRIMERA COLECCIÓN.", collectionLabel: "KARKA",
  designEyebrow: "04 / Diseño y construcción", designHeadA: "Diseño con ", designHeadB: "intención.",
  principles: [
    { t: "Patronaje", d: "Nuestra prioridad: explorar cómo la forma define una prenda." },
    { t: "Materiales", d: "Nuestra prioridad: pensar en textura, peso y caída." },
    { t: "Construcción", d: "Nuestra prioridad: considerar cómo encaja cada parte." },
    { t: "Detalles", d: "Nuestra prioridad: dar intención a los pequeños elementos." },
  ],
  lookbookEyebrow: "05 / Lookbook", lookbookHeadA: "El universo ", lookbookHeadB: "KARKA.", lookbookLabel: "Espacio del lookbook KARKA",
  releaseEyebrow: "06 / Próximos lanzamientos", releaseHeadA: "ESTO SOLO ES EL ", releaseHeadB: "PRINCIPIO.",
  releaseItems: ["Estamos preparando la primera colección.", "Compartiremos los detalles antes del lanzamiento.", "La disponibilidad se anunciará cuando esté confirmada."],
  aboutEyebrow: "07 / Nosotros", aboutHeadA: "Esto es ", aboutHeadB: "KARKA.", aboutHand: "Diseño. Proporciones. Detalles.",
  aboutBody: "KARKA es una marca independiente de streetwear que nace de una idea sencilla: crear prendas reconocibles por su diseño, sus proporciones y sus detalles.",
  faqEyebrow: "08 / Preguntas", faqHeadA: "Preguntas frecuentes.",
  faqs: [
    ["¿Cómo elijo mi talla?", "La guía de tallas y las medidas confirmadas estarán disponibles antes del lanzamiento."],
    ["¿Cuándo estará disponible la colección?", "La disponibilidad confirmada se comunicará antes del lanzamiento. Aún no hay una fecha anunciada."],
    ["¿A dónde enviáis?", "Los destinos, costes y plazos de envío confirmados estarán disponibles antes del lanzamiento."],
    ["¿Cómo funcionarán las devoluciones?", "Las condiciones confirmadas de cambios y devoluciones estarán disponibles antes del lanzamiento."],
  ],
  finalEyebrow: "KARKA", finalA: "ESTO ES ", finalB: "KARKA.", finalCTA: "DESCUBRE KARKA.",
  footerCopy: "Streetwear independiente.", footerItems: ["Contacto", "Redes sociales", "Información legal"], footerNotice: "Información confirmada antes del lanzamiento.",
  navCollection: "Colección", navLookbook: "Lookbook", navAbout: "Nosotros", navFAQ: "FAQ",
};

const EN: Dict = {
  brandTag: "KARKA · INDEPENDENT STREETWEAR", heroTag: "Every detail matters.",
  heroLine1: "DESIGNED", heroLine2: "TO MAKE", heroLine3a: "A", heroLine3b: "", heroLine4a: "", heroLine4b: "DIFFERENCE.",
  heroSupport: "Independent streetwear. Every detail matters.", heroCTA: "DISCOVER KARKA.", visualLabel: "KARKA visual space",
  introEyebrow: "02 / Identity", introHeadA: "THE DIFFERENCE IS IN THE ", introHeadB: "DETAILS.",
  concepts: ["Fit.", "Proportions.", "Construction.", "Identity."],
  collectionEyebrow: "03 / Collection", collectionHead: "FIRST COLLECTION.", collectionLabel: "KARKA",
  designEyebrow: "04 / Design and construction", designHeadA: "Design with ", designHeadB: "intention.",
  principles: [
    { t: "Fit", d: "Our priority: exploring how shape defines a garment." },
    { t: "Materials", d: "Our priority: considering texture, weight and drape." },
    { t: "Construction", d: "Our priority: thinking about how each part comes together." },
    { t: "Details", d: "Our priority: giving the small elements intention." },
  ],
  lookbookEyebrow: "05 / Lookbook", lookbookHeadA: "The world of ", lookbookHeadB: "KARKA.", lookbookLabel: "KARKA lookbook space",
  releaseEyebrow: "06 / Upcoming releases", releaseHeadA: "THIS IS JUST THE ", releaseHeadB: "BEGINNING.",
  releaseItems: ["We are preparing the first collection.", "We will share the details before launch.", "Availability will be announced once confirmed."],
  aboutEyebrow: "07 / About", aboutHeadA: "This is ", aboutHeadB: "KARKA.", aboutHand: "Design. Proportions. Details.",
  aboutBody: "KARKA is an independent streetwear brand built around a simple idea: creating garments defined by their design, proportions and details.",
  faqEyebrow: "08 / Questions", faqHeadA: "Frequently asked.",
  faqs: [
    ["How do I choose my size?", "The confirmed size guide and measurements will be available before launch."],
    ["When will the collection be available?", "Confirmed availability will be shared before launch. No release date has been announced yet."],
    ["Where will you ship?", "Confirmed shipping destinations, costs and delivery times will be available before launch."],
    ["How will returns work?", "Confirmed exchange and return conditions will be available before launch."],
  ],
  finalEyebrow: "KARKA", finalA: "THIS IS ", finalB: "KARKA.", finalCTA: "DISCOVER KARKA.",
  footerCopy: "Independent streetwear.", footerItems: ["Contact", "Social", "Legal information"], footerNotice: "Confirmed information before launch.",
  navCollection: "Collection", navLookbook: "Lookbook", navAbout: "About", navFAQ: "FAQ",
};
const DICTS: Record<Lang, Dict> = { es: ES, en: EN };

/* ---------- helpers ---------- */

function Placeholder({ label, className = "", ratio = "aspect-[4/5]", rotate = 0, decoration = false }: {
  label: string;
  className?: string;
  ratio?: string;
  rotate?: number;
  decoration?: boolean;
}) {
  return (
    <div
      role={decoration ? undefined : "img"}
      aria-label={decoration ? undefined : label}
      data-visual-placeholder={decoration ? undefined : "true"}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      className={`relative overflow-hidden rounded-2xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] ${ratio} bg-bone text-ink-3 ${className}`}
    >
      {decoration && <img src={chromeAsset.url} alt="" className="absolute inset-0 h-full w-full object-cover" />}
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-70 flex items-center gap-2">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-secondary" />
      {children}
    </div>
  );
}

function Brand({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`brand ${className}`}>{children}</span>;
}

/* ---------- language gate ---------- */
function LanguageGate({ onPick }: { onPick: (l: Lang) => void }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-ink/70 backdrop-blur-md px-4">
      <div className="paper-surface relative w-full max-w-md rounded-3xl border-2 border-[var(--ink)] bg-[var(--cream)] p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]" style={textureStyle}>
        <div className="flex items-center gap-3">

          <Brand className="text-xl">KARKA</Brand>
        </div>
        <p className="mono mt-6 text-[10px] uppercase tracking-[0.22em] opacity-70">Bienvenido · Welcome</p>
        <h2 className="headline mt-3 text-4xl">Elige tu idioma / Choose language</h2>
        <div className="mt-8 grid grid-cols-2 gap-3">
          <button
            onClick={() => onPick("es")}
            className="btn-glow group relative rounded-2xl border-2 border-[var(--ink)] bg-[var(--ink)] px-5 py-5 text-left text-[var(--cream)]"
          >
            <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">Recomendado</span>
            <div className="mt-2 text-3xl font-black">ES</div>
            <div className="mono text-[10px] uppercase tracking-[0.18em] opacity-70">Castellano</div>
          </button>
          <button
            onClick={() => onPick("en")}
            className="btn-glow rounded-2xl border-2 border-[var(--ink)] bg-cream px-5 py-5 text-left text-[var(--ink)]"
          >
            <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">&nbsp;</span>
            <div className="mt-2 text-3xl font-black">EN</div>
            <div className="mono text-[10px] uppercase tracking-[0.18em] opacity-70">English</div>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- page ---------- */
function Landing() {
  const [lang, setLang] = useState<Lang | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("karka-lang") as Lang | null;
      if (stored === "es" || stored === "en") setLang(stored);
    } catch {}
  }, []);

  const t = DICTS[lang ?? "es"];

  useEffect(() => { document.documentElement.lang = lang ?? "es"; }, [lang]);

  const setLanguage = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem("karka-lang", l); } catch {}
  };

  return (
    <div id="top" className="min-h-screen bg-[var(--cream)] text-[var(--ink)] font-[family-name:var(--font-display)]">
      {lang === null && <LanguageGate onPick={setLanguage} />}

      {/* Sticky top header / countdown bar */}
      <div className="sticky top-0 z-50 px-3 pt-3">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 rounded-full bg-[var(--ink)] px-3 py-1.5 text-[var(--cream)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]">
          <a href="#top" className="btn-glow flex items-center gap-2 rounded-full pl-1 pr-3 py-1">

            <Brand className="text-base tracking-tight">KARKA</Brand>
          </a>
          <div className="flex items-center gap-2">
            {/* lang switcher */}
            <div className="flex items-center rounded-full bg-cream/10 p-0.5 text-[10px] mono uppercase tracking-[0.18em]">
              {(["es", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`btn-glow rounded-full px-2 py-1 ${
                    (lang ?? "es") === l ? "bg-[var(--accent)] text-cream" : "text-[var(--cream)]/70"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#collection"
              className="btn-glow rounded-full bg-[var(--accent)] px-3 sm:px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-cream"
            >
              {t.navCollection}
            </a>

          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="paper-surface relative overflow-hidden" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 pt-10 sm:px-6">
          <div className="flex items-center justify-between">
            <Eyebrow><Brand>{t.brandTag}</Brand></Eyebrow>
            <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 hidden sm:inline">
              {t.heroTag}
            </span>
          </div>

          <div className="grid gap-10 pb-24 pt-10 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-8 relative">
              <div className="hidden lg:block absolute -left-6 top-24 w-40">
                <Placeholder label={t.visualLabel} ratio="aspect-[3/4]" rotate={-6} />
              </div>
              <div className="hidden lg:block absolute -right-10 -top-2 w-36">
                <Placeholder label="" decoration ratio="aspect-square" rotate={8} />
              </div>

              <h1 className="headline text-[14vw] sm:text-[11vw] lg:text-[9.2vw]">
                <span className="block">{t.heroLine1}</span>
                <span className="block">{t.heroLine2}</span>
                <span className="block">
                  <span className="text-[var(--accent)]">{t.heroLine3a}</span>{t.heroLine3b}
                </span>
                <span className="block">{t.heroLine4a}<span className="text-[var(--accent)]">{t.heroLine4b}</span></span>
              </h1>

              <div className="mt-6 flex items-start gap-3">
                <svg width="36" height="36" viewBox="0 0 36 36" className="mt-1 shrink-0 text-accent-secondary" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 24 Q14 6, 22 16 T34 14" />
                  <path d="M28 10 L34 14 L30 20" />
                </svg>
                <p className="hand text-4xl sm:text-5xl text-[var(--ink-2)] leading-tight">
                  {t.heroSupport}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#collection"
                  className="btn-glow group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-cream shadow-[0_8px_0_0_var(--ink)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--ink)]"
                >
                  {t.heroCTA}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <aside className="lg:col-span-4 grid grid-cols-2 gap-3 content-start">
              <div className="col-span-2">
                <Placeholder label={t.visualLabel} ratio="aspect-[4/5]" />
              </div>
              <Placeholder label={t.visualLabel} ratio="aspect-square" rotate={-3} />
              <Placeholder label={t.visualLabel} ratio="aspect-square" rotate={3} />
              <p className="col-span-2 mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                <Brand>{t.brandTag}</Brand>
              </p>
            </aside>
          </div>

          <div className="overflow-hidden border-y border-[var(--ink)]/15 py-3">
            <div className="marquee-track-fast">
              {Array.from({ length: 2 }).flatMap((_, k) =>
                Array.from({ length: 6 }).map(
                  (_, i) => (
                    <div key={`${k}-${i}`} className="flex items-center gap-3">
                      <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                        KARKA
                      </span>
                      <Placeholder label={t.visualLabel} ratio="aspect-[4/3]" className="h-16 w-24 shadow-none" />
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
          <Eyebrow>{t.introEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-5xl text-5xl sm:text-7xl lg:text-8xl">
            {t.introHeadA}<span className="text-[var(--accent)]">{t.introHeadB}</span>
          </h2>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.concepts.map((b, i) => (
              <li key={b} className="border-t border-[var(--line-dark)] pt-6">
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  0{i + 1}
                </span>
                <p className="mt-2 text-2xl font-bold">{b}</p>
              </li>
            ))}
          </ul>
          <p className="hand mt-16 max-w-3xl text-5xl text-[var(--cream)]/85 leading-tight">
            {t.heroSupport}
          </p>
        </div>
      </section>

      {/* Capability grid */}
      <section id="collection" className="paper-surface py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>{t.collectionEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">{t.collectionHead}</h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="btn-glow group relative overflow-hidden rounded-2xl">
                <Placeholder label={t.visualLabel} ratio="aspect-square" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/80 p-3 text-cream">
                  <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                    0{i + 1}
                  </span>
                  <span className="font-bold text-lg">{t.collectionLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four moves */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>{t.designEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">
            {t.designHeadA}<span className="text-[var(--accent)]">{t.designHeadB}</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.principles.map((mv, i) => (
              <div
                key={mv.t}
                className="btn-glow rounded-2xl border border-[var(--line-dark)] p-6 transition-transform hover:-translate-y-1"
              >
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-3xl font-black tracking-tight">{mv.t}</h3>
                <p className="mt-3 text-sm opacity-80">{mv.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member work */}
      <section id="lookbook" className="paper-surface py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>{t.lookbookEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">
            {t.lookbookHeadA}<span className="text-[var(--accent)]">{t.lookbookHeadB}</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <Placeholder
                key={`motion-${i}`}

                label={`${t.memberLabel} $KARKA`}
                ratio={i === 0 ? "aspect-[3/4]" : "aspect-square"}
               
               
              />
            ))}
            {Array.from({ length: 9 }).map((_, i) => (

              <Placeholder
                key={`still-${i}`}

                label={t.lookbookLabel}
                ratio={i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}
               
               
              />
            ))}
          </div>
        </div>
      </section>

      {/* Membership Club */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Placeholder label={t.visualLabel} ratio="aspect-square" />
            <div className="mt-3">
              <Placeholder label={t.visualLabel} ratio="aspect-square" />
            </div>

          </div>
          <div className="lg:col-span-7">
            <Eyebrow>{t.releaseEyebrow}</Eyebrow>
            <h2 className="headline mt-6 text-5xl sm:text-7xl">
              {t.releaseHeadA}<span className="text-[var(--accent)]">{t.releaseHeadB}</span>
            </h2>
            <ul className="mt-10 space-y-4 text-lg">
              {t.releaseItems.map((x) => (
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
      <section id="about" className="paper-surface py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <Placeholder label={t.visualLabel} ratio="aspect-[4/5]" />
          </div>
          <div className="lg:col-span-7">
            <Eyebrow><Brand>{t.aboutEyebrow}</Brand></Eyebrow>
            <h2 className="headline mt-6 text-4xl sm:text-6xl">
              {t.aboutHeadA}<Brand className="text-[var(--accent)]">{t.aboutHeadB}</Brand>
            </h2>
            <p className="hand mt-6 text-4xl text-[var(--ink-2)] leading-tight">{t.aboutHand}</p>
            <p className="mt-6 text-lg leading-relaxed opacity-80">{t.aboutBody}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6">
          <Eyebrow>{t.faqEyebrow}</Eyebrow>
          <h2 className="headline mt-6 text-5xl sm:text-7xl">{t.faqHeadA}</h2>
          <Accordion type="single" collapsible className="mt-10">
            {t.faqs.map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-[var(--line-dark)]">
                <AccordionTrigger className="btn-glow rounded-lg px-2 text-2xl font-bold py-6 hover:no-underline">
                  <span className="flex gap-4"><span className="text-[var(--accent)]">?</span>{q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-base opacity-80 pb-6 px-2">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="paper-surface py-32 text-center" style={textureStyle}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <Eyebrow><Brand>{t.finalEyebrow}</Brand></Eyebrow>
          <h2 className="headline mt-6 text-6xl sm:text-8xl">
            {t.finalA}<span className="text-[var(--accent)]">{t.finalB}</span>
          </h2>
          <a
            href="#collection"
            className="btn-glow mt-12 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[var(--cream)] shadow-[0_10px_0_0_var(--accent)] hover:translate-y-[2px] hover:shadow-[0_5px_0_0_var(--accent)]"
          >
            <Brand className="text-base">{t.finalCTA}</Brand>
          </a>
          <p className="hand mt-6 text-3xl text-[var(--ink-3)]">
            {t.heroSupport}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="paper-surface border-t border-[var(--ink)]/15 py-12 bg-[var(--cream)]" style={textureStyle}>
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 pb-20">
          <div className="flex items-center gap-3">

            <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
              <Brand className="mr-2 text-sm tracking-normal opacity-100">KARKA</Brand>· {t.footerCopy}
            </span>
          </div>
          <div className="flex flex-wrap gap-5 text-[11px] uppercase tracking-[0.22em] opacity-70">
            {t.footerItems.map(item => <span key={item}>{item}</span>)}
            <span className="w-full mono text-[10px]">{t.footerNotice}</span>
          </div>
        </div>
      </footer>

      {/* Floating bottom nav pill */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-[var(--line-dark)] bg-[var(--ink)]/95 p-1.5 text-[var(--cream)] shadow-2xl backdrop-blur">
          <Brand className="px-3 py-2 text-base text-[var(--accent)]">KARKA</Brand>
          {[
            [t.navCollection, "#collection"],
            [t.navLookbook, "#lookbook"],
            [t.navAbout, "#about"],
            [t.navFAQ, "#faq"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="btn-glow secondary-glow rounded-full px-1 sm:px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] hover:bg-cream/10"
            >
              {l}
            </a>
          ))}

        </div>
      </div>
    </div>
  );
}
