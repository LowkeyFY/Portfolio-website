export default function AnimatedGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-accent/10 blur-[120px] animate-pulse" />
      <div className="absolute -bottom-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-accent/5 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}
