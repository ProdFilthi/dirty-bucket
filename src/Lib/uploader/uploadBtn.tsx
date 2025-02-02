"use client";

import { toast } from "sonner";
import React from "react";

const UploadBtn = () => {
  return (
    <div>
      <button
        className="bg-green-500 w-32 h-12 rounded-lg mt-2 cursor-pointer active:opacity-75"
        type="button"
        onClick={() =>
          toast.success("Your Beat has been uploaded successfully!")
        }
      >
        Upload
      </button>
    </div>
  );
};

export default UploadBtn;
