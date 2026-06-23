
import PortfolioItem3D from "../../components/PortfolioItem3D";

export default function PortfolioSection() {
  return (
    <section className="port-section" id="portfolio">
        {/* Ambient BG */}
        <div className="port-bg" aria-hidden="true">
          <div className="port-orb port-orb-1" />
          <div className="port-orb port-orb-2" />
          <div className="port-orb port-orb-3" />
        </div>

        <div className="port-container">

          {/* ── Header ── */}
          <div className="port-header anim-fade-up">
            <span className="port-eyebrow">
              <span className="port-eyebrow-dot" />
              OUR PORTFOLIO
              <span className="port-eyebrow-dot" />
            </span>
            <h2 className="port-heading">
              Our Work,{' '}
              <span className="port-heading-gradient">Your Success</span>
            </h2>
            <p className="port-subheading">
              We create digital products that help businesses grow, scale and stand out in competitive markets.
            </p>
          </div>

          <PortfolioItem3D
            num="01"
            title="AI-Powered Analytics Dashboard"
            desc="A powerful analytics dashboard that provides real-time insights, data visualization, and AI-driven recommendations to help businesses make smarter decisions."
            features={[
              "Real-time data analytics",
              "AI-powered insights engine",
              "Custom reports generation",
              "Secure & scalable architecture"
            ]}
            imgSrc="/images/portfolio/project1.png"
            imgAlt="AI Analytics Dashboard"
            ctaLink="/portfolio"
            imagePosition="left"
            delayClass=""
          />

          <PortfolioItem3D
            num="02"
            title="E-Commerce Web Platform"
            desc="A modern e-commerce platform built for performance and scalability. It offers a seamless shopping experience with advanced features and secure payments."
            features={[
              "Modern & responsive design",
              "Secure payment integration",
              "Advanced product filtering",
              "Order tracking system"
            ]}
            imgSrc="/images/portfolio/project2.png"
            imgAlt="E-Commerce Platform"
            ctaLink="/portfolio"
            imagePosition="right"
            delayClass="delay-100"
          />

          <PortfolioItem3D
            num="03"
            title="Fitness Mobile Application"
            desc="A feature-rich fitness app that helps users track their workouts, monitor progress, and achieve their health goals with personalized plans."
            features={[
              "Personalized workout plans",
              "Progress tracking",
              "Nutrition & diet plans",
              "Push notifications & reminders"
            ]}
            imgSrc="/images/portfolio/project3.png"
            imgAlt="Fitness Mobile Application"
            ctaLink="/portfolio"
            imagePosition="left"
            delayClass="delay-200"
          />

        </div>
      </section>
  );
}
