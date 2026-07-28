import Link from "next/link";
import { Container } from "./ui/Container";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nama */}
          <Link href="/" className="text-zinc-950 font-medium tracking-tight">
            Siti Zulhi Nirma S
          </Link>

          {/* Menu Navigasi */}
          <nav className="hidden sm:flex items-center gap-6">
            <Link href="#projects" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">
              About
            </Link>
            <Link href="#journey" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">
              Journey
            </Link>
            <Link href="mailto:emailmu@domain.com" className="text-sm text-zinc-600 hover:text-zinc-950 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}