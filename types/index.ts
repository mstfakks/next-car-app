import { MouseEventHandler } from "react";

export interface BaseButtonProps {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
}

export interface CustomFilterProps {
  title?: string;
}

export interface SearchManufacturerProps {
  manufacturer?: string;
  setManufacturer?: (manufacturer: string) => void;
}

export interface CardDetailModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface CarCardProps {
  car: CarProps;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FetchCarImageProps {
  car: CarProps;
  angle?: string;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}
