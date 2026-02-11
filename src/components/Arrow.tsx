// components/icons/ArrowRight.tsx
type ArrowRightProps = {
  className?: string;
};

export default function ArrowRight({ className }: ArrowRightProps) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 9H14"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 5L14 9L10 13"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
