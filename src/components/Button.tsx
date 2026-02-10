// components/ui/Button.tsx
import clsx from "clsx";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "textSmall" | "titleRed";
  className?: string;
};

export default function Button({
  children,
  variant = "textSmall",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center flex-none bg-transparent",
        " whitespace-nowrap",
        variant === "textSmall" &&
        "w-[158px] h-[43px] font-cinzel text-[18px] font-regular leading-[1.4em] tracking-[-0.05em] text-[#F5F3E8]",
        variant === "titleRed" &&
        "w-[280px] h-[51px] font-cinzel text-[22px] leading-[1.4em] tracking-[-0.05em] text-[#F82B3F]",
        className
      )}
    >
      <span>{children}</span>

      {/* Arrow */}


      <ArrowRight
        strokeWidth={1.15}
        className={clsx(
          "w-[22px] h-[22px] transition-all duration-300",
          variant === "textSmall" && "text-white",
          variant === "titleRed" && "text-[#F82B3F]",
          "group-hover:text-[#F82B3F] group-hover:-translate-y-1"
        )}
      
      />
    </button>
  );
}
