// import Button from "@/components/Button";

// export default function HomePage() {
//   return (
//     <div className="relative w-full h-[623px] pb-[50px] mt-[160px]  flex">
//       <div className="relative h-[241px] flex flex-col justify-center items-start pb-[50px] pt-[435px] pl-[124px] pr-[290px]">
//         <h1 className="w-[551px] h-[72px] font-cinzel font-bold text-[67px] leading-[72px] tracking-[-0.06em] text-[#F5F3E8]">
//           Awoken Yodha
//         </h1>
//         <h2 className="w-[552px] h-[36px] font-clash-display font-medium text-[25px] leading-[36px] tracking-[-0.01em] text-[#F5F3E8] whitespace-nowrap">
//           is not a page you follow. It’s a decision you make.
//         </h2>
//         <h2 className="w-[422px] h-[52px] mt-[15px] font-clash font-normal text-[20px] leading-[1.3] tracking-[0em] text-white ">
//           This is not entertainment. It is a direct intervention into your brain architecture
//         </h2>
//         <Button variant="titleRed" className="mt-[15px] self-start">
//           Start Your Journey
//         </Button>
//       </div>

//       {/* <div className="absolute w-[240px]   h-[573px] flex flex-col justify-center items-center flex-nowrap  gap-6 p-0  bg-red-800"> */}
//       <div className="absolute right-[50px] top-1/2 -translate-y-1/2 w-[240px] h-[573px] flex flex-col justify-center items-center gap-6 ">

//         <div className="w-[172px]  h-[532px] flex flex-col justify-center items-center flex-nowrap  gap-6 p-0 ">
//           <div className="w-[35px] h-[35px] flex justify-center items-center gap-[10px] p-[15px] rounded-[200px] bg-[#FBFBD9] font-medium ">
//             1
//           </div>
//           <div className=" relative w-[2px] h-[50px] rounded-[5px] bg-[#FFFFFF] "> </div>
//           <h1 className="w-[112px] h-[21px] font-clash  text-[16px] leading-[1.3em] tracking-0 font-medium text-left text-[#FFFFFF] ">
//             Fill your details.
//           </h1>
//           <div className="w-[35px] h-[35px] flex justify-center items-center gap-[10px] p-[15px] rounded-[200px] bg-[#FBFBD9] font-medium ">
//             2
//           </div>

//           <div className=" relative w-[2px] h-[50px] rounded-[5px] bg-[#FFFFFF] "> </div>
//           <h1 className="w-[146px] h-[21px] font-clash  text-[16px] leading-[1.3em] tracking-0 font-medium text-left text-[#FFFFFF] whitespace-nowrap">
//             Join the Community.
//           </h1>
//           <div className="w-[35px] h-[35px] flex justify-center items-center gap-[10px] p-[15px] rounded-[200px] bg-[#FBFBD9] font-medium  ">
//             3
//           </div>

//           <div className=" relative w-[2px] h-[50px] rounded-[5px] bg-[#FFFFFF] "> </div>
//           <h1 className="w-[172px] h-[20px] font-clash  text-[16px] leading-[1.3em] tracking-0 font-medium text-left text-[#FFFFFF] whitespace-nowrap">
//             Download the workbook.
//           </h1>
//         </div>

//         <h1 className="w-full h-[16px] font-clash font-regular text-[12px] leading-[1.3em] tracking-0 text-center  "> <p className="whitespace-nowrap">
//           <span className="text-[#FF7575]/75">
//             Disclaimer : &nbsp;
//           </span>
//           <span className="text-[#FBFBD9]">
//             If you do not meditate, do not join
//           </span>
//         </p>.</h1>



//       </div>
//     </div>


//   );
// }


import Button from "@/components/Button";

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

export default function HomePage() {
  return (
    <div className="relative w-full h-[623px] pb-[50px] mt-[160px] flex">
      <div className="relative h-[241px] flex flex-col justify-center items-start pb-[50px] pt-[435px] pl-[124px] pr-[290px]">
        <h1 className="w-[551px] h-[72px] font-cinzel font-bold text-[67px] leading-[72px] tracking-[-0.06em] text-[#F5F3E8]">
          Awoken Yodha
        </h1>

        <h2 className="w-[552px] h-[36px] font-clash-display font-medium text-[25px] leading-[36px] tracking-[-0.01em] text-[#F5F3E8] whitespace-nowrap">
          is not a page you follow. It’s a decision you make.
        </h2>

        <h2 className="w-[422px] h-[52px] mt-[15px] font-clash font-normal text-[20px] leading-[1.3] tracking-[0em] text-white">
          This is not entertainment. It is a direct intervention into your brain
          architecture
        </h2>

        <Button variant="titleRed" className="mt-[15px] self-start">
          Start Your Journey
        </Button>
      </div>

      <div className="absolute right-[50px] top-1/2 -translate-y-1/2 w-[240px] h-[573px] flex flex-col justify-center items-center gap-6">
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

        <h1 className="w-full h-[16px] font-clash font-regular text-[12px] leading-[1.3em] tracking-0 text-center">
          <p className="whitespace-nowrap">
            <span className="text-[#FF7575]/75">Disclaimer :&nbsp;</span>
            <span className="text-[#FBFBD9]">
              If you do not meditate, do not join
            </span>
          </p>
          .
        </h1>
      </div>
    </div>
  );
}
