
export default function Footer() {
  return (
    <footer className="footer-section">
        <div className="footer-glow" aria-hidden="true" />
        <div className="footer-container">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <img src="/images/logo.png" alt="DCS Logo" style={{ width: '44px', height: 'auto', filter: 'drop-shadow(0 0 8px rgba(122,34,255,0.5))' }} />
                <div>
                  <div className="footer-logo-name">Digital <span className="footer-logo-accent">Code</span> Solution</div>
                  <div className="footer-logo-tag">Premium Digital Agency</div>
                </div>
              </a>
              <p className="footer-brand-desc">
                We craft exceptional digital experiences that help businesses grow, scale, and stand out in competitive markets.
              </p>
              <div className="footer-socials">
                <a href="#" className="footer-social" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="footer-links-group">
              <span className="footer-links-title">Services</span>
              <ul className="footer-links-list">
                <li><a href="/services">Web Development</a></li>
                <li><a href="/services">Mobile App Dev</a></li>
                <li><a href="/services">UI/UX Design</a></li>
                <li><a href="/services">Graphic Design</a></li>
                <li><a href="/services">Backend & AI</a></li>
              </ul>
            </div>
            <div className="footer-links-group">
              <span className="footer-links-title">Company</span>
              <ul className="footer-links-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Portfolio</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-group">
              <span className="footer-links-title">Legal</span>
              <ul className="footer-links-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">© 2025 Digital Code Solution. All rights reserved.</p>
            <p className="footer-made">Crafted with ❤️ in Pakistan</p>
          </div>
        </div>
      </footer>
  );
}
