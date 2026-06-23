import { NAV_LINKS } from "../../constants/navigation";

export default function Navbar({ activePath = "/" }) {
  return (
    <div className="nav-pill-outer">
      <header className="nav-container anim-3d-reveal">
        <a href="/" className="logo-brand">
          <div className="logo-img-wrap">
            <img src="/images/logo.png" alt="DCS Logo" className="logo-img" />
          </div>
          <div className="logo-text-wrap">
            <span className="logo-line">
              Digital <span className="logo-accent">Code</span>
            </span>
            <span className="logo-line">Solution</span>
          </div>
        </a>

        <nav className="nav-menu-wrapper" aria-label="Primary navigation">
          <ul className="nav-menu-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-menu-link${
                    (activePath === "/" && link.label === "Home") ||
                    (activePath !== "/" && link.href === activePath)
                      ? " active"
                      : ""
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn-nav-cta">
          <span>Get In Touch</span>
          <span className="btn-nav-cta-glow" />
        </a>
      </header>
    </div>
  );
}
