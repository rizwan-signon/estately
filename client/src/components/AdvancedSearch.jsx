import React, { useEffect, useState } from "react";

const AdvancedSearch = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 800);
    return () => clearTimeout(timer);
  }, [query]);

  const timer = setTimeout(() => {
    console.log("hello i am timer");
  }, 1000);
  console.log(timer);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default AdvancedSearch;
