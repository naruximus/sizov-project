import { NavLink } from '../nav-link';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full p-8 md:p-16 lg:p-24 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <NavLink href="/">sizov</NavLink>
        <div className="flex gap-8">
          <NavLink href="/projects">projects</NavLink>
          <NavLink href="/about">about</NavLink>
          <NavLink href="/contact">contact</NavLink>
          <NavLink href="/anime">anime</NavLink>
        </div>
      </div>
    </nav>
  );
}
