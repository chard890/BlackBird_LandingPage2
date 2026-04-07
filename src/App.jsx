import { useEffect, useState } from 'react'
import SectionHeading from './components/SectionHeading'
import headerLogo from '../b09c2be4-6ed0-4735-b929-55f54f09606d.png'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const heroStats = [
  {
    value: '10+',
    label: 'Years Experience',
    detail: 'Premium residential builds',
  },
  {
    value: 'Local',
    label: 'Toowoomba and Darling Downs',
    detail: 'Trusted local builder',
  },
]

const services = [
  {
    title: 'Renovations',
    description:
      'Thoughtful home updates that improve flow, comfort, and everyday living without losing the character of the original space.',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80',
    eyebrow: 'Featured Service',
    caption: 'Light-filled living spaces with refined finishes and effortless flow.',
  },
  {
    title: 'Extensions',
    description:
      'Seamless additions designed to feel fully integrated, creating more room while respecting the architecture of your home.',
    image:
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Spatial Expansion',
  },
  {
    title: 'New Homes',
    description:
      'Refined residential builds shaped by strong planning, quality detailing, and a commitment to homes that age beautifully.',
    image:
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Bespoke Build',
  },
  {
    title: 'Bathrooms',
    description:
      'Premium bathroom upgrades with careful finishes, efficient layouts, and a calm, durable feel suited to modern family life.',
    image:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
    eyebrow: 'Calm Retreat',
  },
  {
    title: 'Maintenance',
    description:
      'Reliable repair and maintenance work completed with care, clear communication, and a high standard of workmanship.',
    eyebrow: 'Ongoing Care',
  },
]

const projects = [
  {
    title: 'Rangeview Residence',
    location: 'Toowoomba',
    type: 'Renovation',
    description:
      'A warm contemporary renovation balancing improved natural light, refined joinery, and durable materials for family living.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Garden Room Extension',
    location: 'Darling Downs',
    type: 'Extension',
    description:
      'A carefully detailed extension that opens the home to the landscape and adds generous living space with understated elegance.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Eastside New Build',
    location: 'Toowoomba Region',
    type: 'New Home',
    description:
      'A new home designed around calm proportions, natural textures, and practical finishes suited to modern regional living.',
    image:
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
  },
]

const reasons = [
  {
    title: 'Craftsmanship that lasts',
    description:
      'We focus on quality materials, careful detailing, and build outcomes that feel solid, considered, and enduring.',
  },
  {
    title: 'Clear and honest communication',
    description:
      'From first conversation to final handover, we keep the process straightforward with transparent advice and responsive updates.',
  },
  {
    title: 'A personalised building experience',
    description:
      'Every project is shaped around the home, the site, and the people living in it, never a one-size-fits-all process.',
  },
]

const process = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'We begin by understanding your home, your goals, and the practical requirements of the project.',
  },
  {
    step: '02',
    title: 'Planning and Scope',
    description:
      'We refine the brief, define the scope, and align budget, timeline, and build approach before work begins.',
  },
  {
    step: '03',
    title: 'Build Phase',
    description:
      'Construction is delivered with care, communication, and close attention to quality across every stage.',
  },
  {
    step: '04',
    title: 'Final Handover',
    description:
      'We complete the project to a high standard and walk through the finished work with confidence and clarity.',
  },
]

