import Link from 'next/link'
export default function Header() {
    return (
        <header>
            <nav>
                <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <li><Link href='/'>Página Inicial</Link></li>
                    <li><Link href='/cadastro'>Cadastro</Link></li>
                    <li><Link href='/relatorio'>Relatório</Link></li>
                </ul>
            </nav>
        </header>
    )
}
