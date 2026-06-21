
import { LucideCodeXml, Smartphone, Cloud, Rocket, Check, Brain, ArrowRight} from "lucide-react"

const services = [
  {
    icon: <LucideCodeXml size={24} aria-hidden="true" />,
    title: "Software Development",
    description: "Scalable websites, platforms, and enterprise applications.",
    features: ["Web platforms", "APIs & integrations", "Enterprise SaaS"],
  },
  {
    icon: <Smartphone size={24} aria-hidden="true" />,
    title: "Mobile App Development",
    description: "Creating powerful mobile experiences across iOS and Android.",
    features: ["Native iOS/ Android", "React Native", "Offline-first apps"],
  },
  {
    icon: <Brain size={24} aria-hidden="true" />,
    title: "Artifical Intelligence",
    description: "Building intelligent automation and AI-powered features.",
    features: ["LLM integration", "Computer vision", "Workflow automation"],
  },
  {
    icon: <Cloud size={24} aria-hidden="true" />,
    title: "Cloud Solutions",
    description: "Creating secure, scalable, and resilient infrastructure.",
    features: ["AWS / GCP / Azure", "DevOps & CI/CD", "Edge & sercerless"],
  },
  {
    icon: <Rocket size={24} aria-hidden="true" />,
    title: "Digital Transformation",
    description: "Helping businesses adopt modern technology with confidence.",
    features: ["Tech strategy", "Legacy modernization", "Team enablement"],
  },
]

export default function Page() {
  return (
    <main className="min-h-screen">
        <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
            <div className="absolute inset-0 grid-bg opacity-50"></div>
            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl"></div>
 
            <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
                <h1 className="animate-fade-in-up mx-auto mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">
                    Our Technology <span className="text-gradient-accent">Solutions</span>
                </h1>
                <p
                    className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg"
                    style={{ animationDelay: "120ms" }}
                    >
                    End-to-end engineering, design, and intelligence services tailored to your product, team, and ambitions.
                </p>
            </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border/20 bg-card shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100"></div>
              <div className="flex h-full flex-col p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-white">
                  {service.icon}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                <ul className="mt-auto space-y-2 border-t border-border/20 pt-5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/30 text-primary">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-3xl text-center">
            <p className="text-muted-foreground">Not sure where to start?</p>
            <a href="/team" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-1
               focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
               bg-accent text-accent-foreground shadow-accent hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 font-semibold h-10 rounded-md px-8 mt-4">Talk to our team
               </a>
        </div>
      </section>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="bg-gradient-hero shadow-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center text-white md:px-16 md:py-24">
            <div className="absolute inset-0 grid-bg opacity-25"></div>
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl"></div>
            <div className="relative">
                <h2 className="font-display text-4xl font-bold md:text-6xl">Ready to Build <span className="text-gradient-accent">the Future?</span></h2>
                <p className="mx-auto mt-5 max-w-2xl text-base text-white/80 md:text-lg">Partner with TujengeTech and transform your ideas into powerful digital solutions that scale.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <a href="/contact" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-1
               focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 
               bg-accent text-accent-foreground shadow-accent hover:brightness-105 hover:-translate-y-0.5 transition-all duration-300 font-semibold h-10 rounded-md px-8">Let's Work Together <ArrowRight/></a>
                    <a href="/projects" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1
               focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm h-10 rounded-md px-8 border/white/30 gb/white/5
                text/white hover:gb-white/10 rounded-md px-8 border-white/30 bg-white/5 text/white hover:bg-white/10 hover:text-white">Explore Our Work</a>
                </div>
            </div>
        </div>
    </section>
    </main>
  )
}