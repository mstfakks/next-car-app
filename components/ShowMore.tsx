"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/router";
import { BaseButton } from ".";
import { updateSearchParams } from "@/utils";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, undefined, { scroll: false });
  };
  return (
    <div className="w-full flex gap-5 justify-center mt-10">
      {!isNext && (
        <BaseButton
          title="Show More"
          type="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
}
