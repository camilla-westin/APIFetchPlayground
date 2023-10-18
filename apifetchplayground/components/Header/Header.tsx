import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/krisinformation">Krisinformation</Link></li>
                </ul>
            </nav>
        </header>
    )
}