const projects = [
  {
    name: 'UniApply NG',
    description: 'Building a bridge between Nigerian students and university admissions. FastAPI backend with JWT auth, eligibility engine, and OCR document processing. Designed to reduce the friction of tertiary education access.',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'Celery'],
    link: '',
    status: 'In Development',
  },
  {
    name: 'Phishing Email Detector',
    description: 'An NLP-powered school project that fine-tuned DistilBERT on 10,000 labeled emails. Built across four Colab notebooks with a Gradio demo. My entry point into machine learning and model deployment.',
    tags: ['Python', 'DistilBERT', 'Gradio'],
    link: '',
    status: 'Coming Soon',
  },
  {
    name: 'IKSYLvester & Co Furniture',
    description: 'E-commerce site for a Lagos furniture business. Built a Paystack 75% deposit flow with WhatsApp order confirmation. The client got a working sales channel in under two weeks.',
    tags: ['HTML/CSS/JS', 'Paystack'],
    link: 'https://github.com/LowkeyFY/IK-sylvester',
    status: 'Live',
  },
  {
    name: 'FY Creative Studio',
    description: 'The digital home of my design work. Custom animated cursor, lightbox gallery, and Formspree contact form. More than a portfolio — it is the brand.',
    tags: ['HTML/CSS', 'Formspree'],
    link: 'https://lowkeyfy.github.io/FYCREATIVESTUDIO/',
    status: 'Live',
  },
  {
    name: 'Weather App',
    description: 'My first JavaScript project. A simple app pulling live weather data from a public API. Where it all started — from console.log to deployment.',
    tags: ['JavaScript'],
    link: 'https://github.com/LowkeyFY/WEATHER_app',
    status: 'Live',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-4">
        Software Projects
      </h2>
      <p className="text-muted max-w-xl mb-10">
        A selection of applications, experiments, and production tools built across my journey.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col bg-surface rounded-2xl p-6 hover:-translate-y-1 transition-transform shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 border border-surface/50"
          >
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-display text-xl text-fg">{project.name}</h3>
              {project.status !== 'Live' && (
                <span className="text-xs font-medium text-muted border border-muted/20 rounded-full px-2 py-0.5">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-muted text-sm mb-4 flex-grow leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-accent border border-accent/30 rounded-full px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start text-sm font-medium text-accent hover:underline"
              >
                View Project →
              </a>
            ) : (
              <span className="self-start text-xs font-medium text-muted border border-muted/30 rounded-full px-3 py-1">
                Coming Soon
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
