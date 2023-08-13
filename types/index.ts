import { MouseEventHandler } from "react";

export interface BaseButtonProps {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  containerStyles?: string;
}

export interface CustomFilterProps {
  title?: string;
}

export interface SearchManufacturerProps {
  manufacturer?: string;
  setManufacturer?: (manufacturer: string) => void;
}
