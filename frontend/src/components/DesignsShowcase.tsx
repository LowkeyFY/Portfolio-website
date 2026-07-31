import { ExternalLink } from 'lucide-react';

const designs = [
  {
    id: 1,
    title: 'Shari Night Wears',
    category: 'E-Flyer / Product',
    image: '/designs/shari-nightwear.png',
    description: 'Promotional e-flyer for a nightwear brand — comfort, style, and confidence every night.',
  },
  {
    id: 2,
    title: 'Enny Beauty Care',
    category: 'E-Flyer / Service',
    image: '/designs/enny-beauty.png',
    description: 'Service menu e-flyer for a beauty and wellness brand — because you deserve to shine.',
  },
];

export default function DesignsShowcase() {
  return (
    <section id="designs" className="py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Graphic Design Work
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Selected e-flyers and brand visuals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {designs.map((d) => (
            <div
              key={d.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-pink-600 dark:text-pink-400">
                  {d.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {d.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {d.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://lowkeyfy.github.io/FYCREATIVESTUDIO/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-pink-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-700 dark:bg-pink-500 dark:hover:bg-pink-600"
          >
            Show More Designs
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
