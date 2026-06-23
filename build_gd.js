const fs = require('fs');

let content = fs.readFileSync('src/app/services/ui-ux-design/UiUxPageClient.jsx', 'utf8');

// Replace Component Name
content = content.replace(/UiUxPageClient/g, 'GraphicDesignPageClient');

// Replace Hero Section
content = content.replace('UI/UX DESIGN & PROTOTYPING SERVICES', 'GRAPHIC DESIGN & BRANDING SERVICES');
content = content.replace('We Design Interfaces That Users <span className="text-gradient-purple">Love</span>', 'Create A Brand That People <span className="text-gradient-purple">Remember</span>');
content = content.replace('Premium user experiences, pixel-perfect interfaces, and interactive Figma prototypes designed to maximize conversions, engagement, and user satisfaction.', 'Premium visual identities, striking marketing materials, and cohesive brand systems designed to leave a lasting impression on your audience.');
content = content.replace(/>Website UI Design</g, '>Visual Identities<');
content = content.replace(/>Mobile App UX</g, '>Marketing Materials<');
content = content.replace(/>SaaS Dashboards</g, '>Packaging Systems<');
content = content.replace(/>Interactive Prototyping</g, '>Consistent Brand Assets<');

// Replace Stats Ribbon
content = content.replace('150+ UI/UX Projects Completed', '250+ Creative Projects Completed');
// 98% Happy Clients is the same
content = content.replace('500+ Prototypes Delivered', '10K+ Designs Delivered');
content = content.replace('100+ Applications Transformed', '100+ Brands Transformed');

// Replace Services Grid title
content = content.replace('UI/UX Design <span className="svc-heading-gradient">Services</span>', 'Branding <span className="svc-heading-gradient">Services</span>');
content = content.replace('From wireframing to high-fidelity clickable prototypes, we deliver complete UX pipelines.', 'From stunning logo designs to comprehensive brand identities, we deliver complete creative solutions.');

// Replace Features & Benefits title
content = content.replace('Business Value of <span className="svc-heading-gradient">Premium UX</span>', 'Business Value of <span className="svc-heading-gradient">Premium Design</span>');

// Replace Process title
content = content.replace('Our UI/UX Design <span className="svc-heading-gradient">Process</span>', 'Our Creative Design <span className="svc-heading-gradient">Process</span>');

// Replace Tools title
content = content.replace('Our UI/UX Design <span className="svc-heading-gradient">Tools</span>', 'Our Design <span className="svc-heading-gradient">Tools</span>');

// Replace Portfolio Section
content = content.replace('Featured UI/UX <span className="svc-heading-gradient">Showcase</span>', 'Featured Portfolio <span className="svc-heading-gradient">Showcase</span>');

// Replace Contact Form 
content = content.replace('Need a UI/UX Design Team?', 'Need a Branding Design Team?');
content = content.replace("Upgrade your application's user experience with our premium UI/UX prototyping services.", "Upgrade your brand's visual identity with our premium creative design services.");
content = content.replace('Need UI/UX design, wireframing, or prototyping?', 'Need logo design, branding, or marketing materials?');

// Replace CTA
content = content.replace('Ready To Design A World-Class User Experience?', 'Build A Brand That Leaves A Lasting Impression');

// Replace the Constants (We will redefine them and inject)
const TOOLS = `[
  { name: "Photoshop", cat: "Design", img: "https://cdn.simpleicons.org/adobephotoshop/white" },
  { name: "Illustrator", cat: "Design", img: "https://cdn.simpleicons.org/adobeillustrator/white" },
  { name: "InDesign", cat: "Design", img: "https://cdn.simpleicons.org/adobeindesign/white" },
  { name: "Figma", cat: "Design", img: "https://cdn.simpleicons.org/figma/white" },
  { name: "Creative Cloud", cat: "Branding", img: "https://cdn.simpleicons.org/adobecreativecloud/white" },
  { name: "Notion", cat: "Branding", img: "https://cdn.simpleicons.org/notion/white" },
  { name: "Slack", cat: "Branding", img: "https://cdn.simpleicons.org/slack/white" },
  { name: "PowerPoint", cat: "Presentation", img: "https://cdn.simpleicons.org/microsoftpowerpoint/white" },
  { name: "Google Slides", cat: "Presentation", img: "https://cdn.simpleicons.org/googledrive/white" },
  { name: "Canva Pro", cat: "Presentation", img: "https://cdn.simpleicons.org/canva/white" },
  { name: "Figma", cat: "Mockups", img: "https://cdn.simpleicons.org/figma/white" },
  { name: "Adobe XD", cat: "Mockups", img: "https://cdn.simpleicons.org/adobexd/white" }
]`;

