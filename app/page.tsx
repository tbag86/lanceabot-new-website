"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  ChevronDown,
  Headset,
  Landmark,
  Menu,
  Network,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroPoster =
  "https://images.pexels.com/photos/32592652/pexels-photo-32592652.jpeg?auto=compress&cs=tinysrgb&w=1800";
const heroVideo = "https://www.pexels.com/download/video/32331014/";
const proofMark =
  "https://framerusercontent.com/images/azNwucdErTEAVLQOfQPC5jIxfRQ.png?width=608&height=726";

const services: Array<[string, string, string, LucideIcon]> = [
  ["AI Agents & Agentic Chatbots", "Human-guarded agents that answer, triage, update systems and complete work without losing judgement or auditability.", "https://framerusercontent.com/images/QVBkxiid8ehzKaX0hl7J7NPCaU.jpg?width=1280&height=855", Bot],
  ["CRM & Sales Automation", "Inbound leads scored, routed, followed up and booked into the right sales process with clear human checkpoints.", "https://framerusercontent.com/images/axG0epCQ9JWsiTA7pPGHXRkP9M.jpg?width=1280&height=853", BriefcaseBusiness],
  ["Finance & Admin Automation", "Back-office workflows for document handling, reconciliation, reporting and controlled task completion.", "https://framerusercontent.com/images/noIctrfXM37L91OLw5oeuHWXIU.jpg?width=1280&height=721", Landmark],
  ["Digital Marketing Automation", "Campaign agents that research, draft, segment, report and improve marketing operations across channels.", "https://framerusercontent.com/images/OJrHmFSJufC66vw2ts50yynFA.jpg?width=1280&height=853", Sparkles],
  ["AI Voice & Appointment Booking", "Voice, WhatsApp, SMS and email agents that qualify enquiries, book appointments and keep CRM records current.", "https://framerusercontent.com/images/BH1CWEtxaVtqw0XMFUBkAjUBNxA.jpg?width=640&height=427", Headset],
  ["Dashboards & Knowledge Bases", "Internal AI assistants, BI dashboards and searchable company knowledge that give staff faster answers.", "https://framerusercontent.com/images/kdHxkDJ63URfEZbSfBPksti5P7Y.jpg?width=1279&height=854", BarChart3],
];

const approach: Array<[string, string, string]> = [
  ["Strategise", "We map the workflow, risks, systems, data sources and business rules before a single automation is deployed.", "https://framerusercontent.com/images/Z9BaEGtULXDSvmUhhRc4qvA6Q.jpg?width=1920&height=1280"],
  ["Build", "Our team develops the agent logic, integrations, prompts, tools, approval paths and evaluation checks around the real operation.", "https://framerusercontent.com/images/hd9vgZTRwo1HooIBcnq4mdoFsRs.jpg?width=1920&height=1280"],
  ["Operate", "Senior human operators monitor performance, review edge cases, tune behaviour and keep the service accurate after launch.", "https://framerusercontent.com/images/gc6oxVj75iAC0q1oMp12gy8CF4E.jpg?width=1920&height=1280"],
];

const caseStudies: Array<[string, string, string]> = [
  [
    "https://framerusercontent.com/images/73BI8rX1oMVGDR8qlk5Z1TyIPU.jpg?width=1920&height=1280",
    "CRM",
    "Lead booking automation",
  ],
  [
    "https://framerusercontent.com/images/noIctrfXM37L91OLw5oeuHWXIU.jpg?width=1280&height=721",
    "Ops",
    "Document checks",
  ],
  [
    "https://framerusercontent.com/images/azNwucdErTEAVLQOfQPC5jIxfRQ.png?width=608&height=726",
    "BI",
    "Dashboards & insight",
  ],
];

