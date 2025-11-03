import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState("hello");

  const updateTime = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "");
    const minutues = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    setTime(`${hours}:${minutues}:${seconds}`);
  };

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div style={{ fontsize: "50px", fontWeight: "bold" }}>
        <h1>time is {time}</h1>
      </div>
    </div>
  );
};

export default DigitalClock;
