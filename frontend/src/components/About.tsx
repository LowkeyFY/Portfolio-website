const whatIDo = [
  "Graphic Design & Brand Identity",
  "Frontend Web Development",
  "React Development",
  "UI/UX Design",
  "Responsive Website Design",
  "Full-Stack Development (Learning)",
  "Open Source & Continuous Learning",
];

export default function About() {
  return (
    <section id="about" className="px-6 max-w-3xl mx-auto py-24">
      <h2 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-4">About</h2>
      <p className="text-2xl md:text-3xl text-fg leading-snug font-display mb-6">
        I'm Ifeanyi Okorie, a Computer Science student, graphic designer, and frontend developer based in Lagos, Nigeria. My path into tech started with graphic design, discovering the power of visual storytelling and branding, before curiosity pulled me into web development, where I could pair that creative eye with problem-solving.
      </p>
      <p className="text-lg text-muted leading-relaxed">
        I specialize in responsive websites, intuitive interfaces, and visual design with close attention to typography, color, and spacing, then bring those designs to life as fast, accessible web applications. I'm continuously growing my skills in JavaScript, React, FastAPI, and full-stack engineering through real projects. My goal is to become a world-class full-stack software engineer while building products that make a genuine impact.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {whatIDo.map((item) => (
          <span key={item} className="text-sm text-muted border border-surface rounded-full px-3 py-1 hover:border-accent hover:text-fg transition-colors">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
