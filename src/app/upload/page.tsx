"use client";
import React from "react";
import { toast } from "sonner";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl mt-4 pb-16 text-center">Uploads</h1>
      <div className="flex items-center justify-center gap-4">
        <div className="w-[400px] h-32 hover:bg-neutral-700 my-4 cursor-pointer transition-all flex items-center justify-center rounded-lg border-neutral-500 border-dotted border">
          <div className="flex items-center justify-center flex-col leading-6 text-[12px]">
            <span>Drag & Drop Here</span>
            <span className="opacity-40">Wav & Mp3</span>
          </div>
        </div>
        <div className="w-40 h-32 hover:bg-neutral-700 cursor-pointer transition-all flex items-center justify-center rounded-lg border-neutral-500 border-dotted border">
          <div className="flex items-center justify-center flex-col leading-6 text-[12px]">
            <span>Drag & Drop Here</span>
            <span className="opacity-40">Drop Your Image Here</span>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center py-8 text-2xl">Beat Metadata</h1>
        <form className="flex items-center justify-center flex-col">
          <input
            className="border-neutral-600 mb-3 outline-none w-96 h-12 cursor-pointer rounded-md border border-dotted p-2"
            type="text"
            placeholder="Beat title..."
          />
          <div className="flex items-center justify-between gap-8">
            <input
              className="border-neutral-600 mb-3 outline-none w-32 h-12 cursor-pointer rounded-md border border-dotted p-2"
              type="text"
              placeholder="Bpm: 120"
            />
            <input
              className="border-neutral-600 mb-3 outline-none w-32 h-12 cursor-pointer rounded-md border border-dotted p-2"
              type="text"
              placeholder="Key: C#m"
            />
          </div>
          <input
            className="border-neutral-600 mb-3 outline-none w-56 h-12 cursor-pointer rounded-md border border-dotted p-2"
            type="text"
            placeholder="Price: $"
          />
          <button
            className="bg-green-500 w-32 h-12 rounded-lg mt-2 cursor-pointer active:opacity-75"
            type="button"
            onClick={() =>
              toast.success("Your Beat has been uploaded successfully!")
            }
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
