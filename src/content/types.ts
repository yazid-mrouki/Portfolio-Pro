export type Experience = {
  id: string;
  company: string;
  role: string;
  type: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
  outcome?: string;
  /** Screenshots from the internship report; src is relative to /public. */
  gallery?: { src: string; caption: string }[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  highlights: string[];
  stack: string[];
  team?: string;
  /** Headline numbers shown as tiles. */
  metrics?: { value: string; label: string }[];
  /** Optional screenshots; src is relative to /public. */
  gallery?: { src: string; caption: string }[];
  /** Optional presentation deck; href is relative to /public. */
  deck?: { href: string; label: string };
};

export type MiniProject = { name: string; description: string; stack: string };

/** Screenshot ids map to /public/projects/rawabet/<id>.webp */
export type RawabetShot =
  | "home"
  | "events"
  | "films"
  | "tickets"
  | "subscriptions"
  | "loyalty"
  | "feedback"
  | "logistics"
  | "signup";

export type CaseStudy = {
  kicker: string;
  title: string;
  tagline: string;
  period: string;
  team: string;
  problem: string;
  solution: string;
  watch: string;
  deck: string;
  videoLabel: string;
  modulesTitle: string;
  modules: { name: string; text: string }[];
  archTitle: string;
  layers: { name: string; items: string[] }[];
  galleryTitle: string;
  galleryHint: string;
  gallery: { id: RawabetShot; caption: string }[];
  infraTitle: string;
  /** OpenStack screenshots; src is relative to /public. */
  infraGallery: { src: string; caption: string }[];
  stack: string[];
};

export type Content = {
  meta: { title: string; description: string };
  nav: { about: string; experience: string; projects: string; skills: string; contact: string; cv: string; menu: string };
  hero: {
    available: string;
    location: string;
    role: string;
    pitch: string;
    ctaProjects: string;
    ctaContact: string;
    stats: { value: string; label: string }[];
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    focusTitle: string;
    focus: { title: string; text: string }[];
  };
  experience: {
    kicker: string;
    title: string;
    intro: string;
    outcomeLabel: string;
    galleryLabel: string;
    items: Experience[];
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    caseStudy: CaseStudy;
    featured: Project[];
    othersTitle: string;
    others: MiniProject[];
  };
  skills: { kicker: string; title: string; groups: { name: string; items: string[] }[] };
  education: {
    kicker: string;
    title: string;
    items: { degree: string; school: string; period: string; place: string }[];
    certTitle: string;
    certs: { name: string; detail: string; pending?: boolean }[];
    langTitle: string;
    langs: { name: string; level: string; value: number }[];
    interestsTitle: string;
    interests: { name: string; detail: string }[];
  };
  contact: { kicker: string; title: string; text: string; email: string; phone: string; download: string };
  footer: { built: string; rights: string };
  langSwitch: string;
};
