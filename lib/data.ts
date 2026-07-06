export interface Project {
  imageUrl: string
  title: string
  excerpt: string
  year: number
  liveUrl: string
}

export interface Testimonial {
  name: string
  title: string
  quote: string
}

export const projects: Array<Project> = [
  {
    imageUrl: "/lebron-highlights.jpeg",
    title: "Lebron Highlights",
    excerpt:
      "A cinematic, story-driven personal site for LeBron James. Uses full-bleed imagery and scroll-based storytelling to turn his career, ventures, and philanthropy into distinct narrative moments rather than a standard bio page.",
    year: 2023,
    liveUrl: "https://lebronjames.squarespace.com/?password=demo",
  },
  {
    imageUrl: "/intarakt.jpeg",
    title: "Intarakt",
    excerpt:
      "A social diary app for anonymous sharing a space to express thoughts freely and connect with others without the pressure of a public profile.",
    year: 2023,
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.josephebuka.intaraktmobile",
  },
  {
    imageUrl: "/playcope.jpeg",
    title: "Playcope",
    excerpt:
      "A football intelligence company that helps fans, analysts, and brands see the game in a smarter way — powered by AI and real match data, turning raw stats into insight you can actually act on.",
    year: 2023,
    liveUrl: "https://www.playcope.com/",
  },
  {
    imageUrl: "/finger.jpeg",
    title: "Finger App",
    excerpt:
      "A creator-first platform built for creators who want more than just reach it's where they can share exclusive content, build real connections with their most engaged fans, and earn securely, all without juggling multiple tools or platforms.",
    year: 2023,
    liveUrl: "https://finger.global/",
  },
  {
    imageUrl: "/flickmart.jpeg",
    title: "Flickmart",
    excerpt:
      "A classified marketplace where students and locals buy and sell everyday items with built-in escrow for trust and better visibility for sellers.",
    year: 2023,
    liveUrl: "https://flickmart.app/",
  },
]

export const testimonials: Array<Testimonial> = [
  {
    name: "Santa",
    title: "CEO of intarakt",
    quote:
      "Didn't expect a fintech onboarding flow to feel this calm. That's a hard thing to pull off with all the compliance stuff we had to fit in.",
  },
  {
    name: "Stanley Okongwu",
    title: "CEO of Osora",
    quote:
      "He caught things I didn't even know were problems like why users kept dropping off at KYC. Fixed it before I even brought it up.",
  },
]
