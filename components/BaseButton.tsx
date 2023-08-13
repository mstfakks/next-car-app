"use-client";
import { BaseButtonProps } from "@/types";
import Image from "next/image";

export default function BaseButton({
  disabled,
  type,
  onClick,
  title,
  containerStyles,
}: BaseButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={onClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
