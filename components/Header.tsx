import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-8 px-4 xl:py-12 from-primary/10 to-background bg-gradient-to-b backdrop-blur-md dark:backdrop-blur-lg">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Alaa<span className="text-primary">.</span></h1>
                </Link>

                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <ModeToggle />
                    <Link href="/contact">
                        <Button size={"lg"} className="rounded-full"><span className="drop-shadow-sm font-bold text-lg">Hire me</span></Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;