import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-6xl pb-12 text-center">Dashboard</h1>
      <div className="flex gap-2 items-start justify-center py-10 rounded-lg w-[820px] h-[400px]">
        <div className="border-neutral-600 rounded-md p-8 w-64 flex items-center justify-between flex-col border">
          <h1 className="text-2xl font-bold ">Total Sales</h1>
          <h1 className="text-2xl text-green-500">$ 1200</h1>
        </div>
        <div className="border-neutral-600 rounded-md p-8 w-64 flex items-center justify-between flex-col border">
          <h1 className="text-2xl font-bold">Total Downloads</h1>
          <h1 className="text-2xl text-green-500">1240</h1>
        </div>
        <div className="border-neutral-600 rounded-md p-8 w-64 flex items-center justify-between flex-col border">
          <h1 className="text-2xl font-bold">Total Plays</h1>
          <h1 className="text-2xl text-green-500">15k</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
