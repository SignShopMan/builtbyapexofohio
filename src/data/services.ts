import type { ImageMetadata } from 'astro';

// Photos — see ../../../photos/MANIFEST.md for descriptions and hero tags
import shingle01 from '../assets/photos/roofing-shingle/roofing-shingle-01.jpg';
import shingle06 from '../assets/photos/roofing-shingle/roofing-shingle-06.jpg';
import shingle17 from '../assets/photos/roofing-shingle/roofing-shingle-17.jpg';
import shingle54 from '../assets/photos/roofing-shingle/roofing-shingle-54.jpg';
import metal02 from '../assets/photos/roofing-metal/roofing-metal-02.jpg';
import metal05 from '../assets/photos/roofing-metal/roofing-metal-05.jpg';
import metal07 from '../assets/photos/roofing-metal/roofing-metal-07.jpg';
import siding01 from '../assets/photos/siding/siding-01.jpg';
import siding03 from '../assets/photos/siding/siding-03.jpg';
import after02 from '../assets/photos/before-after/before-after-02.jpg';
import barn02 from '../assets/photos/pole-barns/pole-barns-02.jpg';
import barn03 from '../assets/photos/pole-barns/pole-barns-03.jpg';
import barn04 from '../assets/photos/pole-barns/pole-barns-04.jpg';
import commercial02 from '../assets/photos/commercial/commercial-02.jpg';
import progress01 from '../assets/photos/in-progress/in-progress-01.jpg';

export interface Service {
  slug: string;
  name: string;
  /** Short line for cards and nav */
  blurb: string;
  /** Opening paragraph on the service page */
  intro: string;
  bullets: string[];
  hero: ImageMetadata;
  gallery: ImageMetadata[];
  /** The three on the logo get top billing (guide §12 item 5) */
  core: boolean;
  icon: 'roof' | 'siding' | 'gutter' | 'metal' | 'barn' | 'plus';
}

export const services: Service[] = [
  {
    slug: 'roofing',
    name: 'Roofing',
    blurb: 'Tear-offs, replacements, and repairs with architectural shingles built for Ohio weather.',
    intro:
      'A roof is the one part of your house you can’t afford to get wrong. We do full tear-offs, new installs, and repairs with architectural shingles, synthetic underlayment, and proper ventilation — and we clean up like we were never there.',
    bullets: [
      'Full tear-off and replacement',
      'Storm and hail damage repair',
      'Architectural shingles in a range of colors',
      'Synthetic underlayment and ice & water shield',
      'Ridge vents and proper attic ventilation',
      'Drone inspection and photos of the finished job',
    ],
    hero: shingle01,
    gallery: [shingle06, shingle17, shingle54, progress01],
    core: true,
    icon: 'roof',
  },
  {
    slug: 'siding',
    name: 'Siding',
    blurb: 'Vinyl, shake, and board-and-batten siding that transforms the whole house.',
    intro:
      'New siding is the fastest way to change how your home looks — and it stops the drafts, rot, and repainting for good. We install vinyl lap, shake, and board-and-batten siding, plus soffit, fascia, and trim.',
    bullets: [
      'Vinyl lap, shake, and board-and-batten',
      'Soffit, fascia, and trim wrap',
      'Insulated siding options',
      'Full-house or partial replacement',
      'Matching gutters and downspouts',
    ],
    hero: siding03,
    gallery: [siding01, after02],
    core: true,
    icon: 'siding',
  },
  {
    slug: 'gutters',
    name: 'Gutters',
    blurb: 'Seamless gutters, downspouts, and guards that keep water away from your foundation.',
    intro:
      'Gutters are cheap insurance for your foundation, siding, and landscaping. We install seamless aluminum gutters sized for your roof, with downspouts placed where the water actually needs to go.',
    bullets: [
      'Seamless aluminum gutters, 5" and 6"',
      'Downspouts and extensions',
      'Gutter guards',
      'Repair and re-hang',
      'Color-matched to your trim',
    ],
    hero: shingle17,
    gallery: [],
    core: true,
    icon: 'gutter',
  },
  {
    slug: 'metal-roofing',
    name: 'Metal Roofing',
    blurb: 'Standing-seam metal roofs that last 50 years and look sharp doing it.',
    intro:
      'Standing-seam metal is the last roof you’ll ever buy. It sheds snow, shrugs off hail, and comes in colors from classic black and gray to bold blue and burgundy.',
    bullets: [
      'Standing-seam and exposed-fastener panels',
      'Black, gray, silver, blue, burgundy, and more',
      'Residential, barns, and outbuildings',
      'Metal-over-shingle installs where code allows',
    ],
    hero: metal02,
    gallery: [metal05, metal07],
    core: false,
    icon: 'metal',
  },
  {
    slug: 'pole-barns',
    name: 'Pole Barns & Barndominiums',
    blurb: 'Post-frame buildings for storage, shops, and barndominium living.',
    intro:
      'From a 30×40 shop to a full barndominium, we build post-frame structures that stand up to Ohio winters. Metal roofing and siding, concrete floors, overhead doors — one crew, start to finish.',
    bullets: [
      'Pole barns, garages, and shops',
      'Barndominiums and additions',
      'Metal roofing and siding in your colors',
      'Concrete floors and aprons',
      'Overhead doors, walk doors, and windows',
    ],
    hero: barn03,
    gallery: [barn02, barn04],
    core: false,
    icon: 'barn',
  },
  {
    slug: 'exterior-improvements',
    name: 'Additions, Concrete & More',
    blurb: 'Additions, concrete, and commercial exterior work.',
    intro:
      'Need something that isn’t on the list? We take on additions, concrete driveways and patios, and commercial roofing — including work for local fire departments and businesses.',
    bullets: [
      'Room additions',
      'Concrete driveways, patios, and slabs',
      'Commercial and municipal roofing',
      'Exterior repairs and improvements',
    ],
    hero: commercial02,
    gallery: [],
    core: false,
    icon: 'plus',
  },
];

export const coreServices = services.filter((s) => s.core);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