const SERVICES = `[
  { title: "Logo Design", desc: "Unique, memorable logos that instantly communicate your brand's core values to your audience.", tags: ["Wordmarks", "Symbols", "Lettermarks"] },
  { title: "Brand Identity Design", desc: "Comprehensive visual systems including typography, color palettes, and brand guidelines for consistency.", tags: ["Style Guides", "Brand Book", "Consistency"] },
  { title: "Social Media Design", desc: "Engaging and shareable graphics optimized for Instagram, LinkedIn, Twitter, and Facebook.", tags: ["Posters", "Banners", "Carousels"] },
  { title: "Marketing Materials", desc: "High-impact digital and print marketing collaterals including brochures, flyers, and sales decks.", tags: ["Brochures", "Flyers", "Posters"] },
  { title: "Business Profile Design", desc: "Professional corporate profiles, whitepapers, and annual reports that build investor and client trust.", tags: ["Corporate", "B2B", "Reports"] },
  { title: "Packaging Design", desc: "Striking product packaging concepts that stand out on shelves and create delightful unboxing experiences.", tags: ["Labels", "Boxes", "Products"] },
  { title: "Print Design", desc: "Print-ready creatives optimized for high-resolution physical production across various mediums.", tags: ["CMYK", "Bleeds", "High-Res"] },
  { title: "Presentation Design", desc: "Persuasive and beautifully crafted pitch decks and presentations that captivate investors.", tags: ["Pitch Decks", "Slides", "Keynote"] },
  { title: "Advertising Creatives", desc: "Conversion-focused ad creatives for Google, Facebook, and native ad networks.", tags: ["Display Ads", "Social Ads", "Banners"] },
  { title: "Rebranding Services", desc: "Modernize and refresh outdated visual identities to align with new business goals and modern trends.", tags: ["Brand Refresh", "Modernization", "Evolution"] }
]`;

const BENEFITS = `[
  { title: "Stronger Brand Identity", desc: "Establish a clear, memorable identity that sets you apart from your competitors." },
  { title: "Increased Brand Recognition", desc: "Ensure your brand is easily recognizable across all channels and touchpoints." },
  { title: "Better Customer Trust", desc: "Professional design builds immediate credibility and trust with prospective clients." },
  { title: "Higher Engagement Rates", desc: "Visually appealing content drives higher interaction rates on social and digital platforms." },
  { title: "Professional Business Image", desc: "Project authority and premium quality through every piece of marketing collateral." },
  { title: "Consistent Visual Branding", desc: "Maintain a cohesive look and feel that strengthens brand recall and loyalty." },
  { title: "Improved Marketing Performance", desc: "Better creatives lead directly to higher click-through and conversion rates." },
  { title: "Memorable Customer Experience", desc: "Create positive emotional connections through stunning aesthetic interactions." },
  { title: "Competitive Market Positioning", desc: "Position your brand as an industry leader through superior visual presentation." },
  { title: "Long-Term Business Growth", desc: "Invest in design that builds a lasting foundation for scaling your business." }
]`;

const PROCESS_STEPS = `[
  { num: "01", title: "Brand Discovery", desc: "Understanding your vision, target audience, and business objectives." },
  { num: "02", title: "Research & Strategy", desc: "Analyzing competitors and defining the visual direction and brand positioning." },
  { num: "03", title: "Concept Development", desc: "Creating initial design concepts and moodboards for your visual identity." },
  { num: "04", title: "Design Creation", desc: "Fleshing out the chosen concept into full high-fidelity branding assets." },
  { num: "05", title: "Feedback & Refinement", desc: "Collaborating with you to refine the designs based on your valuable feedback." },
  { num: "06", title: "Delivery & Support", desc: "Providing final source files, brand guidelines, and ongoing design support." }
]`;

