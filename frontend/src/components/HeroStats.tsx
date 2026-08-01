export default function HeroStats() {
  const stats = [
    { value: '2+', label: 'Years Coding' },
    { value: '40+', label: 'Design Clients' },
    { value: '10+', label: 'Projects Shipped' },
    { value: '∞', label: 'Lines of Code' },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-surface/50 pt-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center md:text-left">
          <p className="font-display font-bold text-3xl md:text-4xl text-accent">{stat.value}</p>
          <p className="text-muted text-sm mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
