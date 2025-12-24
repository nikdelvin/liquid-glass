const config = {
  author: "Nik Delvin",
  socials: {
    github: "https://github.com/nikdelvin",
    twitter: "@nikdelvin",
  },
  canonicalUrl: "https://liquid-glass.web.app",
  ogImage: "/assets/og-image.png",
  siteName: "Liquid Glass - iOS Glass Effects for Web",
  ldJson: {},
};
config.ldJson = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "LiquidGlass",
  title: "Liquid Glass - iOS-style Glass Effects for Web",
  description:
    "Beautiful iOS-style liquid glass refraction effects for the web using pure CSS SVG filters. Create stunning glassmorphism UI with realistic displacement mapping and chromatic aberration.",
  author: {
    "@type": "Person",
    name: config.author,
    url: config.socials.github,
  },
  codeRepository: "https://github.com/nikdelvin/liquid-glass",
  programmingLanguage: ["TypeScript", "Astro", "CSS"],
  keywords:
    "liquid glass, glassmorphism, iOS glass effect, CSS SVG filters, backdrop filter, Tailwind CSS, Astro component",
};

export { config };
