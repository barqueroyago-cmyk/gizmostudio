import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import textureAsset from "@/assets/texture-bg.png.asset.json";
import gzLogo from "@/assets/gz-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GIZMO STUDIO — AI Creative Direction & Visual Systems" },
      {
        name: "description",
        content:
          "From zero to your first paid brand client with AI. By GIZMO STUDIO.",
      },
      { property: "og:image", content: gzLogo.url },
      { name: "twitter:image", content: gzLogo.url },
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

/* ---------- i18n ---------- */
type Lang = "es" | "en";
type Dict = {
  brandTag: string;
  heroEyebrow: string;
  heroTag: string;
  heroLine1: string;
  heroLine2: string;
  heroLine3a: string;
  heroLine3b: string;
  heroLine4a: string;
  heroLine4b: string;
  heroHand1: string;
  heroHand2: string;
  heroHand3: string;
  ctaLockIn: string;
  trusted: string;
  byGizmoSub: string;
  madeWithAI: string;
  countdownLabel: string;
  joinNow: string;
  login: string;
  barriersEyebrow: string;
  barriersHeadA: string;
  barriersHeadB: string;
  barriers: string[];
  barriersHand1: string;
  barriersHand2: string;
  barriersHand3: string;
  capEyebrow: string;
  capHead: string;
  capItems: string[];
  cmpEyebrow: string;
  cmpHeadA: string;
  cmpHeadB: string;
  cmpHeadC: string;
  cmpMostCreators: string;
  cmpMost: string[];
  cmpBrands: string;
  cmpGood: string[];
  trustedBy: string;
  methodEyebrow: string;
  methodHeadA: string;
  methodHeadB: string;
  moves: { t: string; d: string }[];
  workEyebrow: string;
  workHeadA: string;
  workHeadB: string;
  testEyebrow: string;
  testHead: string;
  testQuotes: string[];
  memberLabel: string;
  curEyebrow: string;
  curHeadA: string;
  curHeadB: string;
  modules: string[];
  moduleLabel: string;
  clubEyebrow: string;
  clubHeadA: string;
  clubHeadB: string;
  clubItems: string[];
  founderEyebrow: string;
  founderHeadA: string;
  founderHeadB: string;
  founderHand: string;
  founderBody: string;
  pricingEyebrow: string;
  pricingHeadA: string;
  pricingHeadB: string;
  payFull: string;
  paySplit: string;
  founding: string;
  oneTime: string;
  monthly4: string;
  wasFounding: string;
  startNow: string;
  features: string[];
  faqEyebrow: string;
  faqHeadA: string;
  faqs: [string, string][];
  finalEyebrow: string;
  finalA: string;
  finalB: string;
  finalCTA: string;
  finalHand: string;
  footerCopy: string;
  navTerms: string;
  navPrivacy: string;
  navRefund: string;
  navContact: string;
  navCurriculum: string;
  navWork: string;
  navMembership: string;
  navTestimonials: string;
  navPricing: string;
  navFAQ: string;
  langWelcome: string;
  langPick: string;
  langRecommended: string;
};

