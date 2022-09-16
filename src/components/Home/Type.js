import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A student at Clemson University",
          "A computer science major",
          "A software engineer",
          "A musician",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 25,
      }}
    />
  );
}

export default Type;
