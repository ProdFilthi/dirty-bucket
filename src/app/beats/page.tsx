import { BeatsData } from "@/components/BeatsData";
import Image from "next/image";
import React from "react";
import { GoDotFill } from "react-icons/go";

const page = () => {
  return (
    <div>
      <h1 className="text-6xl pb-12 text-center">Beats Collection</h1>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {BeatsData.map((beat) => (
          <div
            key={beat.id}
            className="flex space-x-8 w-[350px] h-[200px] p-4 items-center rounded-lg border border-neutral-500 hover:bg-neutral-700 transition-all cursor-pointer"
          >
            <div>
              <Image
                src="/BeatsComponents/BeatPics/future1.jpg"
                alt={beat.Title}
                width={150}
                height={150}
                className="rounded-md"
              />
            </div>
            <div className="leading-10">
              <h1 className="font-bold text-[18px]">{beat.Title}</h1>
              <div className="flex space-x-2 items-center">
                <p>{beat.Bpm}</p>
                <GoDotFill className="text-[10px]" />
                <p>{beat.Key}</p>
              </div>
              <button
                type="button"
                className="bg-green-500 w-24 h-10 rounded-md mt-2"
              >
                {beat.Price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
