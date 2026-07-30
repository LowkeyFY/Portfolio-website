export default function DesignWork() {
  return (
    <section id="design" className="px-6 max-w-5xl mx-auto py-24">
      <h2 className="font-display font-bold text-accent text-sm tracking-widest uppercase mb-4">Design Work</h2>
      <p className="text-muted max-w-xl mb-10">Brand identity, logos, e-flyers, and photo editing from FY Creative Studio.</p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="aspect-video bg-surface rounded-2xl flex items-center justify-center border border-dashed border-muted/40">
          <span className="text-muted text-sm">Design piece 1 — coming soon</span>
        </div>
        <div className="aspect-video bg-surface rounded-2xl flex items-center justify-center border border-dashed border-muted/40">
          <span className="text-muted text-sm">Design piece 2 — coming soon</span>
        </div>
      </div>
      <div className="mt-8 flex gap-4">
        <a href="https://instagram.com/FY_CREATIVE_STUDIOS" target="_blank" rel="noopener noreferrer" className="text-sm text-fg border border-surface rounded-full px-4 py-2 hover:border-accent transition-colors">More on Instagram →</a>
        <a href="https://github.com/LowkeyFY" target="_blank" rel="noopener noreferrer" className="text-sm text-fg border border-surface rounded-full px-4 py-2 hover:border-accent transition-colors">More on GitHub →</a>
      </div>
    </section>
  );
}