const testimonials = [
  {
    quote:
      'Blackbird Projects brought a calm, organised approach from start to finish. The workmanship was excellent and the whole process felt considered and professional.',
    name: 'Emily & Nathan',
    label: 'Renovation clients, Toowoomba',
  },
  {
    quote:
      'Communication was clear, timelines were realistic, and the final result exceeded what we thought was possible for our extension.',
    name: 'Sarah M.',
    label: 'Extension client, Darling Downs',
  },
  {
    quote:
      'Every detail felt intentional. We wanted a home that was warm, practical, and beautifully finished, and that is exactly what was delivered.',
    name: 'James & Olivia',
    label: 'New home clients, Toowoomba Region',
  },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header px-4 pt-4 sm:px-6 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-shell mx-auto flex max-w-8xl items-center justify-between px-5 py-3 sm:px-6">
        <a
          href="#home"
          className="header-brand shrink-0 text-[1.05rem] font-semibold tracking-[0.06em] sm:text-[1.15rem] lg:min-w-[220px]"
        >
          <img src={headerLogo} alt="" className="header-brand-logo" />
          <span className="header-logo">Blackbird Projects</span>
        </a>

        <nav className="hidden p-1.5 lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link rounded-full px-5 py-2.5 text-sm transition duration-300 ease-premium ${
                item.label === 'Home'
                  ? 'active'
                  : 'hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex lg:min-w-[320px] lg:justify-end">
          {['in', 'ig', 'x'].map((label) => (
            <a
              key={label}
              href="#contact"
              aria-label={`${label} social link`}
              className="header-icon flex h-11 w-11 items-center justify-center rounded-full text-xs font-semibold uppercase transition duration-300 ease-premium hover:bg-white/14 hover:text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+61407959097"
            className="header-phone inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.12em] transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-white/14"
          >
            0407 959 097
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 text-charcoal lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`mx-auto mt-3 max-w-8xl overflow-hidden rounded-[2rem] border border-white/35 bg-white/80 shadow-soft backdrop-blur-xl transition-all duration-300 ease-premium lg:hidden ${
          open ? 'max-h-96 p-4 opacity-100' : 'max-h-0 p-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm font-semibold text-charcoal/80 transition hover:bg-paper hover:text-charcoal"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary mt-2 text-center" onClick={() => setOpen(false)}>
            Request a Quote
          </a>
          <a
            href="tel:+61407959097"
            className="btn-secondary border-charcoal/15 text-center text-charcoal"
            onClick={() => setOpen(false)}
          >
            0407 959 097
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="hero isolate px-4 pt-28 sm:px-6 sm:pt-32"
    >
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=80"
        alt="Blackbird Projects premium residential build"
        className="hero-image"
      />
      <div className="hero-top-fade" />
      <div className="hero-overlay" />
      <div className="absolute inset-0 bg-grain opacity-70" />

      <div className="hero-bg-word" aria-hidden="true">
        BLACKBIRD
      </div>

      <div className="hero-inner mx-auto max-w-8xl">
        <div className="hero-content-wrap reveal">
          <div className="hero-content">
            <p className="hero-eyebrow">
              Residential Builder | Toowoomba & Darling Downs
            </p>
            <h1>
              <span>Built with care.</span>
              <span>Designed to last.</span>
            </h1>
            <p className="hero-copy">
              High quality home renovations, extensions, and residential improvements across
              Toowoomba and the Darling Downs.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Request a Quote
              </a>
              <a href="#projects" className="btn-secondary text-white">
                View Projects
              </a>
            </div>
          </div>
        </div>

        <div className="hero-card-stack reveal">
          {heroStats.map((item, index) => (
            <article key={item.label} className={`glass-card ${index === 1 ? 'card-offset' : ''}`}>
              <h3>{item.value}</h3>
              <h4>{item.label}</h4>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about-section section-shell">
      <div className="about-atmosphere about-atmosphere-a" aria-hidden="true" />
      <div className="about-atmosphere about-atmosphere-b" aria-hidden="true" />
      <div className="about-atmosphere about-atmosphere-c" aria-hidden="true" />
      <div className="about-noise" aria-hidden="true" />
      <div className="about-linework" aria-hidden="true" />
      <div className="about-word" aria-hidden="true">DETAIL</div>

      <div className="about-grid mx-auto max-w-8xl">
        <div className="about-copy reveal about-copy-reveal">
          <p className="about-eyebrow">About Blackbird</p>
          <h2 className="about-title">
            A local builder with a refined
            <br />
            approach to residential work.
          </h2>
          <p className="about-description">
            Blackbird Projects is known across Toowoomba and the Darling Downs for quality
            workmanship, clear communication, and a personalised service that keeps the building
            process grounded and professional.
          </p>
        </div>

        <div className="about-stage">
          <div className="about-support about-support-primary reveal about-card-reveal rounded-[2rem] border border-charcoal/8 bg-white/84 p-7 shadow-card">
            <p className="text-sm uppercase tracking-[0.24em] text-charcoal/55">What matters</p>
            <p className="mt-4 text-base leading-8 text-charcoal/75">
              We focus on homes that feel considered, practical, and lasting, with finishes chosen
              for both beauty and daily use.
            </p>
          </div>

          <div
            className="about-support about-support-secondary reveal about-card-reveal rounded-[1.7rem] border border-charcoal/8 bg-[#e4e4e1]/94 p-5 shadow-card"
            style={{ transitionDelay: '110ms' }}
          >
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.28em] text-charcoal/54">
              How we work
            </p>
            <p className="mt-2 text-sm leading-7 text-charcoal/68">
              Every project is managed with close attention to detail, honest advice, and a
              collaborative approach from first discussion through to completion.
            </p>
          </div>

          <div className="about-media">
            <div className="about-image-stage reveal about-image-reveal">
              <div
                className="about-image-frame overflow-hidden rounded-[2.4rem] shadow-soft"
                data-parallax-speed="0.08"
              >
                <img
                  src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
                  alt="Warm modern residential interior"
                  className="about-image h-[620px] w-full object-cover"
                />
              </div>
            </div>

            <div className="about-overlay-card reveal about-overlay-reveal rounded-[1.8rem] border border-white/60 bg-white/84 p-6 shadow-soft backdrop-blur-xl">
              <p className="font-serif text-3xl text-charcoal">Local knowledge.</p>
              <p className="mt-3 text-sm leading-7 text-charcoal/72">
                Building for regional Queensland means understanding climate, materials, and the way
                families want to live now and for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  const [featuredService, extensionService, newHomesService, bathroomService, maintenanceService] = services

  return (
    <section id="services" className="services-section section-shell">
      <div className="services-atmosphere services-atmosphere-a" aria-hidden="true" />
      <div className="services-atmosphere services-atmosphere-b" aria-hidden="true" />
      <div className="services-noise" aria-hidden="true" />
      <div className="services-word" aria-hidden="true">SPACES</div>

      <div className="services-shell mx-auto max-w-8xl">
        <div className="services-intro reveal">
          <SectionHeading
            eyebrow="Services"
            title="Residential building services delivered with warmth, restraint, and architectural care."
            description="From transformative renovations to precise maintenance, each service is delivered with the same premium attention to detail, material quality, and lived-in comfort."
          />
        </div>

        <div className="services-layout">
          <article className="services-feature reveal" style={{ transitionDelay: '40ms' }}>
            <div className="services-feature-media" data-parallax-speed="0.06">
              <img
                src={featuredService.image}
                alt={featuredService.title}
                className="services-feature-image"
              />
            </div>
            <div className="services-feature-content">
              <span className="services-kicker">{featuredService.eyebrow}</span>
              <h3>{featuredService.title}</h3>
              <p>{featuredService.description}</p>
            </div>
            <div className="services-feature-caption">
              <p className="services-caption-label">Signature spaces</p>
              <p>{featuredService.caption}</p>
            </div>
          </article>

          <article
            className="services-card services-card-image reveal"
            style={{ transitionDelay: '120ms' }}
          >
            <div className="services-card-media">
              <img src={extensionService.image} alt={extensionService.title} className="services-card-image-asset" />
            </div>
            <div className="services-card-copy">
              <span className="services-kicker">{extensionService.eyebrow}</span>
              <h3>{extensionService.title}</h3>
              <p>{extensionService.description}</p>
            </div>
          </article>

          <article
            className="services-card services-card-text reveal"
            style={{ transitionDelay: '180ms' }}
          >
            <span className="services-kicker">{newHomesService.eyebrow}</span>
            <h3>{newHomesService.title}</h3>
            <p>{newHomesService.description}</p>
            <div className="services-card-pill">Planned around light, proportion, and daily living.</div>
          </article>

          <article
            className="services-card services-card-bath reveal"
            style={{ transitionDelay: '240ms' }}
          >
            <div className="services-card-bath-media">
              <img src={bathroomService.image} alt={bathroomService.title} className="services-card-image-asset" />
            </div>
            <div className="services-card-bath-copy">
              <span className="services-kicker">{bathroomService.eyebrow}</span>
              <h3>{bathroomService.title}</h3>
            </div>
          </article>

          <article
            className="services-card services-card-maintenance reveal"
            style={{ transitionDelay: '300ms' }}
          >
            <span className="services-kicker">{maintenanceService.eyebrow}</span>
            <h3>{maintenanceService.title}</h3>
            <p>{maintenanceService.description}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const [featuredProject, supportingProjectA, supportingProjectB] = projects

  return (
    <section id="projects" className="projects-section section-shell">
      <div className="projects-atmosphere projects-atmosphere-a" aria-hidden="true" />
      <div className="projects-atmosphere projects-atmosphere-b" aria-hidden="true" />
      <div className="projects-noise" aria-hidden="true" />
      <div className="projects-word" aria-hidden="true">PORTFOLIO</div>

      <div className="projects-shell mx-auto max-w-8xl">
        <div className="projects-intro reveal">
          <SectionHeading
            eyebrow="Featured Projects"
            title="A portfolio shaped by warmth, craftsmanship, and thoughtful detail."
            description="Each project is approached as a lived space, not just a build. The result is work that feels grounded, refined, and tailored to the people who call it home."
          />
        </div>

        <div className="projects-layout">
          <article className="projects-feature reveal" style={{ transitionDelay: '40ms' }}>
            <div className="projects-feature-media" data-parallax-speed="0.05">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="projects-feature-image"
              />
            </div>
            <div className="projects-feature-content">
              <div className="projects-feature-meta">
                <span className="projects-chip">{featuredProject.location}</span>
                <span className="projects-chip projects-chip-soft">{featuredProject.type}</span>
              </div>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.description}</p>
            </div>
            <div className="projects-feature-cta">View project story</div>
          </article>

          <article className="projects-support projects-support-top reveal" style={{ transitionDelay: '120ms' }}>
            <div className="projects-support-media">
              <img
                src={supportingProjectA.image}
                alt={supportingProjectA.title}
                className="projects-support-image"
              />
            </div>
            <div className="projects-support-copy">
              <div className="projects-support-meta">
                <span className="projects-chip">{supportingProjectA.location}</span>
                <span className="projects-type">{supportingProjectA.type}</span>
              </div>
              <h3>{supportingProjectA.title}</h3>
              <p>{supportingProjectA.description}</p>
            </div>
          </article>

          <article className="projects-support projects-support-bottom reveal" style={{ transitionDelay: '200ms' }}>
            <div className="projects-support-copy">
              <div className="projects-support-meta">
                <span className="projects-chip">{supportingProjectB.location}</span>
                <span className="projects-type">{supportingProjectB.type}</span>
              </div>
              <h3>{supportingProjectB.title}</h3>
              <p>{supportingProjectB.description}</p>
            </div>
            <div className="projects-support-media projects-support-media-tall">
              <img
                src={supportingProjectB.image}
                alt={supportingProjectB.title}
                className="projects-support-image"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

function WhyChoose() {
  const [craftsmanshipReason, communicationReason, personalisedReason] = reasons

  return (
    <section className="trust-section section-shell">
      <div className="trust-atmosphere trust-atmosphere-a" aria-hidden="true" />
      <div className="trust-atmosphere trust-atmosphere-b" aria-hidden="true" />
      <div className="trust-noise" aria-hidden="true" />
      <div className="trust-linework" aria-hidden="true" />
      <div className="trust-word" aria-hidden="true">TRUST</div>

      <div className="trust-shell mx-auto max-w-8xl">
        <div className="trust-intro reveal">
          <SectionHeading
            eyebrow="Why Choose Blackbird"
            title="A premium building experience built on trust."
            description="We combine practical building knowledge with a calm, considered style of delivery that keeps projects moving with clarity."
          />
        </div>

        <div className="trust-layout">
          <article className="trust-feature reveal" style={{ transitionDelay: '40ms' }}>
            <div className="trust-feature-topline">
              <span className="trust-kicker">01</span>
              <span className="trust-proof-chip">10+ years experience</span>
            </div>
            <h3>{craftsmanshipReason.title}</h3>
            <p>{craftsmanshipReason.description}</p>
            <div className="trust-proof-panel">
              <p className="trust-proof-label">Built for long term living</p>
              <p className="trust-proof-copy">
                Material decisions, detailing, and site execution are approached with durability,
                comfort, and finish quality in mind from the outset.
              </p>
            </div>
          </article>

          <article className="trust-support trust-support-communication reveal" style={{ transitionDelay: '120ms' }}>
            <span className="trust-kicker">02</span>
            <h3>{communicationReason.title}</h3>
            <p>{communicationReason.description}</p>
          </article>

          <article className="trust-support trust-support-proof reveal" style={{ transitionDelay: '200ms' }}>
            <p className="trust-proof-label">Local credibility</p>
            <blockquote className="trust-quote">
              “The workmanship was excellent and the whole process felt considered and professional.”
            </blockquote>
            <p className="trust-quote-meta">Emily & Nathan, renovation clients, Toowoomba</p>
            <div className="trust-proof-divider" />
            <p className="trust-support-footnote">
              {personalisedReason.title}: {personalisedReason.description}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="process-section section-shell bg-[#0f0f0f] text-white">
      <div className="mx-auto grid max-w-8xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="reveal">
          <SectionHeading
            eyebrow="Process"
            title="A clear path from first conversation to final handover."
            description="The process is structured to feel calm, transparent, and easy to understand, while still giving careful attention to the details that matter."
          />
        </div>

        <div className="grid gap-6">
          {process.map((item, index) => (
            <div
              key={item.title}
              className="reveal flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-card md:flex-row md:items-center md:justify-between"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 font-serif text-2xl text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-white/92">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-base leading-8 text-white/68">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-white/12 to-transparent md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section section-shell">
      <div className="mx-auto max-w-8xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from clients who wanted quality, clarity, and a home that felt right."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              className="reveal rounded-[2rem] border border-charcoal/8 bg-white/85 p-8 shadow-card"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <blockquote className="font-serif text-2xl leading-10 text-charcoal">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-charcoal/10 pt-6">
                <p className="text-base font-extrabold text-charcoal">{testimonial.name}</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-charcoal/55">
                  {testimonial.label}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta() {
  return (
    <section id="contact" className="section-shell">
      <div className="mx-auto max-w-8xl">
        <div className="final-cta reveal overflow-hidden rounded-[2.5rem] bg-black px-6 py-14 text-white shadow-soft sm:px-10 lg:px-16 lg:py-20">
          <div className="final-cta-glow final-cta-glow-a" aria-hidden="true" />
          <div className="final-cta-glow final-cta-glow-b" aria-hidden="true" />
          <div className="final-cta-noise" aria-hidden="true" />

          <div className="final-cta-layout">
            <div className="final-cta-copy">
              <p className="text-xs font-extrabold uppercase tracking-[0.34em] text-white/65">
                Start Your Project
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-none sm:text-5xl lg:text-[4.2rem]">
                Planning a renovation, extension, or new home project?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
                We&apos;d love to hear about your plans and talk through the next step. Share a few
                details below and we&apos;ll be in touch for a straightforward conversation about your
                project.
              </p>
              <div className="final-cta-contact">
                <a href="tel:+61407959097" className="final-cta-contact-link">
                  0407 959 097
                </a>
                <a href="mailto:hello@blackbirdprojects.com.au" className="final-cta-contact-link">
                  hello@blackbirdprojects.com.au
                </a>
              </div>
            </div>

            <div className="final-cta-form-shell">
              <form className="final-cta-form" action="#" method="post">
                <div className="final-cta-form-grid">
                  <label className="final-cta-field">
                    <span>Name</span>
                    <input type="text" name="name" placeholder="Your name" />
                  </label>

                  <label className="final-cta-field">
                    <span>Phone</span>
                    <input type="tel" name="phone" placeholder="0407 959 097" />
                  </label>

                  <label className="final-cta-field">
                    <span>Email</span>
                    <input type="email" name="email" placeholder="you@example.com" />
                  </label>

                  <label className="final-cta-field">
                    <span>Project Location</span>
                    <input type="text" name="location" placeholder="Suburb or region" />
                  </label>

                  <label className="final-cta-field final-cta-field-full">
                    <span>Service Needed</span>
                    <select name="service" defaultValue="">
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="renovations">Renovations</option>
                      <option value="extensions">Extensions</option>
                      <option value="new-homes">New Homes</option>
                      <option value="bathrooms">Bathrooms</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </label>

                  <fieldset className="final-cta-checklist final-cta-field-full">
                    <legend>Services of interest</legend>
                    <label><input type="checkbox" name="services" value="renovations" />Renovations</label>
                    <label><input type="checkbox" name="services" value="extensions" />Extensions</label>
                    <label><input type="checkbox" name="services" value="new-homes" />New Homes</label>
                    <label><input type="checkbox" name="services" value="bathrooms" />Bathrooms</label>
                    <label><input type="checkbox" name="services" value="maintenance" />Maintenance</label>
                  </fieldset>

                  <label className="final-cta-field final-cta-field-full">
                    <span>Message</span>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell us a little about your plans, timeframe, and what you'd like to achieve."
                    />
                  </label>
                </div>

                <div className="final-cta-form-actions">
                  <button type="submit" className="btn-primary">
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer border-t border-charcoal/8 bg-[#0f0f0f]">
      <div className="mx-auto grid max-w-8xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <a href="#home" className="footer-brand text-2xl font-semibold tracking-[0.08em] text-charcoal">
            <img src={headerLogo} alt="" className="footer-brand-logo" />
            <span>Blackbird Projects</span>
          </a>
          <p className="mt-4 max-w-sm text-base leading-8 text-charcoal/72">
            Premium residential building services across Toowoomba and the Darling Downs, with a
            focus on craftsmanship, clarity, and homes built to last.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-charcoal/72">
            Quick Links
          </h3>
          <div className="mt-4 flex flex-col gap-3">
            {navigation.map((item) => (
              <a key={item.label} href={item.href} className="text-charcoal/72 transition hover:text-charcoal">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-charcoal/72">
            Contact
          </h3>
          <div className="mt-4 space-y-3 text-charcoal/72">
            <p>hello@blackbirdprojects.com.au</p>
            <p>0407 959 097</p>
            <p>Toowoomba, QLD</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-extrabold uppercase tracking-[0.24em] text-charcoal/72">
            Service Area
          </h3>
          <p className="mt-4 text-base leading-8 text-charcoal/72">
            Proudly serving Toowoomba and the Darling Downs for renovations, extensions, new homes,
            bathrooms, and maintenance.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const parallaxElements = document.querySelectorAll('[data-parallax-speed]')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 },
    )

    elements.forEach((element) => observer.observe(element))

    let ticking = false

    const updateParallax = () => {
      parallaxElements.forEach((element) => {
        const speed = Number(element.getAttribute('data-parallax-speed') ?? '0.08')
        const rect = element.getBoundingClientRect()
        const distanceFromCenter = window.innerHeight / 2 - (rect.top + rect.height / 2)
        const offset = distanceFromCenter * speed

        element.style.setProperty('--parallax-offset', `${offset.toFixed(2)}px`)
      })

      ticking = false
    }

    const handleParallax = () => {
      if (prefersReducedMotion || ticking) {
        return
      }

      ticking = true
      window.requestAnimationFrame(updateParallax)
    }

    if (!prefersReducedMotion && parallaxElements.length > 0) {
      updateParallax()
      window.addEventListener('scroll', handleParallax, { passive: true })
      window.addEventListener('resize', handleParallax)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleParallax)
      window.removeEventListener('resize', handleParallax)
    }
  }, [])

  return (
    <div className="overflow-x-hidden bg-ivory text-charcoal">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyChoose />
        <Process />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
