import React from "react";

export const Searchbox = () => {
  return (
    <div>
      <label htmlFor="Search"></label>
      <input
        type="text"
        placeholder="Search Song"
        className="py-2 pl-4 text-lg"
        id="search"
      />
    </div>
  );
};
