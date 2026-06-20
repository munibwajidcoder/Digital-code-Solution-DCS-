import "./globals.css";
import CustomCursor from "../components/CustomCursor";

export const metadata = {
  title: "Digital Code Solution (DCS) | We Build Modern Websites, Apps & Digital Products",
  description: "At Digital Code Solution (DCS), we transform ambitious ideas into powerful digital products. We help businesses grow through premium design, scalable development, AI-powered solutions, and modern digital experiences.",
  keywords: "web development, mobile apps, software agency, digital products, AI solutions, UI/UX design, Next.js, React developer",
  authors: [{ name: "Digital Code Solution" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CustomCursor />
        <div className="bg-glow-container" />
        {children}
      </body>
    </html>
  );
}
