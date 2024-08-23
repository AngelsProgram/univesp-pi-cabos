import Link from "next/link";

import { Logged } from "#/components/Logged";

export default async function Header() {
  return (
    <header>
      <nav>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li>
            <Link href="/">Página Inicial</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/cadastro">Cadastro</Link>
          </li>
          <li>
            <Link href="/relatorio">Relatório</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Logged />
          </li>
        </ul>
      </nav>
    </header>
  );
}
