import { useEffect } from "react";
import { siteData } from "./data/siteData";

const isExternalLink = (href = "") =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:");

function SmartLink({ href, label, className }) {
  if (!href || !label) {
    return null;
  }

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
    intro,
    kicker,
    name,
    passions,
    papers,
    photoCaption,
    primaryLink,
    projects = [],
    profileImage,
    profileImageAlt,
    quickFacts,
    role,
    secondaryLink,
  } = siteData;
  const [latestProject, ...otherProjects] = projects;
  const featuredProject = latestProject ?? {
    title: "Add your first project",
    status: "Coming soon",
    year: "",
    summary:
      "Add at least one project in src/data/siteData.js to feature it here on the landing page.",
    impact: "",
    tags: [],
  };

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
          <SectionHeading eyebrow="Latest Project" title={featuredProject.title} />

          <article className="project-card">
            <div className="project-meta">
              <span className="pill">{featuredProject.status}</span>
              <span className="project-year">{featuredProject.year}</span>
            </div>

            <p className="project-summary">{featuredProject.summary}</p>
            <p className="project-impact">{featuredProject.impact}</p>

            <div className="tag-row" aria-label="Project tags">
              {featuredProject.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>

            <SmartLink
              className="text-link"
              href={featuredProject.href}
              label={featuredProject.linkLabel}
            />
          </article>

          {otherProjects.length > 0 ? (
            <div className="more-projects">
              <p className="subsection-label">More Projects</p>
              <div className="projects-grid">
                {otherProjects.map((project) => (
                  <article
                    className="project-card project-card-compact"
                    key={`${project.title}-${project.year}`}
                  >
                    <div className="project-meta">
                      <span className="pill">{project.status}</span>
                      <span className="project-year">{project.year}</span>
                    </div>

                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <p className="project-impact">{project.impact}</p>

                    <div className="tag-row" aria-label="Project tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <SmartLink
                      className="text-link"
                      href={project.href}
                      label={project.linkLabel}
                    />
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </section>

        <section className="section reveal delay-3" id="papers">
          <SectionHeading
            eyebrow="Selected Papers"
            title="Research and writing worth highlighting."
          />

          <div className="papers-grid">
            {papers.map((paper) => (
              <article
                className={`paper-card${paper.firstAuthor ? " paper-card-featured" : ""}`}
                key={`${paper.title}-${paper.year}`}
              >
                <div className="paper-meta">
                  <span>{paper.venue}</span>
                  <span>&bull;</span>
                  <span>{paper.year}</span>
                  {paper.firstAuthor ? <span className="paper-badge">First author</span> : null}
                </div>
                <h3 className="paper-title">
                  {paper.href ? (
                    <a
                      className="paper-title-link"
                      href={paper.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {paper.title}
                    </a>
                  ) : (
                    paper.title
                  )}
                </h3>
                <p className="paper-description">{paper.description}</p>
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

    </div>
  );
}
