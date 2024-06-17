"use client";

import { Link } from "next-view-transitions";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Accueil",
        href: "/",
    },
    {
        name: "Projets",
        href: "/projects",
    },
    {
        name: "A propos",
        href: "/about",
    },
    {
        name: "Contact",
        href: "/contact",
    }
]

export default function Header() {
    const PathName = usePathname()

    return (
        <header className="w-3/5 flex mt-8 h-16 justify-between items-center">
            <h1 className="text-3xl font-bold">Mateo<span className="text-primary">.</span></h1>
            <div className="flex gap-8 mr-8">
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`${PathName === link.href && "text-primary border-b-lime-200 border-accent"} font-medium hover:text-accent transition-all`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </header>
    );
}