const PROJECTS = `[
  { title: "Luxury Brand Identity", cat: "Brand Identity", metric: "+60% Brand Recall", desc: "A comprehensive brand identity overhaul for a premium luxury goods retailer.", tags: ["Logo", "Typography", "Colors"], img: "/images/svc_graphic_design.png", beforeAfter: "Modernized outdated crest into sleek minimalist wordmark." },
  { title: "Restaurant Branding", cat: "Print & Branding", metric: "2x Foot Traffic", desc: "Vibrant branding package including menus, signage, and social media templates.", tags: ["Menus", "Signage", "Social"], img: "/images/digital_product.png", beforeAfter: "Unified disparate visual styles into one cohesive theme." },
  { title: "SaaS Startup Brand", cat: "Digital Branding", metric: "+45% Signups", desc: "Tech-forward visual identity designed to convey trust, speed, and innovation.", tags: ["Web Assets", "Ad Creatives", "Pitch Deck"], img: "/images/data_viz.png", beforeAfter: "Established professional trust from day one." },
  { title: "Corporate Profile", cat: "Print Design", metric: "3x Investor Meetings", desc: "A 40-page corporate company profile and annual report design.", tags: ["Brochure", "Layout", "Typography"], img: "/images/office_workspace.png", beforeAfter: "Transformed text-heavy documents into engaging visual stories." },
  { title: "Product Packaging", cat: "Packaging Design", metric: "Sold Out Q1", desc: "Eco-friendly, minimalist packaging design for a modern skincare line.", tags: ["Labels", "Boxes", "Print"], img: "/images/svc_ai_chatbot.png", beforeAfter: "Stood out on retail shelves against established competitors." },
  { title: "Social Campaign", cat: "Social Media", metric: "+300% Engagement", desc: "A series of high-impact graphic assets for a month-long product launch campaign.", tags: ["Instagram", "Twitter", "Ads"], img: "/images/svc_ui_ux.png", beforeAfter: "Significantly boosted organic reach through shareable graphics." }
]`;

const TESTIMONIALS = `[
  { name: "Elena Rostova", role: "CMO, NovaStyle", text: "DCS completely transformed our brand. The new visual identity is absolutely stunning, and our marketing materials finally reflect the premium quality of our products.", stars: 5 },
  { name: "David Chen", role: "Founder, TechLaunch", text: "Their graphic design team is incredible. They nailed our SaaS startup branding on the first concept. The pitch deck they designed helped us secure our seed funding.", stars: 5 },
  { name: "Sarah Jenkins", role: "Owner, The Daily Grind", text: "The restaurant branding package was exactly what we needed. From menus to social media templates, everything is cohesive, modern, and visually striking.", stars: 5 }
]`;

const FAQS = `[
  { q: "What is included in a Brand Identity package?", a: "A standard brand identity package includes logo design (primary and secondary), color palette, typography guidelines, brand pattern/imagery direction, and a comprehensive brand book." },
  { q: "Do you provide source files?", a: "Yes, we always provide the final, editable source files (AI, PSD, INDD, Figma) along with exported formats (PNG, JPG, SVG, PDF)." },
  { q: "How long does a branding project take?", a: "A typical full brand identity project takes between 3 to 6 weeks, depending on the complexity and revision cycles." },
  { q: "Can you design marketing materials for print?", a: "Absolutely. We design print-ready files with correct CMYK color profiles, bleeds, and safe margins for brochures, flyers, and banners." },
  { q: "Do you design social media graphics?", a: "Yes, we create custom social media graphics, templates, and carousel posts optimized for all major platforms." },
  { q: "How many logo concepts do you provide?", a: "We typically provide 3 distinct logo concepts based on our initial discovery phase, and then refine your chosen concept." },
  { q: "What if I don't like the initial designs?", a: "We involve you throughout the process. If the initial concepts aren't quite right, we gather your feedback and iterate until we achieve the perfect result." },
  { q: "Can you help with an existing brand refresh?", a: "Yes, we specialize in rebranding and modernizing existing visual identities while maintaining core brand recognition." },
  { q: "Do you design packaging?", a: "Yes, we create striking, production-ready packaging designs for a variety of physical products." },
  { q: "What do you need from me to start?", a: "We'll need an understanding of your business goals, target audience, competitors, and any existing brand assets or design inspiration you may have." }
]`;

// We need to carefully replace the variable declarations using regex
content = content.replace(/const TOOLS = \[[\s\S]*?\];/m, 'const TOOLS = ' + TOOLS + ';');
content = content.replace(/const SERVICES = \[[\s\S]*?\];/m, 'const SERVICES = ' + SERVICES + ';');
content = content.replace(/const BENEFITS = \[[\s\S]*?\];/m, 'const BENEFITS = ' + BENEFITS + ';');
content = content.replace(/const PROCESS_STEPS = \[[\s\S]*?\];/m, 'const PROCESS_STEPS = ' + PROCESS_STEPS + ';');
content = content.replace(/const PROJECTS = \[[\s\S]*?\];/m, 'const PROJECTS = ' + PROJECTS + ';');
content = content.replace(/const TESTIMONIALS = \[[\s\S]*?\];/m, 'const TESTIMONIALS = ' + TESTIMONIALS + ';');
content = content.replace(/const FAQS = \[[\s\S]*?\];/m, 'const FAQS = ' + FAQS + ';');

fs.writeFileSync('src/app/services/graphic-design/GraphicDesignPageClient.jsx', content);
console.log('Successfully generated GraphicDesignPageClient.jsx');