const faqs = [
  ["What does Lanceabot actually build?", "Managed AI agents that complete operational work: answering enquiries, updating CRMs, checking documents, booking appointments, producing reports and escalating edge cases to people."],
  ["Is this just a chatbot?", "No. A chatbot mainly replies. An agent can use tools, follow business rules, update systems, request approval and continue a workflow across channels."],
  ["How do humans stay in control?", "Every workflow has guardrails, review points and performance monitoring. Senior operators inspect exceptions, tune the agent and keep governance visible."],
  ["Who is Lanceabot for?", "UK businesses, especially Manchester-based teams, that want to agentify high-volume operational work without giving up visibility or judgement."],
  ["Can clients visit the team?", "Yes. Lanceabot is based in Manchester, so local clients can plan and review projects with the team in person."],
  ["Do you publish reviews?", "A Trustpilot-ready review section is prepared but hidden until there is a stronger public profile. Testimonials can be added sooner."],
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Lanceabot home">
      <Image src="/assets/lanceabot-logo.png" alt="Lanceabot" width={168} height={30} priority />
    </a>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main id="top">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <Brand />
        <nav className="desktop-nav" aria-label="Primary">
          {["Services", "Approach", "Case Studies", "About", "Blog"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Instant Audit</a>
        <button className="menu-button" type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <nav className="mobile-panel" aria-label="Mobile">
          {["Services", "Approach", "Case Studies", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`} onClick={() => setOpen(false)}>{item}</a>
          ))}
        </nav>
      )}

      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster={heroPoster}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-marquee" aria-hidden="true">
            <div>{["Agents", "Guardrails", "Manchester", "Workflows", "AI", "Operators"].map((word, index) => <span key={`${word}-${index}`}>{word}</span>)}</div>
          </div>
          <p>Human-guarded AI agents for Manchester businesses that want real operational work handled at volume.</p>
          <a className="down" href="#impact" aria-label="Scroll to impact"><ArrowDown /></a>
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="logo-strip" aria-label="Core services">
          {["AI Agents", "CRM", "Finance", "Marketing", "Voice", "Dashboards"].map((item) => <span key={item}>{item}</span>)}
        </div>
        <div className="impact-copy">
          <span className="eyebrow">Human-guarded AI</span>
          <h1>Your agent handles the volume. Senior humans keep control.</h1>
          <p>
            Lanceabot designs, deploys and manages AI agents for UK businesses. Each service is strategised, developed,
            trained, maintained and secured by our Manchester-based team, with guardrails and review paths built around
            real business workflows.
          </p>
          <Image
            className="impact-icon"
            src={proofMark}
            alt=""
            width={40}
            height={40}
          />
        </div>
      </section>

      <section className="section sectors" id="services">
        <div className="section-top">
          <div>
            <span className="eyebrow"><Network size={16} /> AI Services</span>
            <h1>Agentic AI services for everyday operations.</h1>
          </div>
          <div className="section-intro">
            <p>
              We build useful AI for daily work: lead handling, admin, finance, marketing, recruitment, ecommerce,
              internal knowledge and staff support. The output is not a demo. It is a managed workflow with ownership.
            </p>
            <a className="soft-button" href="#contact">Request an audit</a>
          </div>
        </div>
        <div className="sector-grid">
          {services.map(([title, copy, image, Icon]) => (
            <article className="sector-card" key={title}>
              <Image src={image} alt="" width={420} height={282} />
              <div><Icon size={23} strokeWidth={1.75} /><h2>{title}</h2><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section approach" id="approach">
        <aside>
          <span className="eyebrow">Approach</span>
          <h1>Built around the way the business actually works.</h1>
          <p>
            Lanceabot starts with the workflow, not the model. We define the task, decision points, permissions,
            failure handling and human review before moving into build and operation.
          </p>
          <a className="text-button" href="#contact">Plan a workflow <ArrowUpRight size={16} /></a>
          <ul><li>Strategise</li><li>Build</li><li>Operate</li></ul>
        </aside>
        <div className="approach-cards">
          {approach.map(([title, copy, image]) => (
            <article key={title}>
              <Image src={image} alt="" width={760} height={506} />
              <span>{title}</span><h2>{title}</h2><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section results" id="case-studies">
        <div className="section-top">
          <div><span className="eyebrow">Case Studies</span><h1>Shipped agent systems across real businesses.</h1></div>
          <div className="section-intro">
            <p>These projects show the breadth of what agentic AI can do when it is attached to operational systems, channels and human oversight.</p>
            <a className="soft-button" href="#contact">Discuss a project</a>
          </div>
        </div>
        <div className="result-cards">
          {caseStudies.map(([image, value, label]) => (
            <article key={label}>
              <Image src={image} alt="" fill sizes="(max-width: 900px) 100vw, 33vw" />
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <span className="eyebrow">About</span>
        <h1>Manchester-based AI operators for UK business workflows.</h1>
        <p>
          Lanceabot is a team of experts specialising in agentic AI and practical AI solutions for UK organisations.
          Having an office in Manchester means local clients can come in, map the workflow with us and keep strategy,
          governance and delivery close to the people responsible for the outcome.
        </p>
      </section>

      <section className="section faq" id="blog">
        <div className="section-top">
          <div><span className="eyebrow">FAQs</span><h1>Clear answers before you agentify a workflow</h1><p>Useful AI needs governance, system access, strong prompts, evaluation checks and human ownership.</p></div>
          <a className="soft-button" href="#contact">Connect with the team</a>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>
          ))}
        </div>
      </section>

      <section className="section testimonials" hidden>
        <h1>Client reviews</h1>
        <p>Trustpilot and testimonial cards are ready to enable when the public review profile is strong enough.</p>
      </section>

      <section className="closing" id="contact">
        <h1>Start with an instant audit</h1>
        <p>Tell us which workflow carries the most manual load. We will identify where an agent can help, what needs human review and what should stay manual.</p>
        <a className="light-button" href="mailto:info@lanceabot.ai">Request an audit</a>
      </section>

      <footer><Brand /><span>info@lanceabot.ai</span></footer>
    </main>
  );
}
