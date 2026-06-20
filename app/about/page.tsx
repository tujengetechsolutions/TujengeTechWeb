import { Lightbulb, LucideTrophy, LucideUsers, HeartHandshake, ArrowRight  } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="absolute inset-0 grid-bg opacity-50"></div>
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-accent/30 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <h1 className="animate-fade-in-up mx-auto mt-5 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Who <span className="text-gradient-accent">we are</span>
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg"
            style={{ animationDelay: "120ms" }}
          >
            A technology solutions company focused on building innovative
            digital products, software solutions, and technology experiences
            that solve real-world problems.
          </p>
        </div>
      </section>
      <section className="pb-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
          <div className="bg-gradient-hero shadow-glow relative aspect-square overflow-hidden rounded-3xl text-white">
            <div className="absolute inset-0 grid-bg opacity-30"></div>
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/30 blur-3xl"></div>
            <div className="relative flex h-full flex-col justify-end p-10">
              <p className="text-x5 font-semibold uppercase tracking-widest text-accent">OUR MISSION</p>
              <p className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl">
                Empower businesses, communities, and innovators through cutting-edge technology that transforms
                ideas into scalable digital experiences.
              </p>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold uppsercase tracking-widest text-primary">OUR STORY</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">A team obsessed with craft</h2>
            <p className="mt-4 text-muted-foreground">TujengeTech was founded on a simple belief:
              great technology shoul feel effortless and meaningful. We combine deep engineering expertise with thoughtful design
              to ship products people love.
            </p>
            <p className="mt-3 text-muted-foreground">
                From early-stage startups to global enterprises, we partner with teams who want to move fast 
                without compromising on quality.
            </p>
            <a href="/team" className="inline-flex items-centre justify-center gap-2 whitespace-nowrap rounded-md
              text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
               disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none 
               [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-accent-foreground shadow-accent hover:brightness-105 hover:-translate-y-0.5
                transition-all duration-300 font-semibold h-9 px-4 py-2 mt-7">Meet the team <ArrowRight/></a>
          </div>
        </div>
      </section>
      <section className="bg-gradient-soft px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">OUR VALUES</span>
            <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">The principles that <span className="text-gradient-accent">guide us</span>
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-accent
               group-hover:text-accent-foreground">
                <Lightbulb width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"/>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">Innovation</h3>
              <p className="mt-2 text-sm text-muted-foreground">Building solutions for tomorrow, not just today.</p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-accent
               group-hover:text-accent-foreground">
                <LucideTrophy width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"/>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">Excellence</h3>
              <p className="mt-2 text-sm text-muted-foreground">Delivering quality digital experiences end to end.</p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-accent
               group-hover:text-accent-foreground">
                <LucideUsers width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"/>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">Collaboration</h3>
              <p className="mt-2 text-sm text-muted-foreground">Growing together with our clients and communities.</p>
            </div>
            <div className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-accent">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-accent
               group-hover:text-accent-foreground">
                <HeartHandshake width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"/>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">Creating meaningful change through technology.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="bg-gradient-hero shadow-glow relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-8 py-16 text-center text-white 
        md:px-16 md:py-24">
          <div className="absolute inset-0 grid-bg opacity-25"></div>
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl"></div>
          <div className="relative">
            <h2 className="font-display text-4xl font-bold md:text-6xl">Ready to Build <span className="text-gradient-accent">the Future?</span>
            </h2>
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
  );
}