const EN: Dict = {
  brandTag: "BY GIZMO STUDIO · EST. 2024",
  heroEyebrow: "AI Creative Direction & Visual Systems",
  heroTag: "AI Creative Direction & Visual Systems",
  heroLine1: "From zero",
  heroLine2: "to your first",
  heroLine3a: "paid",
  heroLine3b: " brand",
  heroLine4a: "client with ",
  heroLine4b: "AI.",
  heroHand1: "in ",
  heroHand2: "60 days.",
  heroHand3: " then scale to $10K/mo.",
  ctaLockIn: "Lock in founding price",
  trusted: "trusted by 2,400+ creators",
  byGizmoSub: "BY GIZMO STUDIO — AI Creative Direction & Visual Systems",
  madeWithAI: "★ Made with AI",
  countdownLabel: "Founding price locks in",
  joinNow: "Join now →",
  login: "Log in",
  barriersEyebrow: "02 / The barriers are gone",
  barriersHeadA: "You don't need a studio, a camera, a team — or ",
  barriersHeadB: "permission.",
  barriersHeadC: "",
  barriers: ["No film school", "No expensive gear", "No agency contacts", "No 10-year career"],
  barriersHand1: "the only thing left is ",
  barriersHand2: "taste",
  barriersHand3: " — and the willingness to ship.",
  capEyebrow: "03 / What you'll make",
  capHead: "Campaign-grade work, on demand.",
  capItems: [
    "Campaign stills",
    "Product photography",
    "Editorial covers",
    "Brand films",
    "Look-books",
    "Social cut-downs",
    "Out-of-home",
    "Identity systems",
    "Pitch decks",
  ],
  cmpEyebrow: "04 / Direction vs decoration",
  cmpHeadA: "What ",
  cmpHeadB: "not",
  cmpHeadC: " to do — and what actually sells.",
  cmpMostCreators: "Most creators",
  cmpMost: [
    "Random AI images with no thesis",
    "Imitating viral style of the week",
    "Selling prompts, not outcomes",
    "No system, no client, no income",
  ],
  cmpBrands: "What brands pay for",
  cmpGood: [
    "A point of view brands recognise",
    "Campaign-grade work, not single posts",
    "Repeatable systems, not one-offs",
    "Retainers, not freelance scraps",
  ],
  trustedBy: "Trusted by teams at",
  methodEyebrow: "05 / The GIZMO Studio method",
  methodHeadA: "Four moves. Zero to ",
  methodHeadB: "paid work.",
  moves: [
    { t: "Taste", d: "Build a point of view brands recognise on sight." },
    { t: "Tools", d: "Master the AI stack that produces brand-grade output." },
    { t: "Automation", d: "Turn one idea into a full campaign in an afternoon." },
    { t: "Monetise", d: "Package it as an offer brands actually pay for." },
  ],
  workEyebrow: "06 / Member work",
  workHeadA: "Proof that people are ",
  workHeadB: "building this.",
  testEyebrow: "07 / Testimonials",
  testHead: "The clearest path I've seen.",
  testQuotes: [
    "Booked my first $3K brand client in week 5.",
    "I went from making AI memes to a real retainer.",
    "Three brands DM'd me after my first campaign drop.",
    "The taste module alone changed how I see everything.",
    "My pitch deck closed in one call.",
    "I finally have a system, not just a vibe.",
  ],
  memberLabel: "Member",
  curEyebrow: "08 / Inside GIZMO STUDIO — Curriculum",
  curHeadA: "Nine modules. Total value ",
  curHeadB: "$797.",
  modules: [
    "Foundations of AI direction",
    "Taste & visual thesis",
    "The image stack",
    "Motion & campaign films",
    "Automation pipelines",
    "Building the offer",
    "Finding clients",
    "Pitching & closing",
    "Retainers & scaling",
  ],
  moduleLabel: "Module",
  clubEyebrow: "09 / GIZMO Studio Membership Club",
  clubHeadA: "A private room for people ",
  clubHeadB: "shipping.",
  clubItems: [
    "Weekly live calls — replays included",
    "GIZMO TV — drops, breakdowns & tutorials",
    "GIZMO Bot — your AI direction co-pilot",
    "Leaderboard, swap shop, and feedback room",
  ],
  founderEyebrow: "BY GIZMO STUDIO",
  founderHeadA: "Hi — we're ",
  founderHeadB: "GIZMO STUDIO.",
  founderHand: "we direct, we ship, we teach the system behind it.",
  founderBody:
    "GIZMO STUDIO is an AI creative direction practice. We build visual systems for brands and teach the method behind them inside this program.",
  pricingEyebrow: "10 / Pricing",
  pricingHeadA: "Lock in the ",
  pricingHeadB: "founding",
  pricingHeadC: " price.",
  payFull: "Pay in full",
  paySplit: "4× payments",
  founding: "GIZMO STUDIO — Founding access",
  oneTime: "one-time",
  monthly4: "× 4 monthly",
  wasFounding: " — founding cohort only.",
  startNow: "Start now →",
  features: [
    "9 core modules + 6 bonus drops",
    "Private community + leaderboard",
    "Weekly live calls with GIZMO STUDIO",
    "Templates, prompts, automation kits",
    "First-client placement program",
    "Lifetime updates",
  ],
  faqEyebrow: "11 / Questions",
  faqHeadA: "Frequently asked.",
  faqs: [
    ["Do I need experience?", "No — the curriculum starts from zero and ramps to client-ready output."],
    ["How long is access?", "Lifetime access plus all future updates."],
    ["What tools do I need?", "A laptop and a couple of paid AI tools — full stack covered inside."],
    ["Is there a refund?", "14-day refund window, no questions asked."],
    ["When do calls happen?", "Weekly, with replays available across time zones."],
    ["Will it stay this price?", "No — the founding price ends when the cohort fills."],
  ],
  finalEyebrow: "BY GIZMO STUDIO",
  finalA: "Your first paid client is ",
  finalB: "already in the building.",
  finalCTA: "Join GIZMO STUDIO →",
  finalHand: " — founding cohort only.",
  footerCopy: "© GIZMO STUDIO · AI Creative Direction & Visual Systems",
  navTerms: "Terms",
  navPrivacy: "Privacy",
  navRefund: "Refund",
  navContact: "Contact",
  navCurriculum: "Curriculum",
  navWork: "Work",
  navMembership: "Membership",
  navTestimonials: "Testimonials",
  navPricing: "Pricing",
  navFAQ: "FAQ",
  langWelcome: "Welcome",
  langPick: "Choose your language",
  langRecommended: "Recommended",
} as Dict;

