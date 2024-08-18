import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "MLOps"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 1,
      }}
    />
  );
}

export default Type;
