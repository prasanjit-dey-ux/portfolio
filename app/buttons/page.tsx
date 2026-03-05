import { ReactNode } from "react";

interface ActionButtonProps {
  label: string;
  icon: ReactNode;
  onClick?: () => void;
}

export const ActionButton = ({ label, icon, onClick }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="
        w-44 h-14 px-7 py-4 inline-flex justify-center items-center gap-2 overflow-hidden
        rounded-[50px] cursor-pointer transition-all duration-200 active:scale-[0.97]
        bg-linear-to-b from-violet-400 to-violet-500
        /* Triple Shadow Stack */
        shadow-[0px_1px_0px_0px_rgba(0,0,0,0.10),0px_4px_14px_0px_rgba(0,0,0,0.05),inset_0px_2px_0px_0px_rgba(255,255,255,0.50)]
        /* Outline for depth */
        outline -outline-offset-1 outline-violet-500
      "
    >
      <div className="w-5 h-5 relative flex items-center justify-center">
        {icon}
      </div>
      <span className="text-white text-base font-medium font-['Inter'] capitalize leading-none">
        {label}
      </span>
    </button>
  );
};
