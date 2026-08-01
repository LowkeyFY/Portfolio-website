const traits = [
  'Learn',
  'Build',
  'Impact',
  'Design-Driven',
  'Problem Solver',
  'Continuous Learner',
];

export default function PersonalityPills() {
  return (
    <div className="flex flex-wrap gap-3">
      {traits.map((trait) => (
        <span
          key={trait}
          className="text-xs font-medium text-accent border border-accent/30 rounded-full px-4 py-1.5"
        >
          {trait}
        </span>
      ))}
    </div>
  );
}
