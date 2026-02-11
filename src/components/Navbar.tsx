"use client"

import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";

type NavbarProps = {
  onOpenAwareness?: () => void;
};

const Navbar = ({ onOpenAwareness }: NavbarProps) => {
    return (
        <div className='w-full flex fixed top-0 justify-center items-center h-[115px] gap-[10px] pt-[20px] pr-[25px] pb-[20px] pl-[25px] rounded-[15px] overflow-hidden '>
            <div className="relative w-full max-w-[1450px] h-[75px] flex items-center justify-between p-0">
                <div className="flex items-center gap-2">
                    <Link href="/">

                    <Image
                        src="/home/icon.png"
                        alt="Awoken Yodha Logo"
                        width={112}
                        height={37}
                        className="object-contain"
                    />
                                        </Link>

                </div>

                <div className="flex items-center gap-2 cursor-pointer">
                    <Link href="/awareness">
                        <Button variant="textSmall" className="self-start">
                            Join Waitlist
                        </Button>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default Navbar