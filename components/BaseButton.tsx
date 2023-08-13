"use-client";
import { BaseButtonProps } from "@/types";
import Image from "next/image";

export default function BaseButton({
  disabled,
  type,
  onClick,
  title,
  containerStyles,
  textStyles,
  rightIcon,
}: BaseButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6 ">
          <Image
            src={rightIcon}
            alt="right-arrow"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
