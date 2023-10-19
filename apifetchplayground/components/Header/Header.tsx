import Link from 'next/link'

export default function Header() {
    return (
        <header className="p-6">
            <nav>
                <ul className="flex">
                    <li className="py-4 px-6 bg-white border-b-4 border-black"><Link href="/">Hem</Link></li>
                    <li className="py-4 px-6 bg-white border-b-4 border-krisblue"><Link href="/krisinformation">Krisinformation</Link></li>
                    <li className="py-4 px-6 bg-white border-b-4 border-vaderyellow"><Link href="/vadervarning">Vädervarningar</Link></li>
                </ul>
            </nav>
        </header>
    )
}