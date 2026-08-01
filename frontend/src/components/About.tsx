import PersonalityPills from './PersonalityPills';

export default function About() {
  return (
    <section id="about" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-4">
        About Me
      </h2>
      <h3 className="font-display font-bold text-3xl md:text-4xl text-fg mb-6 max-w-2xl">
        From Pixels to Production-Grade Code
      </h3>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            My journey started in design — not in a classroom, but in the market. I learned that a
            great e-flyer isn't just pretty; it sells. That mindset carried over when I picked up
            code two years ago. I don't just build features. I build <strong className="text-fg">solutions that work</strong>.
          </p>
          <p>
            At <strong className="text-fg">FY Creative Studios</strong>, I've delivered 40+ design projects — from nightwear brands
            to beauty care menus. When a close friend needed branding for <strong className="text-fg">Comfy Laundry Services</strong>,
            I didn't just design a logo. I built an identity she still uses today.
          </p>
          <p>
            Now I'm deep in the stack — React, TypeScript, FastAPI, PostgreSQL. I built
            <strong className="text-fg"> IKSYLvester Furniture</strong>'s e-commerce flow with real Paystack payments.
            I'm building <strong className="text-fg">UniApply NG</strong> to bridge the gap between Nigerian students
            and university admissions. Same problem-solving instinct. Different tools.
          </p>
        </div>
        <div className="space-y-6">
          <PersonalityPills />
          <div className="bg-surface border border-surface/50 rounded-2xl p-6">
            <p className="text-sm text-muted mb-2">Currently exploring</p>
            <p className="text-fg font-medium">Full-stack development · AI/ML integration · Scalable system design</p>
          </div>
          <div className="bg-surface border border-surface/50 rounded-2xl p-6">
            <p className="text-sm text-muted mb-2">Based in</p>
            <p className="text-fg font-medium">Lagos, Nigeria · Open to remote roles worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
