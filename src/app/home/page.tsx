"use client"

import { useState } from "react";
import Button from "@/components/Button";
import Awareness from "@/components/Awareness";

type Step = {
  id: number;
  title: string;
  width: string;
};

const steps: Step[] = [
  { id: 1, title: "Fill your details.", width: "w-[112px]" },
  { id: 2, title: "Join the Community.", width: "w-[146px]" },
  { id: 3, title: "Download the workbook.", width: "w-[172px]" },
];


const StepItem = ({
  id,
  title,
  width,
}: {
  id: number;
  title: string;
  width: string;
}) => {
  return (
    <>
      <div className="w-[35px] h-[35px] flex justify-center items-center gap-[10px] p-[15px] rounded-[200px] bg-[#FBFBD9] font-medium">
        {id}
      </div>

      <div className="relative w-[2px] h-[50px] rounded-[5px] bg-[#FFFFFF]" />

      <h1
        className={`${width} h-[21px] font-clash text-[16px] leading-[1.3em] tracking-0 font-medium text-left text-[#FFFFFF] whitespace-nowrap`}
      >
        {title}
      </h1>
    </>
  );
};


const MobileStepItem = ({ id, title }: { id: number; title: string }) => {
  return (
    <div className="flex items-center gap-1">
      <div className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-[#FBFBD9] font-medium text-[14px] shrink-0">
        {id}
      </div>
      <span className="font-clash   text-[12px] md:text-[16px] text-[#FFFFFF] text-center px-1 leading-[1.3em]  tracking-0">
        {title}
      </span>
    </div>
  );
};


const HeroContent = ({ isMobile = false, onStart }: { isMobile?: boolean; onStart?: () => void }) => {
  const textClasses = isMobile
    ? {
      title: "w-full font-cinzel font-bold md:text-[50px] text-[38px] leading-[44px] tracking-[-0.06em] text-[#F5F3E8] text-center",
      subtitle: "w-full font-clash-display font-medium text-[17px] md:text-[23px] leading-[30px]  md:leading-[36px] tracking-[-0.01em] text-[#F5F3E8] text-center",
      description: "w-full mt-[10px] font-clash font-normal text-[16px] md:text-[20px] leading-[1.3] tracking-[0em] text-white text-center",
      button: "mt-[15px] text-[14px]",
    }
    : {
      title: "w-[551px] h-[72px] font-cinzel font-bold text-[67px] leading-[72px] tracking-[-0.06em] text-[#F5F3E8]",
      subtitle: "w-[552px] h-[36px] font-clash-display font-medium text-[25px] leading-[36px] tracking-[-0.01em] text-[#F5F3E8] whitespace-nowrap",
      description: "w-[422px] h-[52px] mt-[15px] font-clash font-normal text-[20px] leading-[1.3] tracking-[0em] text-white",
      button: "mt-[15px] self-start",
    };

  return (
    <>
      <h1 className={textClasses.title}>Awoken Yodha</h1>

      <h2 className={textClasses.subtitle}>
        is not a page you follow. It's a decision you make.
      </h2>

      <h2 className={textClasses.description}>
        This is not entertainment. It is a direct intervention into your brain
        architecture
      </h2>

      <Button variant="titleRed" className={textClasses.button} onClick={onStart}>
        Start Your Journey
      </Button>
    </>
  );
};


const Disclaimer = ({ isMobile = false }: { isMobile?: boolean }) => {
  const textClass = isMobile
    ? "w-full font-clash font-regular text-[10px] leading-[1.3em] tracking-0 text-center mt-2"
    : "w-full h-[16px] font-clash font-regular text-[12px] leading-[1.3em] tracking-0 text-center";

  return (
    <h1 className={textClass}>
      {isMobile ? (
        <>
          <span className="text-[#FF7575]/75">Disclaimer : </span>
          <span className="text-[#FBFBD9]">
            If you do not meditate, do not join.
          </span>
        </>
      ) : (
        <p className="whitespace-nowrap">
          <span className="text-[#FF7575]/75">Disclaimer :&nbsp;</span>
          <span className="text-[#FBFBD9]">
            If you do not meditate, do not join
          </span>
        </p>
      )}
      {!isMobile && "."}
    </h1>
  );
};

export default function HomePage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative w-full lg:h-[623px] h-screen pb-[50px] lg:mt-[160px] mt-0 flex">

      <Awareness open={open} onClose={() => setOpen(false)} />

      <div className="relative h-[241px] lg:flex hidden flex-col justify-center items-start pb-[50px] pt-[435px] pl-[26px] pr-[290px]">
        <HeroContent onStart={() => setOpen(true)} />
      </div>


      <div className="lg:hidden absolute bottom-[50px] left-0 right-0 px-6 flex flex-col items-center">
        <HeroContent isMobile onStart={() => setOpen(true)} />


        <div className="flex flex-col items-center gap-4 mt-8 w-full">
          <div className="flex items-center justify-center w-full gap-1">
            {steps.map((step) => (
              <MobileStepItem key={step.id} id={step.id} title={step.title} />
            ))}
          </div>

          <Disclaimer isMobile />
        </div>
      </div>


      <div className="absolute right-[50px] top-1/2 -translate-y-1/2 w-[240px] h-[573px] lg:flex hidden flex-col justify-center items-center gap-6">
        <div className="w-[172px] h-[532px] flex flex-col justify-center items-center flex-nowrap gap-6 p-0">
          {steps.map((step) => (
            <StepItem
              key={step.id}
              id={step.id}
              title={step.title}
              width={step.width}
            />
          ))}
        </div>

        <Disclaimer />
      </div>
    </div>
  );
}