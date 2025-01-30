"use client";

import { BeatsData } from "@/Lib/BeatsData";
import Image from "next/image";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { Play, Pause } from "lucide-react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Page = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const togglePlay = (id: number) => {
    const audioElement = document.getElementById(
      `audio-${id}`
    ) as HTMLAudioElement;

    if (playingId === id) {
      audioElement.pause();
      setPlayingId(null);
    } else {
      if (playingId !== null) {
        const currentAudio = document.getElementById(
          `audio-${playingId}`
        ) as HTMLAudioElement;
        currentAudio.pause();
      }
      audioElement.play();
      setPlayingId(id);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl pb-12 text-center">Beats Collection</h1>
        <form
          className="flex items-center px-4 mb-12 bg-neutral-600 border border-neutral-500 hover:border-neutral-400 py-4 rounded-lg w-[600px]"
          onSubmit={(e) => {
            e.preventDefault(); // Prevent form from reloading the page
            const formData = new FormData(e.currentTarget);
            const searchQuery = formData.get("search");
            console.log("Search Query:", searchQuery); // Replace with your logic
          }}
        >
          <FaMagnifyingGlass className="text-neutral-400 mr-3" />
          <input
            type="text"
            name="search"
            placeholder="Search beats..."
            className="flex-1 bg-transparent border-none text-white placeholder-neutral-400 focus:outline-none"
          />
          <button
            type="submit"
            className="ml-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 active:opacity-75 cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {BeatsData.map((beat) => (
          <div
            key={beat.id}
            className="relative flex space-x-8 w-[350px] h-[200px] p-4 items-center rounded-lg border border-neutral-500 hover:bg-neutral-800 transition-all cursor-pointer"
          >
            <div className="relative group">
              <Image
                src={beat.BeatPic}
                alt={beat.Title}
                width={150}
                height={150}
                className="rounded-md z-0"
              />
              <button
                type="button"
                onClick={() => togglePlay(beat.id)}
                className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 rounded-md transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer z-10"
              >
                {playingId === beat.id ? (
                  <Pause className="text-white w-10 h-10" />
                ) : (
                  <Play className="text-white w-10 h-10" />
                )}
              </button>
              <audio id={`audio-${beat.id}`} src={beat.Audio}></audio>
            </div>
            <div className="leading-10">
              <h1 className="font-bold text-[18px]">{beat.Title}</h1>
              <div className="flex space-x-2 items-center mt-2">
                <p>{beat.Bpm}</p>
                <GoDotFill className="text-[10px]" />
                <p>{beat.Key}</p>
              </div>
              <button
                type="button"
                className="bg-green-500 w-30 h-10 cursor-pointer active:opacity-75 rounded-md mt-6"
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

export default Page;
