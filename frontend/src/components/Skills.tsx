const traits = [
  { name: 'Learn', icon: '📚' },
  { name: 'Build', icon: '🛠️' },
  { name: 'Impact', icon: '🚀' },
  { name: 'Design-Driven', icon: '🎨' },
  { name: 'Problem Solver', icon: '🧩' },
  { name: 'Continuous Learner', icon: '♻️' },
];

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 'Advanced', years: '1.5+ yrs' },
      { name: 'TypeScript', level: 'Advanced', years: '1+ yr' },
      { name: 'JavaScript', level: 'Expert', years: '2+ yrs' },
      { name: 'Tailwind CSS', level: 'Expert', years: '1.5+ yrs' },
      { name: 'HTML/CSS', level: 'Expert', years: '2+ yrs' },
      { name: 'Vite', level: 'Advanced', years: '1+ yr' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'FastAPI', level: 'Intermediate', years: '< 1 yr' },
      { name: 'PostgreSQL', level: 'Intermediate', years: '< 1 yr' },
      { name: 'Node.js', level: 'Intermediate', years: '< 1 yr' },
      { name: 'Prisma', level: 'Intermediate', years: '< 1 yr' },
    ],
  },
  {
    category: 'Design',
    skills: [
      { name: 'Brand Identity', level: 'Expert', years: '3+ yrs' },
      { name: 'E-Flyers', level: 'Expert', years: '3+ yrs' },
      { name: 'Photo Editing', level: 'Advanced', years: '2+ yrs' },
      { name: 'UI/UX', level: 'Advanced', years: '1.5+ yrs' },
    ],
  },
  {
    category: 'Tools & Methods',
    skills: [
      { name: 'Git / GitHub', level: 'Advanced', years: '2+ yrs' },
      { name: 'Figma', level: 'Advanced', years: '2+ yrs' },
      { name: 'Celery / Redis', level: 'Learning', years: '< 1 yr' },
      { name: 'JWT Auth', level: 'Intermediate', years: '< 1 yr' },
    ],
  },
];

const softSkills = [
  { name: 'Leadership', icon: '👑' },
  { name: 'Communication', icon: '💬' },
  { name: 'Teamwork', icon: '🤝' },
  { name: 'Time Management', icon: '⏰' },
  { name: 'Adaptability', icon: '🔄' },
  { name: 'Critical Thinking', icon: '🧠' },
  { name: 'Creativity', icon: '💡' },
  { name: 'Attention to Detail', icon: '🔍' },
];

const levelColors: Record<string, string> = {
  Expert: 'text-accent border-accent/40',
  Advanced: 'text-accent/80 border-accent/30',
  Intermediate: 'text-accent/60 border-accent/20',
  Learning: 'text-muted border-muted/20',
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-4">
        Skills & Technologies
      </h2>
      <p className="text-muted max-w-xl mb-10">
        A focused stack built for shipping — from design tools to production APIs.
      </p>

      {/* Mindset / Soft Skills */}
      <div className="mb-10">
        <p className="text-sm text-muted mb-4">Mindset</p>
        <div className="flex flex-wrap gap-3">
          {traits.map((trait) => (
            <span
              key={trait.name}
              className="inline-flex items-center gap-2 text-sm font-medium text-accent border border-accent/30 rounded-full px-4 py-2"
            >
              <span>{trait.icon}</span>
              {trait.name}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-10">
        <p className="text-sm text-muted mb-4">Soft Skills</p>
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 text-sm font-medium text-fg bg-surface border border-surface/50 rounded-full px-4 py-2 hover:border-accent/30 transition-colors"
            >
              <span>{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="bg-surface border border-surface/50 rounded-2xl p-6">
            <h3 className="font-display font-semibold text-fg mb-4">{cat.category}</h3>
            <div className="space-y-3">
              {cat.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="text-sm text-fg">{skill.name}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs border rounded-full px-2 py-0.5 ${levelColors[skill.level]}`}>
                      {skill.level}
                    </span>
                    <span className="text-xs text-muted w-16 text-right">{skill.years}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
