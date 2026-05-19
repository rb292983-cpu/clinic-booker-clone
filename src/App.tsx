import logo from "@/assets/logo-mark.png";
import { Check, X, Star, Play, ArrowRight, Shield, Zap, Target, TrendingUp } from "lucide-react";

const CAL_URL = "https://cal.com/escalatedigital/30min";

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-xl bg-background/60 border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Clinic Booked" width={36} height={36} className="h-9 w-9" />
          <span className="text-lg font-bold tracking-tight">Clinic Booked</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#results" className="hover:text-foreground transition">Results</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#testimonials" className="hover:text-foreground transition">Testimonials</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
        </nav>
        <a href={CAL_URL} target="_blank" rel="noreferrer"
          className="relative inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105"
          style={{ background: "var(--gradient-brand)" }}>
          Book a Call
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-1.5 text-xs font-medium tracking-wide text-primary backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          LIMITED TO 1 CLINIC PER LOCAL AREA
        </div>
        <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          Get <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>20–50 New Patients</span> Every Month Without Discount Hunters On A Pay-On-Results Basis
        </h1>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground">
          Our average medspa adds <span className="text-foreground font-semibold">$60,000+</span> in less than 90 days
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105" style={{ background: "var(--gradient-brand)" }}>
            See If You Qualify <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#process" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-4 text-base font-semibold backdrop-blur transition hover:bg-card">
            <Play className="h-4 w-4" /> Watch How It Works
          </a>
        </div>
        <div className="mt-12 flex items-center justify-center gap-3 text-sm text-muted-foreground">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[oklch(0.78_0.16_150)] text-[oklch(0.78_0.16_150)]" />
            ))}
          </div>
          <span className="text-border">|</span>
          <span><span className="text-foreground font-semibold">150+ Clinics</span> Transformed</span>
        </div>
      </div>
    </section>
  );
}

const TREATMENTS = ["Morpheus8", "CoolSculpting", "EmSculpt", "TruSculpt", "Venus Freeze", "RF Microneedling", "Body Contouring", "Laser Treatments", "Botox & Fillers", "Facial Aesthetics"];

