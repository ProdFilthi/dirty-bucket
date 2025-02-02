"use client";

import AudioUploader from "@/Lib/uploader/AudioUploader";
import ImageUploader from "@/Lib/uploader/ImageUploader";
import UploadBtn from "@/Lib/uploader/uploadBtn";

const page = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-6xl mt-4 pb-16 text-center">Uploads</h1>
      <div className="flex items-center justify-center gap-4">
        <AudioUploader />
        <ImageUploader />
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
          <UploadBtn />
        </form>
      </div>
    </div>
  );
};

export default page;
