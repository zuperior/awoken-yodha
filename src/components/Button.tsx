import clsx from "clsx";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "textSmall" | "titleRed";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "textSmall",
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "group flex items-center justify-center flex-none bg-transparent whitespace-nowrap transition-colors duration-300",
        variant === "textSmall" &&
          "w-[158px] h-[43px] font-cinzel text-[18px] font-regular leading-[1.4em] tracking-[-0.05em] text-[#F5F3E8] hover:text-[#F82B3F]",
        variant === "titleRed" &&
          "w-[280px] h-[51px] font-cinzel text-[22px] leading-[1.4em] tracking-[-0.05em] text-[#F82B3F] hover:text-[#FF6373]",
        className
      )}
    >
      <span>{children}</span>

     
      {variant === "textSmall" && (
        <>
          <ArrowRight
            strokeWidth={1.15}
            className="ml-2 w-[24px] h-[24px] text-white transition-all duration-300 group-hover:hidden"
          />
          <ArrowUpRight
            strokeWidth={1.15}
            className="ml-2 hidden w-[24px] h-[24px] text-[#F82B3F] transition-all duration-300 group-hover:block"
          />
        </>
      )}


      {variant === "titleRed" && (
        <>
          <ArrowRight
            strokeWidth={1.15}
            className="ml-2 w-[22px] h-[22px] text-[#F82B3F] transition-all duration-300 group-hover:hidden"
          />
          <ArrowUpRight
            strokeWidth={1.15}
            className="ml-2 hidden w-[22px] h-[22px] text-[#FF6373] transition-all duration-300 group-hover:block"
          />
        </>
      )}
    </button>
  );
}