"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";


const links = [
    { href: "/", name: "Home" },
    { href: "/resume", name: "Resume" },
    { href: "/projects", name: "Projects" },
    { href: "/contact", name: "Contact" },
]

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="p-2 shadow rounded-full">
                <Menu className="size-10" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader className="mt-32 mb-40 sm:text-center">
                    <Link href="/">
                        <SheetTitle className="text-2xl">Alaa<span className="text-primary">.</span></SheetTitle>
                    </Link>
                    <SheetDescription>
                        <ModeToggle />
                    </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-4">
                    {links.map((link, index) => {
                        return (
                            <Link key={index} href={link.href}
                                className={`text-xl capitalize hover:text-primary transition-all ${pathname === link.href && "text-primary border-b border-primary"}`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
                <Link href="/contact">
                    <Button size={"lg"} className="mt-8 w-full rounded-full py-6"><span className="drop-shadow-sm font-bold text-lg">Hire me</span></Button>
                </Link>
            </SheetContent>
        </Sheet >

    );
}

export default MobileNav;