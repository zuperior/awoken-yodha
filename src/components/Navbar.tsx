"use client"

import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

type NavbarProps = {
    onOpenAwareness?: () => void;
};

const Navbar = ({ onOpenAwareness }: NavbarProps) => {
    return (
        <motion.div 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                duration: 0.8, 
                ease: "easeOut"
            }}
            className='w-full flex md:z-50 fixed top-0 justify-center items-center h-[90px] gap-[10px] pt-[20px] md:pr-[25px] pb-[20px] md:pl-[25px] rounded-[15px] overflow-hidden'
        >
            <div className="relative w-full max-w-[1450px] h-[75px] flex items-center justify-between p-0">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <MotionImage
                            src="/home/icon.png"
                            alt="Awoken Yodha Logo"
                            width={112}
                            height={37}
                            className="object-contain cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        />
                    </Link>
                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <Link href="/awareness">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button variant="textSmall" className="self-start">
                                Join Waitlist
                            </Button>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar