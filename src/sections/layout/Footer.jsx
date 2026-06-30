
export default function Footer() {
  return (
    <footer className="footer-section">
        <div className="footer-glow" aria-hidden="true" />
        <div className="footer-container">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand anim-footer-lift delay-100">
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
                <a href="https://www.instagram.com/digital_code_solution/" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                </a>
                <a href="#" className="footer-social" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61590988388658" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="footer-links-group anim-footer-lift delay-200">
              <span className="footer-links-title">Services</span>
              <ul className="footer-links-list">
                <li><a href="/services/web-development">Web Development</a></li>
                <li><a href="/services/app-development">App Development</a></li>
                <li><a href="/services/ai-chatbot">AI Chatbot Dev</a></li>
                <li><a href="/services/game-development">Game Development</a></li>
                <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
                <li><a href="/services/graphic-design">Graphic Design</a></li>
              </ul>
            </div>
            <div className="footer-links-group anim-footer-lift delay-300">
              <span className="footer-links-title">Company</span>
              <ul className="footer-links-list">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Portfolio</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links-group anim-footer-lift delay-400">
              <span className="footer-links-title">Legal</span>
              <ul className="footer-links-list">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom anim-footer-lift delay-500">
            <p className="footer-copy">
              © 2026 Digital Code Solution. All rights reserved. Designed by Muhammad Mohib or Muhammad Muneeb
            </p>
          </div>
        </div>
      </footer>
  );
}
