import React from "react";
import Nav from "../components/adminNav";

const page = () => {
  return (
    <div className="flex justify-between">
      <Nav />
      <div className="flex-grow">
        <h1 className="text-2xl font-bold mt-8 ml-8">
          This is a blog dashboard page
        </h1>
      </div>
    </div>
  );
};

export default page;
