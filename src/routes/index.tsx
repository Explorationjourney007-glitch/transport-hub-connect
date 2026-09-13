import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  FileSpreadsheet,
  Menu,
  MessageCircle,
  Phone,
  ReceiptIndianRupee,
  ShieldCheck,
  Truck,
  Users,
  WalletCards,
  Wrench,
  X,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LogiTrack | Transport Business Management Software" },
      { name: "description", content: "Manage bookings, trips, expenses, customer payments, vehicles and drivers in one simple transport business management system with LogiTrack." },
      { property: "og:title", content: "LogiTrack | Transport Business Management Software" },
      { property: "og:description", content: "Run your transport business from one connected system with LogiTrack." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LogiTrackPage,
});

const workflow = [
  ["01", "Booking", "What did I book?", ClipboardList],
  ["02", "Vehicle & Driver", "Who is handling it?", Truck],
  ["03", "Trip Execution", "What's happening?", ChevronRight],
  ["04", "Expenses", "What am I spending?", ReceiptIndianRupee],
  ["05", "Trip Profit", "What did I make?", CircleDollarSign],
  ["06", "Invoice", "What did I bill?", FileSpreadsheet],
  ["07", "Payment", "What have I collected?", WalletCards],
] as const;

const faq = [
  ["What is LogiTrack?", "LogiTrack is transport business management software that helps truck owners and transport companies manage bookings, trips, expenses, customer payments, vehicles and drivers in one connected system."],
  ["Who is LogiTrack built for?", "LogiTrack is built for transport businesses — from truck owners and small fleet operators to larger transport companies. LogiTrack Lite is designed for everyday transport operations, while LogiTrack Pro provides deeper capabilities for larger businesses."],
  ["What can I manage with LogiTrack?", "You can manage your complete trip workflow, including bookings, vehicle and driver assignment, trip expenses, trip profitability, customer invoices and payments. Vehicle and Driver management capabilities can also be added based on your business needs."],
  ["Can I track my trip profit?", "Yes. LogiTrack keeps trip revenue and trip expenses together so you can see what each trip earned, what it cost, and the resulting trip profit."],
  ["Can I track customer payments and pending amounts?", "Yes. You can see customer bills, payments received and pending amounts, along with payment history, so you know who has paid and what still needs to be collected."],
  ["Can I manage my vehicles and drivers?", "Yes. Vehicle management helps you track vehicle expenses, maintenance, compliance and history. Driver management helps you manage driver records, trips, payments and outstanding amounts."],
  ["Is there a free trial?", "Yes. You can start with a 1-week free trial and explore LogiTrack before committing to a subscription."],
  ["What if I need help getting started?", "Our team can help you get started with LogiTrack and understand how to use the system for your transport operations."],
];

function Logo() {
  return <a href="#top" className="flex items-center gap-2.5 font-display text-xl font-bold text-foreground" aria-label="LogiTrack home"><span className="grid size-9 place-items-center rounded-md bg-primary text-primary-foreground"><Truck className="size-5" /></span>LOGI<span className="text-primary">TRACK</span></a>;
}

function StartButton({ inverse = false }: { inverse?: boolean }) {
  return <Button asChild size="lg" variant={inverse ? "secondary" : "default"}><a href="#choose">Start Free <ArrowRight /></a></Button>;
}

function DemoButton({ inverse = false }: { inverse?: boolean }) {
  return <Button asChild size="lg" variant={inverse ? "ghostOnDark" : "outline"}><a href="mailto:hello@logitrack.example?subject=LogiTrack%20Demo">Request a Demo <ArrowRight /></a></Button>;
}

