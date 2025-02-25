"use client";

import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const PageTransition = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" }
                    }}
                    className='h-screen w-screen fixed from-background/10 to-background bg-gradient-to-b backdrop-blur-md top-0 pointer-events-none'
                />
                {children}
            </div>
        </AnimatePresence>
    );
}

export default PageTransition;