function Marquee() {
  const items = [...TREATMENTS, ...TREATMENTS];
  return (
    <section className="border-y border-border/50 bg-card/30 py-8 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Trusted by clinics offering premium treatments</p>
      <div className="relative">
        <div className="flex gap-12 animate-[scroll_40s_linear_infinite] whitespace-nowrap">
          {items.map((t, i) => (
            <span key={i} className="text-2xl font-semibold text-muted-foreground/60">{t}</span>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </section>
  );
}

function Problems() {
  const items = [
    { title: "Marketing Isn't Working", body: "Spending $3K–$10K/month on ads with little to no ROI. Past agencies overpromised and underdelivered." },
    { title: "Low-Quality Leads", body: "Leads are price shoppers chasing Groupon deals. 40–50% no-show rates. Patients can't afford treatments." },
    { title: "No Scalable System", body: "Relying on word-of-mouth. The owner is the only one who can close. Feast or famine revenue cycles." },
  ];
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-primary">Sound Familiar?</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl font-bold tracking-tight">Stuck at a Revenue Plateau?</h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">You're not alone. Most medspa owners are frustrated, overwhelmed, and burned by agencies that don't deliver.</p>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card/50 p-8 backdrop-blur transition hover:border-primary/50 hover:-translate-y-1">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <X className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { value: "$60K+", label: "Average Revenue Added", sub: "in less than 90 days" },
    { value: "20–50", label: "New Patients", sub: "per month guaranteed" },
    { value: "5 min", label: "Speed to Lead", sub: "industry best response" },
    { value: "150+", label: "Clinics Transformed", sub: "across US & Canada" },
  ];
  return (
    <section id="results" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-primary">Proven Results</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl font-bold tracking-tight">Numbers That Speak For Themselves</h2>
        <p className="mt-4 text-center text-muted-foreground">We don't just promise results — we deliver them. Every single month.</p>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card/50 p-8 text-center backdrop-blur transition hover:border-primary/50">
              <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>{s.value}</div>
              <div className="mt-3 font-semibold">{s.label}</div>
              <div className="text-sm text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 mx-auto max-w-3xl rounded-2xl border border-primary/30 p-8 text-center" style={{ background: "linear-gradient(135deg, oklch(0.65 0.22 265 / 0.1), oklch(0.65 0.24 290 / 0.1))" }}>
          <Shield className="mx-auto h-10 w-10 text-primary" />
          <h3 className="mt-4 text-2xl font-bold">100% Money-Back Guarantee</h3>
          <p className="mt-3 text-muted-foreground">We put our money where our mouth is. If we don't deliver, you get your money back. No questions asked.</p>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", tag: "Attract", icon: Target, title: "Authority Funnels", body: "Custom UGC and video ads paired with split-tested landing pages that position you as the premium choice — not the $99 Groupon option." },
    { n: "02", tag: "Convert", icon: Zap, title: "5-Minute Speed to Lead", body: "Our team responds to every lead within 5 minutes, 13 hours a day. We pre-qualify financially so you only see ready-to-pay patients." },
    { n: "03", tag: "Close", icon: TrendingUp, title: "Done-For-You Booking", body: "We handle calls, texts, and follow-ups, locking in confirmed appointments directly into your calendar. No more chasing leads." },
    { n: "04", tag: "Scale", icon: Shield, title: "Retention & LTV", body: "Reactivation campaigns, review generation, and offer engineering that turn one-time patients into long-term high-value clients." },
  ];
  return (
    <section id="process" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-primary">The Clinic Booked System</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl font-bold tracking-tight">Everything You Need to <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>Attract, Book & Grow</span></h2>
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">A complete patient acquisition system that delivers qualified patients who book, show up, pay premium prices, and stay.</p>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="group relative rounded-2xl border border-border bg-card/50 p-8 backdrop-blur transition hover:border-primary/50">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">{s.n} — {s.tag}</span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const videos = [
    { title: "How Susan added $20K in 30 Days", sub: "Medspa Owner — Texas" },
    { title: "Dana booked 68 new patients in 30 days", sub: "Aesthetic Clinic — Florida" },
    { title: "From $50K to $150K in 8 weeks", sub: "Wellness Spa — California" },
  ];
  return (
    <section id="testimonials" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-primary">Client Success Stories</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl font-bold tracking-tight">Hear From Our Clients</h2>
        <p className="mt-4 text-center text-muted-foreground">Real results from clinic owners who scaled with Clinic Booked.</p>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.title} className="group overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur transition hover:border-primary/50">
              <div className="relative aspect-video flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-brand)" }}>
                <div className="absolute inset-0 bg-background/40" />
                <button className="relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-foreground shadow-xl transition group-hover:scale-110">
                  <Play className="h-6 w-6 fill-current" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="font-semibold leading-snug">{v.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">Video testimonials coming soon.</p>
      </div>
    </section>
  );
}

function Compare() {
  const rows = [
    ["Lead Response Time", "1–24 hours", "Under 5 minutes"],
    ["Lead Qualification", "None — book anyone", "Financial & medical screening"],
    ["Offer Strategy", "$99 promo deals", "$399–$499+ value positioning"],
    ["Support", "Email only, 1 call/month", "Slack + bi-weekly calls"],
    ["Appointment Setting", "Client handles calls", "Done-for-you, 13hrs/day"],
    ["Tracking & Reporting", "Basic metrics", "Full funnel analytics"],
  ];
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-primary">Why Choose Us</p>
        <h2 className="mt-4 text-center text-4xl md:text-5xl font-bold tracking-tight">Not Your Typical Agency</h2>
        <p className="mt-4 text-center text-muted-foreground">We studied every competitor. Here's why clinics pick us.</p>
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur">
          <div className="grid grid-cols-3 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border bg-background/30">
            <div>Feature</div>
            <div>Other Agencies</div>
            <div className="text-primary">Clinic Booked</div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-3 px-6 py-5 items-center border-b border-border last:border-0 text-sm md:text-base">
              <div className="font-medium">{r[0]}</div>
              <div className="text-muted-foreground flex items-center gap-2"><X className="h-4 w-4 text-destructive shrink-0" />{r[1]}</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary shrink-0" />{r[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { quote: "Clinic Booked has been a game-changer. Their team understood our goals fast and delivered a strategy that boosted leads and conversions. Genuinely invested in our success.", name: "Hela Z.", role: "Medspa Owner" },
  { quote: "I've been burned by several agencies. Clinic Booked got my ads running fast, and yesterday I made more in one day than I would in a week on insurance patients.", name: "Essential Aesthetics", role: "Oklahoma City" },
  { quote: "Their responsiveness, follow-up, and diligence are helping grow our business. We're thrilled with the partnership.", name: "The Modern Woman", role: "Med Spa" },
  { quote: "Third marketing company in one year — third time was the charm. They helped us make $43K in the last 3 months. Highly recommend!", name: "Radiant Med Spa", role: "Owner" },
  { quote: "They brought in $21,000 for our med spa in 3 months. Very committed to making sure every moving part runs seamlessly.", name: "Luxe Wellness", role: "Med Spa" },
  { quote: "In just one month after signing up, I've already been getting quality leads making a real difference for my business.", name: "Bella Vita Aesthetics", role: "Founder" },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-primary">Reviews</p>
          <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight">Trusted by 150+ Clinics</h2>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[oklch(0.78_0.16_150)] text-[oklch(0.78_0.16_150)]" />
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9</span> average rating
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card/50 p-6 backdrop-blur transition hover:border-primary/50">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">"{r.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                  {r.name.split(" ").map(w => w[0]).slice(0,2).join("")}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Fit() {
  const items = [
    "Generating $20K+/month and hungry for more",
    "Own high-ticket devices ready to be maximized",
    "Have a team in place (front desk, treatment rooms)",
    "Open to investing in growth — not just cutting costs",
    "Ready to partner, not just outsource",
    "Committed to becoming #1 in your market",
  ];
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-border bg-card/50 p-10 md:p-16 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Our Ideal Partners</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">We Work With Clinics Ready to Lead</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl">We're selective about who we partner with so every client gets the attention and outcomes they deserve.</p>
        <h3 className="mt-10 text-xl font-semibold">You might be a great fit if…</h3>
        <ul className="mt-6 grid md:grid-cols-2 gap-4">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-muted-foreground">{i}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105" style={{ background: "var(--gradient-brand)" }}>
            See If You Qualify <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <span className="text-sm text-muted-foreground">We respond within 24 hours.</span>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-32 px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-brand)" }} />
      </div>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-primary">Limited Spots Available</p>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">Become the <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>Aesthetic Authority</span> in Your Area</h2>
        <p className="mt-6 text-lg text-muted-foreground">Book a free strategy call to see if you qualify. We only work with 1 clinic per local area.</p>
        <div className="mt-10">
          <a href={CAL_URL} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full px-8 py-5 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-105" style={{ background: "var(--gradient-brand)" }}>
            Book Your Strategy Call <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> 100% Money-Back Guarantee</div>
          <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-primary" /> Results in 90 Days or Less</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Clinic Booked" width={32} height={32} className="h-8 w-8" loading="lazy" />
          <span className="font-bold">Clinic Booked</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Clinic Booked. All rights reserved.</p>
        <a href={CAL_URL} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition">Book a Call →</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problems />
        <Results />
        <Process />
        <Testimonials />
        <Compare />
        <Reviews />
        <Fit />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}