function SectionHeader({ label, title, copy, centered = false }: { label: string; title: string; copy?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="section-label">{label}</p><h2 className="section-title">{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>;
}

function ScreenshotFrame({ label, alt, children, hero = false }: { label: string; alt: string; children?: ReactNode; hero?: boolean }) {
  return <figure className={`product-frame ${hero ? "product-frame-hero" : ""}`} aria-label={alt}>
    <div className="browser-bar"><span /><span /><span /><div className="browser-address">app.logitrack.in</div></div>
    <div className="product-placeholder">
      <div className="placeholder-mark"><FileSpreadsheet /></div>
      <p className="font-semibold text-foreground">{label}</p>
      <p className="mt-1 text-sm text-muted-foreground">Product screenshot placeholder</p>
      <p className="mt-3 max-w-sm text-xs text-muted-foreground">Replace with the supplied LogiTrack screenshot. No interface has been fabricated.</p>
      {children}
    </div>
  </figure>;
}

function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
    <div className="site-container flex h-18 items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
        <a href="#product">Product</a><a href="#workflow">How It Works</a><a href="#solutions">Solutions</a><a href="#choose">Pricing</a><a href="#faq">Resources</a>
      </nav>
      <div className="hidden items-center gap-2 lg:flex"><DemoButton /><StartButton /></div>
      <div className="flex items-center gap-2 lg:hidden"><Button asChild size="sm"><a href="#choose">Start Free</a></Button><Button variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</Button></div>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="flex flex-col gap-1">{[["Product","product"],["How It Works","workflow"],["Solutions","solutions"],["Pricing","choose"],["Resources","faq"]].map(([name,id]) => <a key={id} className="rounded-md px-3 py-3 font-medium hover:bg-muted" href={`#${id}`} onClick={() => setOpen(false)}>{name}</a>)}</div><div className="mt-4 grid grid-cols-2 gap-2"><DemoButton /><StartButton /></div></nav>}
  </header>;
}

function ProductSection({ id, label, title, copy, imageLabel, alt, reverse, children, transition }: { id: string; label: string; title: string; copy: string; imageLabel: string; alt: string; reverse?: boolean; children: ReactNode; transition: string }) {
  return <section id={id} className="section-pad scroll-mt-20 border-t border-border bg-background"><div className="site-container"><div className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}><div><SectionHeader label={label} title={title} copy={copy} />{children}</div><ScreenshotFrame label={imageLabel} alt={alt} /></div><p className="mt-16 border-t border-border pt-6 text-center text-sm font-medium text-muted-foreground">{transition}</p></div></section>;
}