const ES: Dict = {
  brandTag: "POR GIZMO STUDIO · DESDE 2024",
  heroEyebrow: "Dirección Creativa con IA y Sistemas Visuales",
  heroTag: "Dirección Creativa con IA y Sistemas Visuales",
  heroLine1: "De cero",
  heroLine2: "a tu primer",
  heroLine3a: "cliente",
  heroLine3b: " de marca",
  heroLine4a: "pagado con ",
  heroLine4b: "IA.",
  heroHand1: "en ",
  heroHand2: "60 días.",
  heroHand3: " luego escala a 10.000 $/mes.",
  ctaLockIn: "Asegura el precio fundador",
  trusted: "más de 2.400 creadores confían en nosotros",
  byGizmoSub: "POR GIZMO STUDIO — Dirección Creativa con IA y Sistemas Visuales",
  madeWithAI: "★ Hecho con IA",
  countdownLabel: "El precio fundador termina en",
  joinNow: "Únete ya →",
  login: "Acceder",
  barriersEyebrow: "02 / Se acabaron las barreras",
  barriersHeadA: "No necesitas estudio, cámara, equipo — ni ",
  barriersHeadB: "permiso.",
  barriersHeadC: "",
  barriers: [
    "Sin escuela de cine",
    "Sin equipo caro",
    "Sin contactos de agencia",
    "Sin 10 años de carrera",
  ],
  barriersHand1: "lo único que queda es el ",
  barriersHand2: "criterio",
  barriersHand3: " — y las ganas de publicar.",
  capEyebrow: "03 / Lo que vas a crear",
  capHead: "Trabajo de nivel campaña, cuando quieras.",
  capItems: [
    "Imágenes de campaña",
    "Fotografía de producto",
    "Portadas editoriales",
    "Películas de marca",
    "Look-books",
    "Cortes para redes",
    "Publicidad exterior",
    "Sistemas de identidad",
    "Pitch decks",
  ],
  cmpEyebrow: "04 / Dirección vs decoración",
  cmpHeadA: "Qué ",
  cmpHeadB: "no",
  cmpHeadC: " hacer — y qué sí vende de verdad.",
  cmpMostCreators: "La mayoría de creadores",
  cmpMost: [
    "Imágenes con IA sin tesis ninguna",
    "Imitando el estilo viral de la semana",
    "Venden prompts, no resultados",
    "Sin sistema, sin cliente, sin ingresos",
  ],
  cmpBrands: "Por lo que pagan las marcas",
  cmpGood: [
    "Un punto de vista que las marcas reconocen",
    "Trabajo de campaña, no posts sueltos",
    "Sistemas repetibles, no piezas únicas",
    "Iguala, no encargos sueltos",
  ],
  trustedBy: "Equipos que ya nos eligen",
  methodEyebrow: "05 / El método GIZMO Studio",
  methodHeadA: "Cuatro pasos. De cero a ",
  methodHeadB: "trabajo pagado.",
  moves: [
    { t: "Criterio", d: "Crea un punto de vista que las marcas reconozcan al instante." },
    { t: "Herramientas", d: "Domina el stack de IA que produce nivel marca." },
    { t: "Automatización", d: "Convierte una idea en una campaña entera en una tarde." },
    { t: "Monetiza", d: "Empaquétalo como una oferta por la que las marcas pagan." },
  ],
  workEyebrow: "06 / Trabajo de miembros",
  workHeadA: "La prueba de que hay gente ",
  workHeadB: "construyendo esto.",
  testEyebrow: "07 / Testimonios",
  testHead: "El camino más claro que he visto.",
  testQuotes: [
    "Cerré mi primer cliente de marca de 3.000 $ en la semana 5.",
    "Pasé de hacer memes con IA a un retainer real.",
    "Tres marcas me escribieron tras lanzar mi primera campaña.",
    "Solo el módulo de criterio me cambió la forma de ver todo.",
    "Mi pitch deck cerró en una sola llamada.",
    "Por fin tengo un sistema, no solo un rollo.",
  ],
  memberLabel: "Miembro",
  curEyebrow: "08 / Dentro de GIZMO STUDIO — Currículum",
  curHeadA: "Nueve módulos. Valor total ",
  curHeadB: "797 $.",
  modules: [
    "Fundamentos de la dirección con IA",
    "Criterio y tesis visual",
    "El stack de imagen",
    "Movimiento y películas de campaña",
    "Pipelines de automatización",
    "Construir la oferta",
    "Encontrar clientes",
    "Pitch y cierre",
    "Iguales y escalar",
  ],
  moduleLabel: "Módulo",
  clubEyebrow: "09 / Club de Miembros GIZMO Studio",
  clubHeadA: "Una sala privada para gente que ",
  clubHeadB: "publica.",
  clubItems: [
    "Llamadas en directo cada semana — con grabaciones",
    "GIZMO TV — drops, análisis y tutoriales",
    "GIZMO Bot — tu copiloto de dirección con IA",
    "Ranking, intercambio y sala de feedback",
  ],
  founderEyebrow: "POR GIZMO STUDIO",
  founderHeadA: "Hola — somos ",
  founderHeadB: "GIZMO STUDIO.",
  founderHand: "dirigimos, publicamos y enseñamos el sistema detrás.",
  founderBody:
    "GIZMO STUDIO es un estudio de dirección creativa con IA. Construimos sistemas visuales para marcas y enseñamos el método dentro de este programa.",
  pricingEyebrow: "10 / Precio",
  pricingHeadA: "Asegura el precio ",
  pricingHeadB: "fundador",
  pricingHeadC: ".",
  payFull: "Pago único",
  paySplit: "4 pagos",
  founding: "GIZMO STUDIO — Acceso fundador",
  oneTime: "pago único",
  monthly4: "× 4 mensuales",
  wasFounding: " — solo cohorte fundadora.",
  startNow: "Empieza ya →",
  features: [
    "9 módulos principales + 6 drops extra",
    "Comunidad privada + ranking",
    "Llamadas en directo cada semana con GIZMO STUDIO",
    "Plantillas, prompts y kits de automatización",
    "Programa para conseguir el primer cliente",
    "Actualizaciones de por vida",
  ],
  faqEyebrow: "11 / Preguntas",
  faqHeadA: "Preguntas frecuentes.",
  faqs: [
    ["¿Necesito experiencia?", "No — el currículum empieza desde cero y te lleva a un nivel listo para clientes."],
    ["¿Cuánto dura el acceso?", "Acceso de por vida más todas las actualizaciones futuras."],
    ["¿Qué herramientas necesito?", "Un portátil y un par de herramientas de IA de pago — el stack completo está dentro."],
    ["¿Hay devolución?", "14 días de devolución, sin preguntas."],
    ["¿Cuándo son las llamadas?", "Cada semana, con grabaciones disponibles en cualquier zona horaria."],
    ["¿Se mantendrá este precio?", "No — el precio fundador termina cuando se llene la cohorte."],
  ],
  finalEyebrow: "POR GIZMO STUDIO",
  finalA: "Tu primer cliente pagado ",
  finalB: "ya está en el edificio.",
  finalCTA: "Únete a GIZMO STUDIO →",
  finalHand: " — solo cohorte fundadora.",
  footerCopy: "© GIZMO STUDIO · Dirección Creativa con IA y Sistemas Visuales",
  navTerms: "Términos",
  navPrivacy: "Privacidad",
  navRefund: "Devolución",
  navContact: "Contacto",
  navCurriculum: "Currículum",
  navWork: "Trabajo",
  navMembership: "Membresía",
  navTestimonials: "Testimonios",
  navPricing: "Precio",
  navFAQ: "FAQ",
  langWelcome: "Bienvenido",
  langPick: "Elige tu idioma",
  langRecommended: "Recomendado",
} as Dict;

