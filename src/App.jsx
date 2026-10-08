import { useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowUpRight, Check, Mail, MapPin, MessageCircle, MousePointer2, Send } from "lucide-react";

/* ---------- Content (edit here) ---------- */
const EMAIL = "mostafakhlkhl99@gmail.com";
const WHATSAPP = "201070856782";
const DRIVE = "https://drive.google.com/drive/u/0/folders/1XH-4iEEh2h-djjO4_9WtBeXYqALusLYL";
const NAV = ["Work", "Skills", "Contact"];
const MARQUEE = ["Social Media", "Motion Graphics", "Visual Identity", "Reels", "Video Ads", "Content Strategy"];
// Replace `cover` with an image URL (e.g. "/works/identity.jpg") to show real work.
const WORKS = [
  { title: "Campaign Visual", cat: "Design", size: "1080 × 1080", note: "Social campaign post design", cover: "/works/work-01.jpg" },
  { title: "Brand Story Post", cat: "Design", size: "1080 × 1350", note: "Story-first brand content design", cover: "/works/work-02.jpg" },
  { title: "Matchday Poster", cat: "Design", size: "1080 × 1080", note: "Sports marketing poster", cover: "/works/work-03.jpg" },
  { title: "Product Highlight", cat: "Design", size: "1080 × 1080", note: "Product-focused creative", cover: "/works/work-04.jpg" },
  { title: "Offer Campaign", cat: "Design", size: "1080 × 1080", note: "Promotional offer design", cover: "/works/work-05.jpg" },
  { title: "Event Announcement", cat: "Design", size: "1080 × 1350", note: "Event launch visual", cover: "/works/work-06.jpg" },
  { title: "Key Visual", cat: "Design", size: "1080 × 1350", note: "High-end key visual design", cover: "/works/work-07.png" },
  { title: "Retail Promo", cat: "Design", size: "1080 × 1080", note: "Retail promotion creative", cover: "/works/work-08.jpg" },
  { title: "AI-Assisted Creative", cat: "Design", size: "1080 × 1080", note: "AI-generated campaign visual", cover: "/works/work-09.png" },
  { title: "Daily Content Post", cat: "Design", size: "1080 × 1080", note: "Social media daily post", cover: "/works/work-10.jpeg" },
  { title: "Store Campaign", cat: "Design", size: "1080 × 1080", note: "Retail awareness campaign", cover: "/works/work-11.png" },
  { title: "World Cup Design", cat: "Design", size: "1080 × 1080", note: "World Cup themed design", cover: "/works/work-12.png" },
];
const TOOLS = [["Ae", "After Effects"], ["Pr", "Premiere Pro"], ["Ps", "Photoshop"], ["Ai", "Illustrator"], ["Cv", "Canva"], ["Cc", "CapCut"]];
const TAGS = ["Social Media Management", "Marketing Campaigns", "Content Strategy", "Digital Marketing", "Branding", "Advertising Design", "Video Editing"];

/* ---------- Motion presets ---------- */
const ease = [0.22, 1, 0.36, 1];
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } };
const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };
const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-80px" } };

/* ---------- Design-file vocabulary: frame labels + selection handles ---------- */
const CORNERS = ["-left-[5px] -top-[5px]", "-right-[5px] -top-[5px]", "-left-[5px] -bottom-[5px]", "-right-[5px] -bottom-[5px]"];
const Handles = ({ className = "" }) => CORNERS.map((c) => (
  <span key={c} className={`pointer-events-none absolute h-2.5 w-2.5 border border-cobalt bg-ice ${c} ${className}`} />
));
const FrameLabel = ({ children }) => <p className="mb-5 text-sm font-medium text-sky/70">{children}</p>;
const Heading = ({ children }) => (
  <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight text-ice sm:text-5xl md:text-6xl">{children}</h2>
);

