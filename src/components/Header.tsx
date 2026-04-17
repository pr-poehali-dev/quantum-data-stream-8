export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Healthy Life</div>
        <nav className="flex gap-8">
          <a
            href="#nutrition"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Nutrition
          </a>
          <a
            href="#fitness"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Fitness
          </a>
          <a
            href="#mindfulness"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Mindfulness
          </a>
          <a
            href="#sleep"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Sleep
          </a>
        </nav>
      </div>
    </header>
  )
}