const DICTS: Record<Lang, Dict> = { en: EN, es: ES };

/* ---------- helpers ---------- */

function Placeholder({
  label,
  className = "",
  tone = "ink",
  ratio = "aspect-[4/5]",
  rotate = 0,
  madeWithAI = "★ Made with AI",
}: {
  label: string;
  className?: string;
  tone?: "ink" | "cream" | "accent" | "chrome";
  ratio?: string;
  rotate?: number;
  madeWithAI?: string;
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
        {madeWithAI}
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

function Brand({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`brand ${className}`}>{children}</span>;
}

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

/* ---------- language gate ---------- */
function LanguageGate({ onPick }: { onPick: (l: Lang) => void }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 backdrop-blur-md px-4">
      <div className="relative w-full max-w-md rounded-3xl border-2 border-[var(--ink)] bg-[var(--cream)] p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]" style={textureStyle}>
        <div className="flex items-center gap-3">
          <img src={gzLogo.url} alt="GZ Studio" className="h-10 w-10 rounded-md object-cover" />
          <Brand className="text-xl">GIZMO STUDIO</Brand>
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
            className="btn-glow rounded-2xl border-2 border-[var(--ink)] bg-white px-5 py-5 text-left text-[var(--ink)]"
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
  const { h, m, s } = useCountdown();
  const [plan, setPlan] = useState<"full" | "split">("full");
  const [lang, setLang] = useState<Lang | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("gz-lang") as Lang | null;
      if (stored === "es" || stored === "en") setLang(stored);
    } catch {}
  }, []);

  const t = DICTS[lang ?? "es"];

  const setLanguage = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem("gz-lang", l); } catch {}
  };

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)] font-[family-name:var(--font-display)]">
      {lang === null && <LanguageGate onPick={setLanguage} />}

      {/* Sticky top header / countdown bar */}
      <div className="sticky top-0 z-50 px-3 pt-3">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 rounded-full bg-[var(--ink)] px-3 py-1.5 text-[var(--cream)] shadow-[0_10px_30px_-12px_rgba(0,0,0,0.4)]">
          <a href="#" className="btn-glow flex items-center gap-2 rounded-full pl-1 pr-3 py-1">
            <img src={gzLogo.url} alt="GZ Studio" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" />
            <Brand className="hidden sm:inline text-base tracking-tight">GIZMO STUDIO</Brand>
          </a>
          <div className="flex items-center gap-3 text-[11px]">
            <span className="hidden md:inline mono uppercase tracking-[0.18em] opacity-70">
              {t.countdownLabel}
            </span>
            <span className="mono tabular-nums text-[var(--accent)] font-bold text-[13px]">
              {h}:{m}:{s}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* lang switcher */}
            <div className="flex items-center rounded-full bg-white/10 p-0.5 text-[10px] mono uppercase tracking-[0.18em]">
              {(["es", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLanguage(l)}
                  className={`btn-glow rounded-full px-2 py-1 ${
                    (lang ?? "es") === l ? "bg-[var(--accent)] text-white" : "text-[var(--cream)]/70"
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a
              href="#pricing"
              className="btn-glow rounded-full bg-[var(--accent)] px-3 sm:px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white"
            >
              {t.joinNow}
            </a>
            <a href="#" className="btn-glow hidden sm:inline rounded-full px-2 py-1 mono text-[10px] uppercase tracking-[0.22em] opacity-70 hover:opacity-100">
              {t.login}
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden" style={textureStyle}>
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
                <Placeholder label="campaign 01" ratio="aspect-[3/4]" tone="ink" rotate={-6} madeWithAI={t.madeWithAI} />
              </div>
              <div className="hidden lg:block absolute -right-10 -top-2 w-36">
                <Placeholder label="chrome 02" ratio="aspect-square" tone="chrome" rotate={8} madeWithAI={t.madeWithAI} />
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
                <svg width="36" height="36" viewBox="0 0 36 36" className="mt-1 shrink-0 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M6 24 Q14 6, 22 16 T34 14" />
                  <path d="M28 10 L34 14 L30 20" />
                </svg>
                <p className="hand text-4xl sm:text-5xl text-[var(--ink-2)] leading-tight">
                  {t.heroHand1}<span className="text-[var(--accent)]">{t.heroHand2}</span>{t.heroHand3}
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#pricing"
                  className="btn-glow group inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_0_0_var(--ink)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--ink)]"
                >
                  {t.ctaLockIn}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <span className="hand text-2xl text-[var(--ink-3)]">{t.trusted}</span>
              </div>
            </div>

            <aside className="lg:col-span-4 grid grid-cols-2 gap-3 content-start">
              <div className="col-span-2">
                <Placeholder label="Hero portrait" ratio="aspect-[4/5]" tone="ink" madeWithAI={t.madeWithAI} />
              </div>
              <Placeholder label="still 03" ratio="aspect-square" tone="chrome" rotate={-3} madeWithAI={t.madeWithAI} />
              <Placeholder label="editorial 04" ratio="aspect-square" tone="ink" rotate={3} madeWithAI={t.madeWithAI} />
              <p className="col-span-2 mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                <Brand>{t.byGizmoSub}</Brand>
              </p>
            </aside>
          </div>

          <div className="overflow-hidden border-y border-[var(--ink)]/15 py-3">
            <div className="marquee-track-fast">
              {Array.from({ length: 2 }).flatMap((_, k) =>
                ["campaign 01", "still 02", "model 03", "product 04", "editorial 05", "fashion 06"].map(
                  (l, i) => (
                    <div key={`${k}-${i}`} className="flex items-center gap-3">
                      <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                        {t.madeWithAI}
                      </span>
                      <Placeholder label={l} ratio="aspect-[4/3]" className="h-16 w-24 shadow-none" tone="ink" madeWithAI={t.madeWithAI} />
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
          <Eyebrow>{t.barriersEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-5xl text-5xl sm:text-7xl lg:text-8xl">
            {t.barriersHeadA}<span className="text-[var(--accent)]">{t.barriersHeadB}</span>
          </h2>
          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.barriers.map((b, i) => (
              <li key={b} className="border-t border-[var(--line-dark)] pt-6">
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  0{i + 1}
                </span>
                <p className="mt-2 text-2xl font-bold">{b}</p>
              </li>
            ))}
          </ul>
          <p className="hand mt-16 max-w-3xl text-5xl text-[var(--cream)]/85 leading-tight">
            {t.barriersHand1}<span className="text-[var(--accent)]">{t.barriersHand2}</span>{t.barriersHand3}
          </p>
        </div>
      </section>

      {/* Capability grid */}
      <section className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>{t.capEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">{t.capHead}</h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {t.capItems.map((c, i) => (
              <div key={c} className="btn-glow group relative overflow-hidden rounded-2xl">
                <Placeholder label={c} ratio="aspect-square" tone={i % 3 === 0 ? "chrome" : "ink"} madeWithAI={t.madeWithAI} />
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
          <Eyebrow>{t.cmpEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">
            {t.cmpHeadA}<span className="text-[var(--accent)]">{t.cmpHeadB}</span>{t.cmpHeadC}
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-[var(--line-dark)] p-8">
              <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                {t.cmpMostCreators}
              </span>
              <ul className="mt-6 space-y-4 text-xl">
                {t.cmpMost.map((x) => (
                  <li key={x} className="flex gap-3 items-start">
                    <span className="text-[var(--accent)] text-2xl leading-none">✕</span>
                    <span className="line-through opacity-60">{x}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[var(--cream)] p-8 text-[var(--ink)]" style={textureStyle}>
              <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
                {t.cmpBrands}
              </span>
              <ul className="mt-6 space-y-4 text-xl">
                {t.cmpGood.map((x) => (
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
          <Eyebrow>{t.trustedBy}</Eyebrow>
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

      {/* Four moves */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>{t.methodEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">
            {t.methodHeadA}<span className="text-[var(--accent)]">{t.methodHeadB}</span>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.moves.map((mv, i) => (
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
      <section className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>{t.workEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">
            {t.workHeadA}<span className="text-[var(--accent)]">{t.workHeadB}</span>
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <Placeholder
                key={i}
                label={`${t.memberLabel} ${i + 1}`}
                ratio={i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}
                tone={i % 2 ? "ink" : "chrome"}
                madeWithAI={t.madeWithAI}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[var(--ink)] py-24 text-[var(--cream)]">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>{t.testEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">
            <span className="text-[var(--accent)]">"</span>{t.testHead}<span className="text-[var(--accent)]">"</span>
          </h2>
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
            {t.testQuotes.map((q, i) => (
              <figure key={q} className="btn-glow rounded-2xl border border-[var(--line-dark)] p-6">
                <span className="text-[var(--accent)] text-4xl leading-none">"</span>
                <blockquote className="mt-2 text-xl font-medium leading-snug">{q}</blockquote>
                <figcaption className="mono mt-4 text-[10px] uppercase tracking-[0.22em] opacity-60">
                  {t.memberLabel} {i + 1}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
          <Eyebrow>{t.curEyebrow}</Eyebrow>
          <h2 className="headline mt-6 max-w-4xl text-5xl sm:text-7xl">
            {t.curHeadA}<span className="line-through opacity-50">$997</span>{" "}
            <span className="text-[var(--accent)]">{t.curHeadB}</span>
          </h2>
          <ol className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {t.modules.map((mod, i) => (
              <li
                key={mod}
                className="btn-glow rounded-2xl border border-[var(--ink)]/15 bg-white/50 backdrop-blur p-5"
              >
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  {t.moduleLabel} 0{i + 1}
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
            <Placeholder label="GIZMO Studio Membership Club" ratio="aspect-[4/5]" tone="chrome" madeWithAI={t.madeWithAI} />
          </div>
          <div className="lg:col-span-7">
            <Eyebrow>{t.clubEyebrow}</Eyebrow>
            <h2 className="headline mt-6 text-5xl sm:text-7xl">
              {t.clubHeadA}<span className="text-[var(--accent)]">{t.clubHeadB}</span>
            </h2>
            <ul className="mt-10 space-y-4 text-lg">
              {t.clubItems.map((x) => (
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
            <Placeholder label="Founder portrait" ratio="aspect-[4/5]" tone="ink" madeWithAI={t.madeWithAI} />
          </div>
          <div className="lg:col-span-7">
            <Eyebrow><Brand>{t.founderEyebrow}</Brand></Eyebrow>
            <h2 className="headline mt-6 text-4xl sm:text-6xl">
              {t.founderHeadA}<Brand className="text-[var(--accent)]">{t.founderHeadB}</Brand>
            </h2>
            <p className="hand mt-6 text-4xl text-[var(--ink-2)] leading-tight">{t.founderHand}</p>
            <p className="mt-6 text-lg leading-relaxed opacity-80">{t.founderBody}</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24" style={textureStyle}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <div className="text-center">
            <Eyebrow>{t.pricingEyebrow}</Eyebrow>
            <h2 className="headline mt-6 text-5xl sm:text-7xl">
              {t.pricingHeadA}<span className="text-[var(--accent)]">{t.pricingHeadB}</span>{t.pricingHeadC ?? " price."}
            </h2>
          </div>

          <div className="mx-auto mt-10 flex w-full justify-center">
            <div className="inline-flex rounded-full border border-[var(--ink)]/20 bg-white/60 backdrop-blur p-1">
              {(["full", "split"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPlan(p)}
                  className={`btn-glow rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors ${
                    plan === p
                      ? "bg-[var(--ink)] text-[var(--cream)]"
                      : "text-[var(--ink-3)]"
                  }`}
                >
                  {p === "full" ? t.payFull : t.paySplit}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-3xl border-2 border-[var(--ink)] bg-white p-10 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.4)]">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="mono text-[10px] uppercase tracking-[0.22em] text-[var(--accent)]">
                  <Brand>{t.founding}</Brand>
                </span>
                <div className="mt-3 flex items-baseline gap-3">
                  <span className="text-7xl font-black tracking-tight">
                    {plan === "full" ? "$399" : "$219"}
                  </span>
                  <span className="text-xl opacity-60 font-medium">
                    {plan === "full" ? t.oneTime : t.monthly4}
                  </span>
                </div>
                <p className="hand mt-2 text-3xl text-[var(--ink-3)]">
                  <span className="line-through">$997</span>{t.wasFounding}
                </p>
              </div>
              <a
                href="#"
                data-replace="link:stripe-checkout"
                className="btn-glow inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-[0_8px_0_0_var(--ink)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--ink)]"
              >
                {t.startNow}
              </a>
            </div>

            <ul className="mt-10 grid gap-3 border-t border-[var(--ink)]/10 pt-8 sm:grid-cols-2">
              {t.features.map((f) => (
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
      <section className="py-32 text-center" style={textureStyle}>
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <Eyebrow><Brand>{t.finalEyebrow}</Brand></Eyebrow>
          <h2 className="headline mt-6 text-6xl sm:text-8xl">
            {t.finalA}<span className="text-[var(--accent)]">{t.finalB}</span>
          </h2>
          <a
            href="#pricing"
            className="btn-glow mt-12 inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[var(--cream)] shadow-[0_10px_0_0_var(--accent)] hover:translate-y-[2px] hover:shadow-[0_5px_0_0_var(--accent)]"
          >
            <Brand className="text-base">{t.finalCTA}</Brand>
          </a>
          <p className="hand mt-6 text-3xl text-[var(--ink-3)]">
            <span className="line-through">$997</span>{t.finalHand}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--ink)]/15 py-12 bg-[var(--cream)]" style={textureStyle}>
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 pb-20">
          <div className="flex items-center gap-3">
            <img src={gzLogo.url} alt="GZ Studio" className="h-9 w-9 rounded-md object-cover" />
            <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-70">
              <Brand className="mr-2 text-sm tracking-normal opacity-100">GIZMO STUDIO</Brand>· {t.footerCopy.replace(/^© GIZMO STUDIO · /, "").replace(/^© GIZMO STUDIO · /i, "")}
            </span>
          </div>
          <div className="flex flex-wrap gap-5 text-[11px] uppercase tracking-[0.22em] opacity-70">
            <a href="#" className="btn-glow rounded px-1" data-replace="link:terms">{t.navTerms}</a>
            <a href="#" className="btn-glow rounded px-1" data-replace="link:privacy">{t.navPrivacy}</a>
            <a href="#" className="btn-glow rounded px-1" data-replace="link:refund">{t.navRefund}</a>
            <a href="mailto:hello@example.com" className="btn-glow rounded px-1" data-replace="link:contact">{t.navContact}</a>
          </div>
        </div>
      </footer>

      {/* Floating bottom nav pill */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-[var(--line-dark)] bg-[var(--ink)]/95 p-1.5 text-[var(--cream)] shadow-2xl backdrop-blur">
          <Brand className="px-3 py-2 text-base text-[var(--accent)]">GIZMO</Brand>
          {[
            [t.navCurriculum, "#"],
            [t.navWork, "#"],
            [t.navMembership, "#"],
            [t.navTestimonials, "#"],
            [t.navPricing, "#pricing"],
            [t.navFAQ, "#"],
          ].map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="btn-glow hidden sm:inline rounded-full px-3 py-2 text-[11px] font-medium uppercase tracking-[0.18em] hover:bg-white/10"
            >
              {l}
            </a>
          ))}
          <a
            href="#pricing"
            className="btn-glow ml-1 rounded-full bg-[var(--accent)] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
          >
            {t.joinNow}
          </a>
        </div>
      </div>
    </div>
  );
}
