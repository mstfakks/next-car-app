"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/router";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();
  return <div className="w-full flex justify-center">Show More</div>;
}
