import AnimatedGradient from './AnimatedGradient';
import HeroStats from './HeroStats';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-24">
      <AnimatedGradient />
      <p className="font-body text-accent mb-4 tracking-wide text-sm uppercase">
        Lagos, Nigeria · Computer Science Student
      </p>
      <h1 className="font-display font-bold text-5xl md:text-7xl text-fg leading-tight">
        Learn.
        <br />
        Build.
        <br />
        <span className="text-accent">Impact.</span>
      </h1>
      <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
        I started with design — 40+ clients, brands, and e-flyers that actually moved product.
        Now I build the tech behind the visuals. React, TypeScript, and FastAPI. Bridging creativity
        and engineering to solve real problems for real people.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="bg-accent text-bg px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
          View Work
        </a>
        <a href="#contact" className="border border-surface text-fg px-6 py-3 rounded-full font-medium hover:border-accent transition-colors">
          Get In Touch
        </a>
      </div>
      <HeroStats />
    </section>
  );
}
