"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { href: "/", name: "Home" },
    { href: "/resume", name: "Resume" },
    { href: "/projects", name: "Projects" },
    { href: "/contact", name: "Contact" },
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link href={link.href} key={index}
                        className={`${pathname === link.href && "text-primary border-b-2 border-primary drop-shadow-sm"} capitalize font-medium hover:text-primary hover:drop-shadow-sm transition-all`}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;