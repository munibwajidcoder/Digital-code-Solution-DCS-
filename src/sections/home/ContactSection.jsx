
export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
        <div className="contact-bg" aria-hidden="true">
          <div className="contact-orb contact-orb-1" />
          <div className="contact-orb contact-orb-2" />
        </div>
        <div className="contact-container">
          <div className="contact-inner">
            {/* Left Info */}
            <div className="contact-info">
              <span className="contact-eyebrow anim-3d-slide-left">
                <span className="contact-eyebrow-dot" />
                GET IN TOUCH
              </span>
              <h2 className="contact-heading anim-3d-slide-left delay-100">
                Let's Build Something <span className="contact-heading-gradient">Amazing Together</span>
              </h2>
              <p className="contact-desc anim-3d-slide-left delay-200">
                Have a project in mind? We'd love to hear about it. Drop us a message and our team will get back to you within 24 hours.
              </p>
              <div className="contact-details">
                <div className="contact-detail-item anim-3d-slide-left delay-300">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Email Us</span>
                    <span className="contact-detail-value">digitalcodesolution.company@gmail.com</span>
                  </div>
                </div>
                <div className="contact-detail-item anim-3d-slide-left delay-400">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Call Us</span>
                    <span className="contact-detail-value">+92 370 302 2622</span>
                  </div>
                </div>
                <div className="contact-detail-item anim-3d-slide-left delay-500">
                  <div className="contact-detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <span className="contact-detail-label">Location</span>
                    <span className="contact-detail-value">Karachi, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              <form className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field anim-3d-slide-right delay-100">
                    <label className="contact-label">Your Name</label>
                    <input type="text" className="contact-input" placeholder="John Doe" />
                  </div>
                  <div className="contact-field anim-3d-slide-right delay-200">
                    <label className="contact-label">Email Address</label>
                    <input type="email" className="contact-input" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="contact-field anim-3d-slide-right delay-300">
                  <label className="contact-label">Subject</label>
                  <input type="text" className="contact-input" placeholder="Project Inquiry" />
                </div>
                <div className="contact-field anim-3d-slide-right delay-400">
                  <label className="contact-label">Message</label>
                  <textarea className="contact-textarea" rows="5" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" className="contact-submit-btn anim-3d-slide-right delay-500">
                  Send Message
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
