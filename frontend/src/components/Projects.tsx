const projects = [
  { name: "UniApply NG", description: "Nigerian university admission assistant. FastAPI + PostgreSQL/SQLAlchemy backend with JWT auth, an eligibility engine, and document upload with OCR fallback and Celery/Redis async processing.", tags: ["FastAPI", "PostgreSQL", "React", "Celery"], link: "" },
  { name: "Phishing Email Detector", description: "ML model fine-tuned on DistilBERT over a 10,000-email labeled dataset, built across four Colab notebooks with a Gradio demo.", tags: ["Python", "DistilBERT", "Gradio"], link: "" },
  { name: "IKSYLvester & Co Furniture", description: "Furniture e-commerce site for a Lagos business, with a Paystack 75% deposit payment flow and WhatsApp order confirmation.", tags: ["HTML/CSS/JS", "Paystack"], link: "https://github.com/LowkeyFY/IK-sylvester" },
  { name: "FY Creative Studio", description: "Dark, lime-green brand site with a custom animated cursor, lightbox project gallery, and Formspree contact form.", tags: ["HTML/CSS", "Formspree"], link: "https://lowkeyfy.github.io/FYCREATIVESTUDIO/" },
  { name: "Weather App", description: "A simple JavaScript weather app pulling live conditions from a public API.", tags: ["JavaScript"], link: "https://github.com/LowkeyFY/WEATHER_app" },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-10">Software Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col bg-surface rounded-2xl p-6 hover:-translate-y-1 transition-transform shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 border border-surface/50"
          >
            <h3 className="font-display text-xl text-fg mb-2">{project.name}</h3>
            <p className="text-muted text-sm mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-accent border border-accent/30 rounded-full px-2 py-1">{tag}</span>
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
