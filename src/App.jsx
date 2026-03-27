import { useEffect } from "react";
import { siteData } from "./data/siteData";

const isExternalLink = (href = "") =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:");

function SmartLink({ href, label, className }) {
  const external = isExternalLink(href);

  return (
    <a
      className={className}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {label}
    </a>
  );
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default function App() {
  const {
    footerNote,
    intro,
    kicker,
    latestProject,
    name,
    passions,
    papers,
    photoCaption,
    primaryLink,
    profileImage,
    profileImageAlt,
    quickFacts,
    role,
    secondaryLink,
  } = siteData;

  useEffect(() => {
    document.title = `${name} | Personal Landing Page`;
  }, [name]);

  return (
    <div className="page-shell" id="top">
      <header className="hero section reveal delay-1">
        <div className="topbar">
          <a className="brand-mark" href="#top" aria-label="Back to top">
            Profile
          </a>
          <nav className="top-nav" aria-label="Main navigation">
            <a href="#project">Latest Project</a>
            <a href="#papers">Papers</a>
            <a href="#passions">Passions</a>
          </nav>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{kicker}</p>
            <h1>{name}</h1>
            <p className="hero-role">{role}</p>
            <p className="hero-intro">{intro}</p>

            <div className="hero-actions">
              <SmartLink
                className="button button-primary"
                href={primaryLink.href}
                label={primaryLink.label}
              />
              <SmartLink
                className="button button-secondary"
                href={secondaryLink.href}
                label={secondaryLink.label}
              />
            </div>

            <ul className="quick-facts" aria-label="Highlights">
              {quickFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </div>

          <aside className="portrait-card reveal delay-2">
            <div className="portrait-frame">
              <img src={profileImage} alt={profileImageAlt} />
            </div>
            <p className="portrait-caption">{photoCaption}</p>
          </aside>
        </div>
      </header>

      <main>
        <section className="section reveal delay-2" id="project">
          <SectionHeading eyebrow="Latest Project" title={latestProject.title} />

          <article className="project-card">
            <div className="project-meta">
              <span className="pill">{latestProject.status}</span>
              <span className="project-year">{latestProject.year}</span>
            </div>

            <p className="project-summary">{latestProject.summary}</p>
            <p className="project-impact">{latestProject.impact}</p>

            <div className="tag-row" aria-label="Project tags">
              {latestProject.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <SmartLink
              className="text-link"
              href={latestProject.href}
              label={latestProject.linkLabel}
            />
          </article>
        </section>

        <section className="section reveal delay-3" id="papers">
          <SectionHeading
            eyebrow="Selected Papers"
            title="Research and writing worth highlighting."
          />

          <div className="papers-grid">
            {papers.map((paper) => (
              <article className="paper-card" key={`${paper.title}-${paper.year}`}>
                <div className="paper-meta">
                  <span>{paper.venue}</span>
                  <span>&bull;</span>
                  <span>{paper.year}</span>
                </div>
                <h3 className="paper-title">{paper.title}</h3>
                <p className="paper-description">{paper.description}</p>
                <SmartLink
                  className="paper-link"
                  href={paper.href}
                  label={paper.linkLabel}
                />
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal delay-4" id="passions">
          <SectionHeading
            eyebrow="Passions"
            title="The ideas and communities that keep me curious."
          />

          <div className="passions-grid">
            {passions.map((passion) => (
              <article className="passion-card" key={passion.title}>
                <h3 className="passion-title">{passion.title}</h3>
                <p className="passion-description">{passion.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer reveal delay-4">
        <p>{footerNote}</p>
        <p className="footer-hint">
          Replace the placeholder content in <code>src/data/siteData.js</code> when you
          are ready.
        </p>
      </footer>
    </div>
  );
}
