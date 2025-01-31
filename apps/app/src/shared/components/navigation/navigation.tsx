import { NavLink } from '../nav-link';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="flex justify-between items-center max-w-6xl p-2  mx-auto">
        <NavLink href="/">sizov</NavLink>
        <div className="flex gap-8">
          <NavLink href="/projects">projects</NavLink>
          <NavLink href="/about">about</NavLink>
          <NavLink href="/contact">contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
