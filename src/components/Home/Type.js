import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Software Engineer at Epic",
          "A 4.0 GPA Graduate from Clemson University",
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
