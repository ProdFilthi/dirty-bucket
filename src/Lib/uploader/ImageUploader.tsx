"use client";

import axios from "axios";
import React, { ChangeEvent, useState } from "react";
type UploadStatus = "idle" | "uploading" | "succes" | "error";

const AudioUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files?.[0]);
      setStatus("idle");
    }
  };
  const handleFileUpload = async () => {
    if (!file) return;
    setStatus("uploading");
    const formData = new FormData();
    formData.append("file", file);
    try {
      await axios.post("http://localhost:3001/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setStatus("succes");
    } catch {
      setStatus("error");
    }
  };
  return (
    <div
      className="w-32 h-32 hover:bg-neutral-800 my-4 cursor-pointer transition-all flex items-center justify-center rounded-lg border-neutral-500 border-dotted border"
      onClick={() => {
        document.getElementById("fileinput")?.click();
      }}
    >
      <div className="flex items-center justify-center flex-col leading-6 text-[12px]">
        {file ? (
          <>
            <p className="text-sm">{file.name}</p>
            {status === "idle" && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleFileUpload();
                }}
                className="text-green-500 cursor-pointer"
              >
                Click to upload
              </button>
            )}
          </>
        ) : (
          <>
            <span>Select A Image</span>
            <span className="opacity-40">png & jpg</span>
          </>
        )}
        <input
          type="file"
          id="fileinput"
          className="hidden"
          accept="image/png, image/jpeg"
          aria-label="file-input"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AudioUploader;
