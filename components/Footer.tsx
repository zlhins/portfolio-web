import { Container } from "./ui/Container";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 border-t border-zinc-200 bg-zinc-50">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-zinc-950">Siti Zulhi Nirma S</p>
            <p className="text-xs text-zinc-500 mt-1">
              Informatics Graduate & Technology Problem Solver
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="https://github.com/zlhins"
                target="_blank"
                className="text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/sitizulhins"
                target="_blank"
                className="text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=st.zulhins@gmail.com"
                target="_blank"
                className="text-xs font-mono text-zinc-600 hover:text-zinc-950 transition-colors"
              >
                st.zulhins@gmail.com
              </Link>
            </div>

            <span className="hidden md:inline-block text-zinc-300">|</span>

            <p className="text-xs font-mono text-zinc-400">
              © {currentYear}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