function Header() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-canvas/80 p-1.5 backdrop-blur-xl">
        <a href="#top" className="rounded-full bg-cobalt px-4 py-2 text-sm font-bold tracking-wide text-ice">NEX STUDIO</a>
        {NAV.map((n) => (
          <a key={n} href={`#${n.toLowerCase()}`} className="rounded-full px-3 py-2 text-sm font-medium text-sky transition-colors hover:bg-white/10 hover:text-ice sm:px-5">{n}</a>
        ))}
        <a href="#contact" className="ml-1 hidden rounded-full bg-ice px-5 py-2 text-sm font-semibold text-canvas transition-colors hover:bg-sky sm:block">Hire me</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center px-6 pb-20 pt-32">
      <motion.div variants={stagger} initial="hidden" animate="show" className="relative mx-auto w-full max-w-7xl">
        <motion.div variants={rise}><FrameLabel>Frame 1 / Hero</FrameLabel></motion.div>
        <motion.div variants={rise} className="relative inline-block max-w-full border border-cobalt p-5 sm:p-10">
          <Handles />
          <h1 className="text-[clamp(3.4rem,12vw,10.5rem)] font-extrabold leading-[0.88] tracking-tighter text-ice">
            Mustafa<br />Mamdoh
          </h1>
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-cobalt px-3 py-1 text-xs font-semibold text-ice">Graphic Designer</span>
        </motion.div>
        <motion.p variants={rise} className="mt-16 max-w-xl text-lg leading-relaxed text-sky/90 sm:text-xl">
          I design identities, campaigns and films for brands that want to be remembered. Every frame is built with intent, from the first sketch to the final export.
        </motion.p>
        <motion.div variants={rise} className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="group inline-flex items-center gap-2 bg-cobalt px-7 py-4 font-semibold text-ice transition-colors duration-300 hover:bg-ice hover:text-cobalt">
            View work <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex items-center border border-sky/40 px-7 py-4 font-semibold text-ice transition-colors duration-300 hover:border-ice hover:bg-white/5">Start a project</a>
        </motion.div>
        <motion.div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-[22%] hidden md:block"
          animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}>
          <MousePointer2 size={26} className="fill-sky text-sky" />
          <span className="ml-5 -mt-1 block w-fit rounded-md rounded-tl-none bg-sky px-2.5 py-1 text-xs font-semibold text-canvas">Client</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <div className="overflow-hidden bg-cobalt py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {items.map((t, i) => (
          <span key={i} className="flex items-center text-2xl font-extrabold tracking-tight text-ice sm:text-4xl">
            <span className="px-8">{t}</span>
            <span className="h-3 w-3 bg-ice" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Cover({ i }) {
  const k = i % 3;
  if (k === 0) return (
    <div className="absolute inset-0 bg-cobalt">
      <span className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-ice" />
      <span className="absolute bottom-8 left-8 h-16 w-16 bg-canvas" />
    </div>
  );
  if (k === 1) return (
    <div className="absolute inset-0 bg-ice">
      <span className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cobalt" />
      <span className="absolute left-8 top-8 h-3 w-24 bg-canvas" />
    </div>
  );
  return (
    <div className="absolute inset-0 bg-frame">
      <span className="absolute bottom-0 left-0 h-2/5 w-full bg-sky" />
      <span className="absolute right-8 top-8 h-20 w-20 rounded-full border-[10px] border-cobalt" />
    </div>
  );
}

