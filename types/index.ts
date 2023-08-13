import { MouseEventHandler } from "react";

export interface BaseButtonProps {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  containerStyles?: string;
}
