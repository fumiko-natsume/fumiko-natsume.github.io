/**
 * Site Configuration — Fumiko Natsume
 */

export const siteConfig = {
  name: 'Fumiko Natsume',
  url: 'https://fumiko.sami.cloud',
  description: 'Research, culture, and the art of thoughtful support',

  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Publications', href: '/publications' },
    { label: 'Writing', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  footerLinks: [
    { label: 'Imprint', href: '/imprint' },
    { label: 'Contact', href: '/contact' },
    { label: 'RSS', href: '/feed.xml' },
  ],

  social: {
    linkedin: '',
    github: 'https://github.com/fumiko-natsume',
    twitter: '',
    googleScholar: '',
    researchGate: '',
    orcid: '',
  },

  analytics: {
    fathomSiteId: '',
    googleAnalyticsId: '',
  },

  seo: {
    defaultTitle: 'Fumiko Natsume',
    titleTemplate: '%s | Fumiko Natsume',
    defaultDescription: 'Research associate, cultural consultant, and connoisseur of quiet excellence. University of Oxford.',
    defaultOgImage: '/images/og-default.png',
  },
};

export type SiteConfig = typeof siteConfig;