function LogiTrackPage() {
  return <div id="top" className="min-h-screen bg-background text-foreground"><Nav /><main>
    <section id="product" className="relative overflow-hidden border-b border-border pt-18"><div className="hero-grid" /><div className="site-container grid min-h-[820px] items-center gap-14 py-20 lg:grid-cols-[.84fr_1.16fr] lg:py-24"><div className="relative z-10"><p className="section-label">Transport business management software</p><h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.04] tracking-normal sm:text-6xl xl:text-7xl">Your Trucks.<br />Your Trips.<br /><span className="text-primary">Your Money.</span><br />One Place.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Run your transport business without chasing information across WhatsApp, Excel and phone calls. Manage bookings, trips, expenses and customer payments in one simple system.</p><div className="mt-8 flex flex-wrap items-center gap-3"><StartButton /><DemoButton /></div><p className="mt-3 text-sm text-muted-foreground">1-week free trial · No commitment</p><div className="mt-10 border-t border-border pt-5"><p className="text-sm font-medium">Built around the way transport businesses work</p><p className="mt-2 text-sm text-muted-foreground">Trips · Expenses · Payments · Vehicles · Drivers</p></div></div><div className="relative"><ScreenshotFrame hero label="LogiTrack Dashboard" alt="Placeholder for the actual LogiTrack business dashboard screenshot"><div className="demo-insight"><span>Illustrative example</span><strong>Trip Profit</strong><b>₹43,000</b></div></ScreenshotFrame></div></div></section>

    <section className="section-pad bg-muted/50"><div className="site-container"><SectionHeader centered label="Sound familiar?" title="Your business is moving. But your information is everywhere." copy="Bookings come through WhatsApp. Drivers are coordinated over phone calls. Trip expenses end up in Excel. Bills are handled separately. And customer payments need constant follow-up." /><div className="scatter-grid mt-14">{[[MessageCircle,"WhatsApp"],[Phone,"Phone calls"],[FileSpreadsheet,"Excel"],[BookOpenCheck,"Tally"],[WalletCards,"Payment records"]].map(([Icon,name],i) => <div key={name as string} className={`scatter-card scatter-${i}`}><Icon className="size-5 text-primary" /><span>{name as string}</span></div>)}<div className="scatter-core"><span>The result?</span><strong>Too many places.<br />No single view.</strong></div></div><p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-8 text-muted-foreground">These tools are useful individually. But your transport business needs the information connected — without you having to connect it all yourself.</p></div></section>

    <section id="workflow" className="section-pad bg-foreground text-background"><div className="site-container"><SectionHeader centered label="One connected workflow" title="From booking to payment, everything stays connected." copy="LogiTrack connects every step of your trip — from booking and vehicle assignment to expenses, invoicing and customer payments — so you always know where the trip stands." /><div className="mt-14 grid gap-8 lg:grid-cols-[.72fr_1.28fr]"><div className="sticky top-28 h-fit rounded-lg border border-background/15 bg-background/5 p-7"><span className="demo-tag">Illustrative example</span><p className="mt-6 text-sm text-background/60">TRIP</p><h3 className="mt-1 font-display text-3xl font-bold">TRP-2026-013</h3><dl className="mt-7 grid gap-5 text-sm"><div><dt>Route</dt><dd>Karur → Mumbai</dd></div><div><dt>Customer</dt><dd>Jaihind Transport</dd></div><div><dt>Trip revenue</dt><dd>₹55,000</dd></div></dl></div><div className="workflow-line">{workflow.map(([num,title,q,Icon]) => <article key={num} className="workflow-step"><div className="step-icon"><Icon /></div><div><span>{num}</span><h3>{title}</h3><p>{q}</p></div></article>)}</div></div><div className="mt-14 text-center"><p className="text-sm font-bold uppercase tracking-[.18em] text-background/60">One trip. One complete record.</p><p className="mx-auto mt-3 max-w-2xl text-background/70">From the first booking to the final payment, LogiTrack keeps your trip information connected.</p><Button asChild variant="secondary" className="mt-7"><a href="#overview">See How LogiTrack Works <ArrowRight /></a></Button></div></div></section>

    <section id="overview" className="section-pad"><div className="site-container"><SectionHeader centered label="Your business. One view." title="See your transport business at a glance." copy="From active trips and revenue to expenses and profitability, LogiTrack gives you the information you need to understand your business without piecing it together yourself." /><div className="mt-12"><ScreenshotFrame label="LogiTrack Dashboard" alt="Placeholder for the actual LogiTrack dashboard screenshot showing a business overview" /></div><div className="mt-10 grid divide-y border-y border-border md:grid-cols-4 md:divide-x md:divide-y-0">{[[CircleDollarSign,"Trip profitability","Know what every trip made."],[WalletCards,"Customer payments","Know what's collected and pending."],[Truck,"Vehicle costs","Know what your trucks are costing."],[Users,"Driver payments","Know what's paid and payable."]].map(([Icon,t,c]) => <div key={t as string} className="outcome-block"><Icon /><h3>{t as string}</h3><p>{c as string}</p></div>)}</div><p className="mt-12 text-center text-lg font-medium">Once you can see the business, you can understand where the money is being made.</p></div></section>

    <ProductSection id="profit" label="Trip profitability" title="Know what every trip actually made." copy="Track trip revenue and expenses together, so you can see what each trip earned, what it cost, and what you actually made." imageLabel="LogiTrack Trip Details" alt="Placeholder for the actual LogiTrack Trip Details screenshot" transition="But a profitable trip isn't the same as money in the bank. What about the money your customers still owe you?">
      <div className="calculation mt-9"><span>Illustrative example</span><div><p><small>Trip revenue</small>₹55,000</p><i>−</i><p><small>Trip expenses</small>₹12,000</p><i>=</i><p className="positive"><small>Trip profit</small>₹43,000</p></div></div><p className="mt-7 font-semibold">Revenue tells you what you billed. Profit tells you what you made.</p><p className="mt-2 text-muted-foreground">Every expense stays attached to the trip it belongs to.</p>
    </ProductSection>

    <ProductSection id="payments" reverse label="Customer payments" title="Know who has paid — and who still owes you." copy="Keep customer bills and payments linked to the trips they belong to. See what's been collected, what's pending and what needs your attention." imageLabel="LogiTrack Customer Ledger" alt="Placeholder for the actual LogiTrack Customer Ledger screenshot" transition="And your revenue depends on the trucks that keep your business moving.">
      <div className="flow-chips mt-8"><span>Total billed</span><ArrowRight /><span className="positive-text">Received</span><ArrowRight /><span className="warning-text">Pending</span></div><p className="mt-7 font-display text-xl font-bold uppercase">See exactly where your money is stuck.</p><p className="mt-3 text-muted-foreground">A completed trip doesn't mean you've collected the money.</p>
    </ProductSection>

    <ProductSection id="solutions" label="Vehicle management" title="Keep every truck ready for the road — and know what it costs to keep it there." copy="Track vehicle expenses, maintenance, compliance and history in one place, so you know what needs attention and what each truck is costing your business." imageLabel="LogiTrack Vehicle 360" alt="Placeholder for the actual LogiTrack Vehicle 360 screenshot" transition="And every truck needs the right driver behind it.">
      <h3 className="mt-8 font-display text-xl font-bold">Know what each truck needs — before it becomes a problem.</h3><div className="label-row mt-5"><span>Expenses</span><span>Maintenance</span><span>Compliance</span><span>History</span></div><p className="mt-7 font-medium">Your trucks are your business. Keep them ready to earn.</p>
    </ProductSection>

    <ProductSection id="drivers" reverse label="Driver management" title="Know who's driving — and what you owe them." copy="Keep driver profiles, trip assignments and payments together, so you always know who is working, what you've paid and what is still payable." imageLabel="LogiTrack Driver Management" alt="Placeholder for the actual LogiTrack Driver Management screenshot" transition="Keep your drivers and your payments on track.">
      <div className="flow-chips mt-8"><span>Driver</span><ArrowRight /><span>Trips</span><ArrowRight /><span>Payments</span><ArrowRight /><span>Net payable</span></div><p className="mt-7 font-semibold">At the end of the month, do you know exactly what you owe each driver?</p><p className="mt-2 text-muted-foreground">LogiTrack gives you a clear view without going through notebooks, messages or spreadsheets.</p>
    </ProductSection>

    <section className="section-pad bg-muted/50"><div className="site-container"><SectionHeader centered label="Why LogiTrack" title="Built for the way transport businesses actually work." copy="LogiTrack brings your daily transport operations and financial information together in one simple system — without making your business more complicated." /><div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">{[["01","Simple","Simple enough to use every day.","Designed around everyday transport operations, without complicated software."],["02","Connected","Everything stays connected.","Trips, expenses, payments, vehicles and drivers stay connected to the work they belong to."],["03","Supported","When you need help, we're here.","From getting started to using LogiTrack every day, our team is there to help."]].map(([n,t,h,c]) => <article key={n} className="bg-background p-8"><span className="text-sm font-bold text-primary">{n}</span><h3 className="mt-8 font-display text-2xl font-bold">{t}</h3><p className="mt-4 font-semibold">{h}</p><p className="mt-2 leading-7 text-muted-foreground">{c}</p></article>)}</div><div className="mt-14 text-center"><h3 className="font-display text-3xl font-bold uppercase">Less chasing. More knowing.</h3><p className="mt-3 text-muted-foreground">Know what's happening. Know what you're spending. Know who owes you. Know what you owe.</p></div></div></section>

    <section id="choose" className="section-pad scroll-mt-20"><div className="site-container"><SectionHeader centered label="Choose the right fit" title="A simpler way to manage your transport business — whatever your scale." copy="Start with what your business needs today. Scale when you need to." /><div className="mt-14 grid gap-6 lg:grid-cols-2"><PlanCard lite /><PlanCard /></div><p className="mt-12 text-center font-display text-2xl font-bold uppercase">Start simple. Scale when you need to.</p><p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">LogiTrack grows with your transport business — giving you the right level of control without unnecessary complexity.</p></div></section>

    <section id="faq" className="section-pad bg-muted/50"><div className="site-container grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><div><SectionHeader label="Frequently asked questions" title="Have questions? We've got answers." /><div className="mt-8 rounded-lg bg-primary p-6 text-primary-foreground"><p className="font-display text-xl font-bold">Still have questions?</p><p className="mt-2 text-sm text-primary-foreground/75">Talk to our team and see how LogiTrack can fit your transport business.</p><Button asChild variant="secondary" className="mt-5"><a href="mailto:hello@logitrack.example?subject=LogiTrack%20Demo">Request a Demo <ArrowRight /></a></Button></div></div><Accordion type="single" collapsible className="border-t border-border">{faq.map(([q,a],i) => <AccordionItem value={`faq-${i}`} key={q}><AccordionTrigger className="py-6 text-left text-base">{q}</AccordionTrigger><AccordionContent className="max-w-2xl pb-6 leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section className="bg-foreground py-20 text-background"><div className="site-container text-center"><p className="section-label text-background/60">Ready to get started?</p><h2 className="mx-auto max-w-3xl font-display text-4xl font-bold sm:text-5xl">Run your transport business from one place.</h2><p className="mx-auto mt-6 max-w-2xl text-lg text-background/70">Stop chasing information across different places. Bring your trips, expenses, customer payments, vehicles and drivers together with LogiTrack.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><StartButton inverse /><DemoButton inverse /></div><p className="mt-3 text-sm text-background/60">1-week free trial · No commitment</p><div className="mx-auto mt-12 max-w-xl border-t border-background/15 pt-8"><p>Spend less time chasing information.<br />More time running your business.</p><p className="mt-6 font-display text-2xl font-bold">Your Trucks. Your Trips. Your Money. One Place.</p></div></div></section>
  </main><Footer /></div>;
}

