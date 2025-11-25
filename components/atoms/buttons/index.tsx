"use client";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        color-primary
        text-white font-bold rounded-md
        py-2 w-[164px] h-11
        shadow-md hover:opacity-90 transition
        ${className}
      `}
    >
      {children}
    </button>
  );
}
