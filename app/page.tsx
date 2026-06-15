"use client";

import {
  ArrowDown,
  ArrowUpRight,
  BadgeDollarSign,
  Building2,
  ChevronDown,
  Cpu,
  HeartPulse,
  Landmark,
  Menu,
  Network,
  ShoppingCart,
  X,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImage =
  "https://framerusercontent.com/images/wtarLxU3QED0f477gxKt92NiqU.png?width=3024&height=1630";
const heroVideo = "https://www.pexels.com/download/video/5601649/";
const crestmarkLogo =
  "https://framerusercontent.com/images/hCagLVLYCG4DTOiGRNgRqRD1x28.png?width=800&height=192";

const partnerLogos = [
  "https://framerusercontent.com/images/wPioATL25UJIIbxXvmvw3a5ySI.png?width=546&height=144",
  "https://framerusercontent.com/images/h7DwpC7aCAKoJ7ZzygiB6M2Y.png?width=510&height=144",
  "https://framerusercontent.com/images/m7DtWrTgpxVITtHmuAOHPdKt6Q0.png?width=606&height=144",
  "https://framerusercontent.com/images/72oHMiPONLkcUGvBq6F4xc7k774.png?width=489&height=144",
  "https://framerusercontent.com/images/7KPuycjxARyv01XCAJ6jLiZJw.png?width=567&height=144",
  "https://framerusercontent.com/images/TSY3i1Dkv7PTlxmIwfB2hViJ6Q.png?width=534&height=144",
];

const sectors: Array<[string, string, string, LucideIcon]> = [
  [
    "Healthcare",
    "Innovative platforms improving access, efficiency, and patient outcomes.",
    "https://framerusercontent.com/images/QVBkxiid8ehzKaX0hl7J7NPCaU.jpg?width=1280&height=855",
    HeartPulse,
  ],
  [
    "Industrial",
    "Specialized operators expanding through technology and operational modernization.",
    "https://framerusercontent.com/images/axG0epCQ9JWsiTA7pPGHXRkP9M.jpg?width=1280&height=853",
    Building2,
  ],
  [
    "Business services",
    "Scalable service models with recurring revenue and strong client retention.",
    "https://framerusercontent.com/images/noIctrfXM37L91OLw5oeuHWXIU.jpg?width=1280&height=721",
    Landmark,
  ],
  [
    "Technology-enabled services",
    "Data-driven platforms transforming traditional industries.",
    "https://framerusercontent.com/images/OJrHmFSJufC66vw2ts50yynFA.jpg?width=1280&height=853",
    Cpu,
  ],
  [
    "Financial services",
    "Growth-oriented firms leveraging digital infrastructure and market expansion.",
    "https://framerusercontent.com/images/BH1CWEtxaVtqw0XMFUBkAjUBNxA.jpg?width=640&height=427",
    BadgeDollarSign,
  ],
  [
    "Consumer essentials",
    "Brands scaling nationally with strong loyalty and repeat demand.",
    "https://framerusercontent.com/images/kdHxkDJ63URfEZbSfBPksti5P7Y.jpg?width=1279&height=854",
    ShoppingCart,
  ],
];

const approach: Array<[string, string, string]> = [
  [
    "Source",
    "We identify resilient businesses in fragmented markets where operational discipline can create long-term value.",
    "https://framerusercontent.com/images/Z9BaEGtULXDSvmUhhRc4qvA6Q.jpg?width=1920&height=1280",
  ],
  [
    "Acquire",
    "We partner with founders and management teams through a practical, transparent transaction process.",
    "https://framerusercontent.com/images/hd9vgZTRwo1HooIBcnq4mdoFsRs.jpg?width=1920&height=1280",
  ],
  [
    "Scale",
    "We invest in people, systems and strategy to compound performance over time.",
    "https://framerusercontent.com/images/gc6oxVj75iAC0q1oMp12gy8CF4E.jpg?width=1920&height=1280",
  ],
];

const results: Array<[string, string, string]> = [
  [
    "https://framerusercontent.com/images/73BI8rX1oMVGDR8qlk5Z1TyIPU.jpg?width=1920&height=1280",
    "+65%",
    "Operational efficiency",
  ],
  [
    "https://framerusercontent.com/images/noIctrfXM37L91OLw5oeuHWXIU.jpg?width=1280&height=721",
    "2.5x",
    "Revenue growth",
  ],
  [
    "https://framerusercontent.com/images/azNwucdErTEAVLQOfQPC5jIxfRQ.png?width=608&height=726",
    "+120%",
    "Customer expansion",
  ],
];

const faqs = [
  "What types of companies does Crestmark acquire?",
  "How does Crestmark work with founders?",
  "What makes a business attractive to Crestmark?",
  "Does Crestmark take a long-term ownership view?",
  "How involved is Crestmark after acquisition?",
  "How do we start a conversation?",
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Crestmark home">
      <Image src={crestmarkLogo} alt="Crestmark logo" width={140} height={34} priority />
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
          {["Impact", "Sectors", "Approach", "Results", "About"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">
          Partner with us
        </a>
        <button className="menu-button" type="button" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <nav className="mobile-panel" aria-label="Mobile">
          {["Impact", "Sectors", "Approach", "Results", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
      )}

      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline poster={heroImage}>
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-marquee" aria-hidden="true">
            <div>
              {["Capital", "Returns", "Execution", "Partnership", "Capital", "Returns"].map((word, index) => (
                <span key={`${word}-${index}`}>{word}</span>
              ))}
            </div>
          </div>
          <p>
            Crestmark is a private equity firm focused on acquiring and scaling market-leading businesses through
            disciplined capital allocation and operational excellence.
          </p>
          <a className="down" href="#impact" aria-label="Scroll to impact">
            <ArrowDown />
          </a>
        </div>
      </section>

      <section className="impact" id="impact">
        <div className="logo-strip" aria-label="Portfolio companies">
          {partnerLogos.map((logo, index) => (
            <Image key={logo} src={logo} alt="" width={120} height={32} />
          ))}
        </div>
        <div className="impact-copy">
          <span className="eyebrow">Impact</span>
          <h1>Partnering with founders to build enduring market leaders.</h1>
          <p>
            Crestmark invests in resilient businesses with strong fundamentals and works closely with leadership teams
            to compound value through strategy, systems and execution.
          </p>
          <Image
            className="impact-icon"
            src="https://framerusercontent.com/images/azNwucdErTEAVLQOfQPC5jIxfRQ.png?width=608&height=726"
            alt=""
            width={40}
            height={40}
          />
        </div>
      </section>

      <section className="section sectors" id="sectors">
        <div className="section-top">
          <div>
            <span className="eyebrow">
              <Network size={16} /> Sectors
            </span>
            <h1>Strategic investments across core industries.</h1>
          </div>
          <div className="section-intro">
            <p>
              We at Crestmark prioritize industries with durable demand, scalable operations, and the experienced teams
              positioned for growth.
            </p>
            <a className="soft-button" href="#contact">
              Start a conversation
            </a>
          </div>
        </div>
        <div className="sector-grid">
          {sectors.map(([title, copy, image, Icon]) => (
            <article className="sector-card" key={title as string}>
              <Image src={image as string} alt="" width={420} height={282} />
              <div>
                <Icon size={23} strokeWidth={1.75} />
                <h2>{title}</h2>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section approach" id="approach">
        <aside>
          <span className="eyebrow">Approach</span>
          <h1>Built for long-term value.</h1>
          <p>
            Our process combines careful market selection, respectful founder partnerships and operational focus after
            acquisition.
          </p>
          <a className="text-button" href="#contact">
            Discuss an opportunity <ArrowUpRight size={16} />
          </a>
          <ul>
            <li>Source</li>
            <li>Acquire</li>
            <li>Scale</li>
          </ul>
        </aside>
        <div className="approach-cards">
          {approach.map(([title, copy, image]) => (
            <article key={title as string}>
              <Image src={image as string} alt="" width={760} height={506} />
              <span>{title}</span>
              <h2>{title}</h2>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section results" id="results">
        <div className="section-top">
          <div>
            <span className="eyebrow">Results</span>
            <h1>Delivering growth across portfolio companies.</h1>
          </div>
          <div className="section-intro">
            <p>
              Through disciplined capital allocation and hands-on operating support, Crestmark helps teams compound
              performance.
            </p>
            <a className="soft-button" href="#contact">
              Submit an inquiry
            </a>
          </div>
        </div>
        <div className="result-cards">
          {results.map(([image, value, label]) => (
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
        <h1>You can always count on us during your journey.</h1>
        <p>
          Crestmark partners with resilient businesses and experienced operators to build enduring companies with
          stronger systems, sharper strategy and disciplined execution.
        </p>
      </section>

      <section className="section faq">
        <div className="section-top">
          <div>
            <span className="eyebrow">FAQs</span>
            <h1>Frequently asked questions</h1>
            <p>Clear answers on acquisitions, partnership fit, ownership style and next steps.</p>
          </div>
          <a className="soft-button" href="#contact">
            Connect with our team
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item}>
              <summary>
                {item}
                <ChevronDown size={18} />
              </summary>
              <p>
                We start with a practical conversation, review the business context and agree whether there is a strong
                fit before moving into deeper diligence.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="closing" id="contact">
        <h1>Building enduring partnerships</h1>
        <p>Share the opportunity and our team will respond with a clear next step.</p>
        <a className="light-button" href="mailto:info@example.com">
          Partner with us
        </a>
      </section>

      <footer>
        <Brand />
        <span>hello@crestmark.com</span>
      </footer>
    </main>
  );
}
