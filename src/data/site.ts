/**
 * Business facts — single place to change contact info, service area, etc.
 * Source: BRAND-GUIDE.md §1 and §10.
 */
export const site = {
  name: 'Apex Exteriors Services',
  legalName: 'Apex Exteriors Services LLC',
  domain: 'builtbyapexofohio.com',
  url: 'https://builtbyapexofohio.com',
  tagline: 'Local. Reliable. Trusted.',
  description:
    'Local, licensed & insured roofing, siding, gutter, and pole barn contractor serving Bellefontaine, Logan County, and surrounding Ohio communities. Free estimates. 0% financing available.',

  // ⚠ Guide §12: confirm 6204 vs 9523 before launch.
  phone: '(937) 935-6204',
  phoneHref: 'tel:+19379356204',
  smsHref: 'sms:+19379356204',
  email: 'apexexteriorsservices@gmail.com',

  facebook: 'https://www.facebook.com/profile.php?id=61581786302751',

  /**
   * Hearth financing link (from the Hearth dashboard → "Financing link").
   * Leave empty until the client provides it — the calculator's Apply button
   * falls back to /contact.
   */
  hearthUrl: '',

  address: {
    locality: 'Bellefontaine',
    region: 'OH',
    county: 'Logan County',
  },

  serviceArea: [
    'Bellefontaine',
    'Lakeview',
    'Urbana',
    'Lima',
    'Jackson Center',
    'Belle Center',
    'Huntsville',
    'West Liberty',
  ],

  trust: [
    { label: 'Licensed & Insured', icon: 'shield' },
    { label: 'Quality Work You Can Trust', icon: 'check' },
    { label: 'Local & Reliable', icon: 'pin' },
    { label: 'Residential & Commercial', icon: 'home' },
  ],

  social: {
    rating: '100% recommend',
    reviewCount: 20,
    platform: 'Facebook',
  },

  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Our Work', href: '/gallery' },
    { label: 'Financing', href: '/financing' },
    { label: 'Roof Estimator', href: '/roof-estimator' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
} as const;