function Work() {
  const [filter, setFilter] = useState("All");
  const shown = WORKS.map((w, i) => ({ ...w, i })).filter((w) => filter === "All" || w.cat === filter);
  return (
    <section id="work" className="scroll-mt-20 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div variants={stagger} {...inView} className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <motion.div variants={rise}><FrameLabel>Frame 2 / Work</FrameLabel><Heading>Selected work</Heading></motion.div>
          <motion.div variants={rise} role="tablist" className="flex w-fit rounded-full border border-white/10 bg-frame p-1">
            {["All", "Design"].map((f) => (
              <button key={f} role="tab" aria-selected={filter === f} onClick={() => setFilter(f)} className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-colors ${filter === f ? "text-ice" : "text-sky hover:text-ice"}`}>
                {filter === f && <motion.span layoutId="pill" className="absolute inset-0 rounded-full bg-cobalt" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <span className="relative">{f}</span>
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div layout className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((w, n) => (
              <motion.a key={w.title} href={DRIVE} target="_blank" rel="noopener noreferrer" layout
                initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.55, ease, delay: n * 0.05 }} className="group block" whileHover={{ y: -10 }}>
                <div className="mb-3 flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-semibold text-ice transition-colors duration-300 group-hover:text-sky">{w.title}</span>
                  <span className="shrink-0 text-xs text-sky/60">{w.size}</span>
                </div>
                <div className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-frame transition-all duration-500 group-hover:border-cobalt group-hover:shadow-[0_20px_60px_-15px_rgba(47,75,255,0.5)]">
                    {w.cover ? <img src={w.cover} alt={w.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1.5deg]" /> : <Cover i={w.i} />}
                    <div className="absolute inset-0 bg-cobalt/0 transition-colors duration-500 group-hover:bg-cobalt/10" />
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between gap-4 bg-cobalt p-5 text-ice transition-transform duration-500 group-hover:translate-y-0">
                      <span className="text-sm font-medium">{w.note}</span><ArrowUpRight className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </div>
                  </div>
                  <Handles className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16">
          <a href={DRIVE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b-2 border-cobalt pb-1 font-semibold text-ice transition-colors hover:text-sky">
            See the full archive <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-white/10 px-6 py-28">
      <motion.div variants={stagger} {...inView} className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-5">
        <motion.div variants={rise} className="lg:col-span-2">
          <FrameLabel>Frame 3 / Assets</FrameLabel>
          <Heading>Tools and craft</Heading>
          <div className="mt-10 flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <span key={t} className="cursor-default rounded-full border border-sky/30 px-4 py-1.5 text-sm text-sky transition-all duration-300 hover:border-cobalt hover:bg-cobalt hover:text-ice">{t}</span>
            ))}
          </div>
        </motion.div>
        <motion.ul variants={stagger} className="border-t border-white/10 lg:col-span-3">
          {TOOLS.map(([abbr, name]) => (
            <motion.li key={name} variants={rise} className="group flex items-center gap-6 border-b border-white/10 py-5 transition-all duration-300 hover:bg-cobalt/10 hover:pl-4">
              <span className="flex h-12 w-12 items-center justify-center bg-cobalt text-lg font-extrabold text-ice transition-transform duration-300 group-hover:rotate-6">{abbr}</span>
              <span className="text-2xl font-bold tracking-tight text-ice sm:text-3xl">{name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

function Field({ label, name, type = "text", area, value, onChange }) {
  const Tag = area ? "textarea" : "input";
  return (
    <div className="relative pt-6">
      <Tag id={name} name={name} type={area ? undefined : type} rows={area ? 4 : undefined} required placeholder=" " value={value} onChange={onChange}
        className="peer w-full resize-none border-b border-white/15 bg-transparent pb-3 text-ice outline-none" />
      <label htmlFor={name} className="pointer-events-none absolute left-0 top-6 origin-left text-sky/60 transition-all duration-300 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-sky peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">{label}</label>
      <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-cobalt transition-transform duration-500 peer-focus:scale-x-100" />
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const body = `${form.message}\n\n${form.name} (${form.email})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Project inquiry from " + form.name)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const cards = [
    { Icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { Icon: MessageCircle, label: "WhatsApp", value: "+20 107 085 6782", href: `https://wa.me/${WHATSAPP}` },
    { Icon: MapPin, label: "Location", value: "Cairo, Egypt" },
  ];
  return (
    <section id="contact" className="scroll-mt-20 border-t border-white/10 px-6 py-28">
      <motion.div variants={stagger} {...inView} className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <motion.div variants={rise}><FrameLabel>Frame 4 / Contact</FrameLabel><Heading>Let’s make something people remember</Heading></motion.div>
          <div className="mt-12 space-y-3">
            {cards.map(({ Icon, label, value, href }) => {
              const Wrap = href ? "a" : "div";
              return (
                <motion.div key={label} variants={rise}>
                  <Wrap {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})} className="group flex items-center gap-5 border border-white/10 p-5 transition-all duration-300 hover:border-cobalt hover:bg-cobalt/10">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-cobalt text-ice"><Icon size={20} /></span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-sky/60">{label}</span>
                      <span className="block truncate text-lg font-semibold text-ice sm:text-xl">{value}</span>
                    </span>
                  </Wrap>
                </motion.div>
              );
            })}
          </div>
        </div>
        <motion.form variants={rise} onSubmit={submit} className="relative self-start rounded-2xl rounded-tl-none border border-cobalt bg-frame p-8 sm:p-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sky text-sm font-bold text-canvas">You</span>
            <h3 className="text-xl font-bold text-ice">Leave a comment</h3>
          </div>
          <div className="space-y-6">
            <Field label="Your name" name="name" value={form.name} onChange={set("name")} />
            <Field label="Email address" name="email" type="email" value={form.email} onChange={set("email")} />
            <Field label="Tell me about your project" name="message" area value={form.message} onChange={set("message")} />
          </div>
          <button type="submit" className="group mt-10 inline-flex w-full items-center justify-center gap-3 bg-cobalt px-8 py-4 font-semibold text-ice transition-colors duration-300 hover:bg-ice hover:text-cobalt">
            {sent ? <>Opening your email app <Check size={18} /></> : <>Send message <Send size={18} className="transition-transform duration-300 group-hover:translate-x-1" /></>}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-6 py-10 text-center text-sm text-sky/50">
        © {new Date().getFullYear()} Nex Studio. Mustafa Mamdoh.
      </footer>
    </MotionConfig>
  );
}
