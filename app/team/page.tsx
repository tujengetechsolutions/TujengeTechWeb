import Image from "next/image"
import { Link, Globe, ExternalLink, ArrowRight } from "lucide-react"

const team = [
  {
    name: "Gideon Lelei",
    role: "Founder / CEO",
    bio: "Leads product strategy and partnerships.",
    image: "/window.svg",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Eugene Maina",
    role: "Lead Engineer",
    bio: "Architects scalable systems and leads the engineering team.",
    image: "/window.svg",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Patrick Mutua",
    role: "Head of Design",
    bio: "Crafts intuitive user experiences and design systems.",
    image: "/window.svg",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Nick Shayo",
    role: "Head of Design",
    bio: "Crafts intuitive user experiences and design systems.",
    image: "/window.svg",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Halima Hassan",
    role: "Head of Design",
    bio: "Crafts intuitive user experiences and design systems.",
    image: "/window.svg",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
  {
    name: "Hillary Kibet",
    role: "Head of Design",
    bio: "Crafts intuitive user experiences and design systems.",
    image: "/window.svg",
    social: { linkedin: "#", twitter: "#", github: "#" },
  },
]

export default function Page() {
  return (
    <main className="min-h-screen">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <h1 className="animate-fade-in-up mx-auto mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">
            The team behind <span className="text-gradient-accent">TujengeTech</span>
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            A distributed team of engineers, designers, and product thinkers — united by craft and curiosity.
          </p>
        </div>
      </section>

      {/* ── Team Cards ── */}
      <section className="bg-gradient-hero relative overflow-hidden px-5 pb-20 pt-20 text-white md:px-8 md:pb-28 md:pt-24">
        <div className="absolute inset-0 grid-bg opacity-20"></div>

        <div className="relative mx-auto grid max-w-6xl gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center rounded-3xl border border-white/10 bg-white p-7 text-center text-foreground shadow-sm transition-all hover:-translate-y-1"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-lg">
                  <Image
                    src={member.image}
                    alt={`Photo of ${member.name}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl"></div>
              </div>

              {/* Name */}
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-sm font-semibold text-primary">
                {member.role}
              </p>

              {/* Bio */}
              <p className="mt-3 text-sm text-muted-foreground">
                {member.bio}
              </p>

              {/* Social icons */}
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={member.social.linkedin}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border/20 text-muted-foreground transition hover:border-primary hover:text-primary"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Link size={15} />
                </a>
                <a
                  href={member.social.twitter}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border/20 text-muted-foreground transition hover:border-primary hover:text-primary"
                  aria-label={`${member.name} Twitter`}
                >
                  <Globe size={15} />
                </a>
                <a
                  href={member.social.github}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border/20 text-muted-foreground transition hover:border-primary hover:text-primary"
                  aria-label={`${member.name} Github`}
                >
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="bg-gradient-hero shadow-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center text-white md:px-16 md:py-24">
          <div className="absolute inset-0 grid-bg opacity-25"></div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl"></div>

          <div className="relative">
            <h2 className="font-display text-4xl font-bold md:text-6xl">
              Ready to Build <span className="text-gradient-accent">the Future?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">
              Partner with TujengeTech and transform your ideas into powerful digital solutions that scale.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold cursor-pointer
                  bg-accent text-accent-foreground shadow-accent hover:brightness-105 hover:-translate-y-0.5
                  transition-all duration-300 h-10 px-8
                  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                  disabled:pointer-events-none disabled:opacity-50"
              >
                Let's Work Together <ArrowRight />
              </a>
              <a
                href="/projects"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer
                  border border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white
                  transition-colors h-10 px-8
                  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                  disabled:pointer-events-none disabled:opacity-50"
              >
                Explore Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}