function PlanCard({ lite = false }: { lite?: boolean }) {
  const items = lite ? ["Booking Management","Vehicle & Driver Assignment","Trip Management","Trip Revenue & Expenses","Customer Payments","Payment Pending Tracking","Optional Vehicle Module","Optional Driver Module"] : ["Advanced Operations","Finance & Payments","Fleet Management","Driver Management","Business Insights","More Control & Scalability"];
  return <article className={`plan-card ${lite ? "plan-featured" : ""}`}><div className="flex items-start justify-between"><div><p className="section-label">LogiTrack {lite ? "Lite" : "Pro"}</p><h3 className="mt-3 font-display text-3xl font-bold">{lite ? "Everything you need for everyday transport operations." : "More control for larger transport operations."}</h3></div>{lite && <span className="recommended">Start here</span>}</div><p className="mt-5 leading-7 text-muted-foreground">{lite ? "For truck owners and small fleet operators who want a simple way to manage trips, expenses and customer payments." : "For established transport companies that need deeper operational, financial and organizational control."}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{items.map(item => <div key={item} className="flex gap-2 text-sm"><Check className="mt-0.5 size-4 shrink-0 text-primary" />{item}</div>)}</div><div className="mt-9 border-t border-border pt-6"><p className="mb-5 text-sm text-muted-foreground">Pricing to be configured</p>{lite ? <><StartButton /><p className="mt-3 text-sm text-muted-foreground">1-week free trial · No commitment</p></> : <DemoButton />}</div></article>;
}

function Footer() {
  return <footer className="border-t border-border bg-background py-14"><div className="site-container"><div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5"><div className="lg:col-span-2"><Logo /><p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">Transport business management, made simpler.</p></div>{[["Product","LogiTrack Lite","LogiTrack Pro","Features","Pricing"],["Solutions & resources","How It Works","Vehicle Management","Driver Management","FAQs","Resources / Blog"],["Company & support","About","Contact","Request a Demo","Help / Support","Contact Support"]].map(([head,...links]) => <div key={head}><h3 className="text-sm font-bold">{head}</h3><ul className="mt-4 space-y-3 text-sm text-muted-foreground">{links.map(l => <li key={l}><a href={l === "Pricing" ? "#choose" : l === "FAQs" ? "#faq" : "#top"} className="hover:text-primary">{l}</a></li>)}</ul></div>)}</div><div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 LogiTrack. All rights reserved.</p><div className="flex gap-5"><span>Privacy Policy</span><span>Terms of Service</span></div></div></div></footer>;
}