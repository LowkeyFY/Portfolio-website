export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <p className="font-body text-accent mb-4 tracking-wide">Lagos, Nigeria</p>
      <h1 className="font-display font-bold text-5xl md:text-7xl text-fg leading-tight">
        Full-stack developer.
        <br />
        Designer at heart.
      </h1>
      <p className="mt-6 text-lg text-muted max-w-xl">
        I build full-stack products end-to-end and run FY Creative Studio,
        a design practice for brands that need to look as sharp as they perform.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="bg-accent text-bg px-6 py-3 rounded-full font-medium hover:opacity-90">
          View Work
        </a>
        <a href="#contact" className="border border-surface text-fg px-6 py-3 rounded-full font-medium hover:border-muted">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
