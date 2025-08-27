import { Link } from "react-router";
// import { Welcome } from "../welcome/welcome";
import cardImage from "/images/web-cards/web-card-image-1.jpg";
import styles from "../styles/pages/home.module.scss";
import HalfOverlayCard from "../components/half-overlay-card";
import HeroComponent from "../components/hero-component";

export function meta() {
  return [
    { title: "ICare | Home" },
    { name: "description", content: "ICare – Supporting better care through intuitive tools." },
  ];
}

const BRAND_GREEN = "#5B7562";
const BRAND_GREEN_DARK = "#465C4D";

function Hero() {
  const heroSection = {
    position: "relative",
    minHeight: "560px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  };

  const heroImageStyle = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
    filter: "brightness(0.9)"
  };

  const heroOverlay = {
    position: "absolute",
    inset: 0,
    // background: `linear-gradient(215deg, rgba(91,117,98,0.78), rgba(70,92,77,0.78))`
  };

  const heroContent = {
    position: "relative",
    zIndex: 10,
    maxWidth: "820px",
    width: "100%",
    padding: "0 2rem",
    textAlign: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const heroH1 = {
    fontSize: "clamp(2.4rem,5vw,3.4rem)",
    margin: "0 0 1rem",
    lineHeight: 1.05,
    fontWeight: 700,
    textShadow: "0 2px 6px rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.94)",
  };

  const heroLead = {
    margin: "0 0 1.6rem",
    fontSize: "1.15rem",
    maxWidth: "680px",
    color: "rgba(255,255,255,0.94)",
    textShadow: "0 1px 3px rgba(0,0,0,0.35)"
  };

  const ctaBar = {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center"
  };

  const baseBtn = {
    border: "none",
    borderRadius: "10px",
    padding: "0.9rem 1.7rem",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: ".3px",
    transition: "background .25s, color .25s, border-color .25s, transform .15s",
    display: "inline-flex",
    alignItems: "center",
    gap: ".5rem"
  };

  const primaryBtn = {
    ...baseBtn,
    background: "#ffffff",
    color: BRAND_GREEN,
    boxShadow: "0 4px 18px -4px rgba(0,0,0,0.28)"
  };

  const secondaryBtn = {
    ...baseBtn,
    background: "rgba(255,255,255,0.12)",
    border: "2px solid rgba(255,255,255,0.6)",
    color: "#ffffff",
    backdropFilter: "blur(4px)"
  };

  return (
    <section style={heroSection} aria-label="Hero">
      <img src={cardImage} alt="People collaborating on coordinated care" style={heroImageStyle} />
      <div style={heroOverlay} />
      <div style={heroContent}>
        <h1 style={heroH1}>Care coordination made clear.</h1>
        <p style={heroLead}>
          Keep essential care information organized, current, and accessible—so attention stays where it matters most.
        </p>
        <div style={ctaBar}>
          <button
            style={primaryBtn}
            onMouseOver={e => (e.currentTarget.style.background = BRAND_GREEN, e.currentTarget.style.color = "#fff")}
            onMouseOut={e => (e.currentTarget.style.background = "#ffffff", e.currentTarget.style.color = BRAND_GREEN)}
          >
            Get Started
          </button>
          <button
            style={secondaryBtn}
            onMouseOver={e => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
            onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const layoutStyle = {
    fontFamily: "system-ui, -apple-system, Helvetica, Arial, sans-serif",
    margin: 0,
    padding: 0,
    lineHeight: 1.4,
    color: "#1b2533",
    backgroundColor: "#f7f9fb",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column"
  };

  const headerStyle = {
    background: "white",
    borderBottom: "1px solid #e2e8f0",
    padding: "0 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "64px",
    position: "sticky",
    top: 0
  };

  const brandStyle = {
    fontSize: "1.25rem",
    fontWeight: 600,
    letterSpacing: ".5px",
    color: "#0f4c81",
    textDecoration: "none"
  };

  const navStyle = {
    display: "flex",
    gap: "1.5rem"
  };

  const linkStyle = {
    textDecoration: "none",
    fontSize: ".95rem",
    fontWeight: 500,
    color: "#334155"
  };

  const linkHover = {
    color: "#0f4c81"
  };

  const mainStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: "3rem 2rem",
    maxWidth: "1180px",
    width: "100%",
    margin: "0 auto"
  };

  // const heroStyle = {
  //   display: "grid",
  //   gap: "2.5rem",
  //   gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  //   alignItems: "center"
  // };

  const heroStyle = {
    display: "grid",
    gap: "2.5rem",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    alignItems: "center",
    marginTop: "1rem"
  };

  const heroMediaStyle = {
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 8px 28px -6px rgba(15,23,42,0.15)"
  };

  const heroImageStyle = {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    aspectRatio: "4 / 3"
  };

  const heroTextStyle = {
    maxWidth: "560px"
    
  };

  const h1Style = {
    fontSize: "clamp(2.2rem,4.5vw,3.2rem)",
    margin: "0 0 1rem",
    lineHeight: 1.1,
    fontWeight: 700,
    color: "#0f172a"
  };

  const pStyle = {
    margin: "0 0 1.25rem",
    fontSize: "1.1rem",
    color: "#475569"
  };

  const ctaBarStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: ".5rem"
  };

  const primaryBtn = {
    background: "#0f4c81",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: ".85rem 1.4rem",
    fontSize: ".95rem",
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: ".3px"
  };

  const secondaryBtn = {
    background: "white",
    color: "#0f4c81",
    border: "1px solid #0f4c81",
    borderRadius: "6px",
    padding: ".85rem 1.4rem",
    fontSize: ".95rem",
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: ".3px"
  };

  const sectionStyle = {
    marginTop: "4rem",
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))"
  };

  const cardStyle = {
    background: "white",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: ".75rem",
    boxShadow: "0 2px 4px rgba(15,23,42,0.04)"
  };

  const smallTitle = {
    margin: 0,
    fontSize: "1rem",
    fontWeight: 600,
    color: "#0f4c81",
    letterSpacing: ".5px"
  };

  const footerStyle = {
    marginTop: "3rem",
    padding: "2.5rem 2rem",
    borderTop: "1px solid #e2e8f0",
    fontSize: ".8rem",
    color: "#64748b",
    background: "white"
  };

  const listReset = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    gap: ".75rem",
    flexWrap: "wrap"
  };

  // Simple layout variation (image first, then text). Reuses existing colors & button styles.
  const heroAltStyle = {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    alignItems: "center",
   marginTop: "3rem",
  };

  const heroStackStyle = {
    marginTop: "3rem",
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    alignItems: "center"  
  };

  const heroRowStyle = {
    marginTop: "3rem",
    display: "flex",
    gap: "2rem",
    alignItems: "stretch",
    flexWrap: "nowrap",
    // overflowX: "auto",
    paddingBottom: "0.5rem"
  };

  const heroItemStyle = {
    flex: "0 0 360px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  };

  const heroItemFigureStyle = {
    ...heroMediaStyle,
    margin: 0,
    borderRadius: "16px"
  };

  const heroItemImageStyle = {
    ...heroImageStyle,
    aspectRatio: "4 / 3",
    objectFit: "cover"
  };

  const heroItemTextStyle = {
    display: "flex",
    flexDirection: "column",
    gap: ".75rem"
  };

  return (
    <div style={layoutStyle}>
      <header style={headerStyle}>
        <Link to="/" style={brandStyle}>ICare</Link>
        <nav style={navStyle} aria-label="Main navigation">
          <Link to="/who-we-are" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHover)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>Who We Are</Link>
          <Link to="/how-it-works" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHover)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>How It Works</Link>
          <Link to="/privacy" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHover)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>Privacy</Link>
          <Link to="/icare-for-caregivers" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHover)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>ICare for Caregivers</Link>
          <Link to="/icare-for-carereceivers" style={linkStyle} onMouseOver={e => Object.assign(e.currentTarget.style, linkHover)} onMouseOut={e => Object.assign(e.currentTarget.style, linkStyle)}>ICare For Carereceivers</Link>
        </nav>
      </header>
      <HeroComponent />

      <main style={mainStyle}>
        <div style={heroStyle}>
          <div style={heroTextStyle}>
            <h1 style={h1Style}>Care coordination made clear.</h1>
            <p style={pStyle}>
              ICare helps teams and families keep critical care information organized, current, and accessible—so attention stays where it matters most.
            </p>
            <div style={ctaBarStyle}>
              <button style={primaryBtn}>Get Started</button>
              <button style={secondaryBtn}>Request Demo</button>
            </div>
          </div>
          <figure style={heroMediaStyle}>
            <img
              src={cardImage}
              alt="Care coordination illustration"
              style={heroImageStyle}
            />
          </figure>
        </div>

        <div style={heroAltStyle} aria-label="Alternate hero layout">
          <figure style={heroMediaStyle}>
            <img
              src={cardImage}
              alt="Care coordination tools"
              style={heroImageStyle}
            />
          </figure>
          <div style={heroTextStyle}>
            <h2 style={{ ...h1Style, fontSize: "clamp(1.9rem,4vw,2.6rem)", margin: "0 0 0.85rem" }}>
              Keep everyone aligned.
            </h2>
            <p style={pStyle}>
              A shared space for updates, notes, and actions—reducing duplication and helping care teams respond faster.
            </p>
            <div style={ctaBarStyle}>
              <button style={primaryBtn}>Create Account</button>
              <button style={secondaryBtn}>Learn More</button>
            </div>
          </div>
        </div>

        {/* <Hero /> */}

        <div style={heroRowStyle} aria-label="Repeated hero motif">
          {[ 
            { title: "Stay in sync.", body: "Live updates reduce back-and-forth and keep everyone current." },
            { title: "Reduce duplication.", body: "One shared place for notes, tasks, and follow‑ups." },
            { title: "Act sooner.", body: "Surface changes early so action can happen faster." }
          ].map(item => (
            <div key={item.title} style={heroItemStyle}>
              <figure style={heroItemFigureStyle}>
                <img
                  src={cardImage}
                  alt={item.title}
                  style={heroItemImageStyle}
                />
              </figure>
              <div style={heroItemTextStyle}>
                <h3 style={{ ...h1Style, fontSize: "1.35rem", margin: 0, lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ ...pStyle, margin: 0, fontSize: "1rem" }}>{item.body}</p>
                <div style={ctaBarStyle}>
                  <button style={primaryBtn}>Action</button>
                  <button style={secondaryBtn}>Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={heroStackStyle} aria-label="Stacked hero layout">
          <div style={{ ...heroTextStyle, textAlign: "center" }}>  {/* centered text only here */}
            <h2 style={{ ...h1Style, fontSize: "clamp(1.8rem,4vw,2.4rem)", margin: "0 0 0.75rem" }}>
              Clarity before complexity.
            </h2>
            <p style={{ ...pStyle, margin: "0 0 1rem" }}>
              Start with a concise overview, then drill into the details only when you need them—keeping care coordination lightweight.
            </p>
            <div style={{ ...ctaBarStyle, justifyContent: "center" }}>
              <button style={primaryBtn}>Try It Now</button>
              <button style={secondaryBtn}>See Features</button>
            </div>
          </div>
          <figure
            style={{
              ...heroMediaStyle,
              margin: 0,
              // maxWidth: "640px",
              borderRadius: "16px"
            }}
          >
            <img
              src={cardImage}
              alt="Overview snapshot"
              style={{
                ...heroImageStyle,
                aspectRatio: "16 / 9",   // reduced vertical size
                objectFit: "cover"
              }}
            />
          </figure>
        </div>
          <HalfOverlayCard />
        <section style={sectionStyle} aria-label="Highlights">
          <div style={cardStyle}>
            <h3 style={smallTitle}>Unified Records</h3>
            <p style={pStyle}>Centralize updates and reduce fragmented notes, messages, and spreadsheets.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={smallTitle}>Real-time Status</h3>
            <p style={pStyle}>Stay aligned with timely changes and activity logs across the care circle.</p>
          </div>
            <div style={cardStyle}>
            <h3 style={smallTitle}>Secure & Private</h3>
            <p style={pStyle}>Built with privacy-first principles and clear consent controls.</p>
          </div>
          <div style={cardStyle}>
            <h3 style={smallTitle}>Actionable Insights</h3>
            <p style={pStyle}>Surface patterns and tasks that help anticipate needs earlier.</p>
          </div>
        </section>
      </main>
    
      <Hero />

      <footer style={footerStyle}>
        <ul style={listReset}>
          <li><Link to="/who-we-are" style={linkStyle}>Who We Are</Link></li>
          <li><Link to="/how-it-works" style={linkStyle}>How It Works</Link></li>
          <li><Link to="/privacy" style={linkStyle}>Privacy</Link></li>
        </ul>
        <div style={{ marginTop: ".75rem" }}>
          © {new Date().getFullYear()} ICare. All rights reserved.
        </div>
      </footer>
    </div>
  );
}