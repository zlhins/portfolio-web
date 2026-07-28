import { Container } from "./ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-zinc-200 bg-zinc-50">
      <Container>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-zinc-950">Siti Zulhi Nirma S</p>
            <p className="text-xs text-zinc-500 mt-1">
              Informatics Graduate & Technology Problem Solver
            </p>
          </div>

          <div className="flex items-center gap-6">
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
              href="mailto:st.zulhins@gmail.com"
              className="text-xs font-mono text-blue-600 hover:text-blue-700 transition-colors"
            >
              Email
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}