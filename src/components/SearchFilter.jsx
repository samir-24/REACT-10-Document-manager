import React, { useState } from "react";

const SearchFilter = ({ setSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search file..."
      value={value}
      onChange={handleChange}
      className="border p-2 mb-4 w-full"
    />
  );
};

export default SearchFilter;