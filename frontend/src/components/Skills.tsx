const skillGroups = [
  { category: "Frontend", skills: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "React Router", "Framer Motion"] },
  { category: "Backend", skills: ["Node.js", "Express", "FastAPI", "PostgreSQL", "SQLAlchemy", "Prisma", "JWT Auth", "Celery", "Redis"] },
  { category: "ML / Data", skills: ["Python", "Transformers (DistilBERT)", "Gradio", "Google Colab"] },
  { category: "Design", skills: ["Logo Design", "E-Flyer Design", "Website Design", "Photo Editing", "UI/UX", "Photoshop", "Illustrator"] },
  { category: "Tools & Platforms", skills: ["Git/GitHub", "Vercel", "Render/Railway", "Paystack API", "Backblaze B2", "OCR (Tesseract)"] },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {skillGroups.map((group) => (
          <div key={group.category}>
            <h3 className="font-display text-fg text-lg mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="text-sm text-muted border border-surface rounded-full px-3 py-1 hover:border-accent hover:text-fg transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
