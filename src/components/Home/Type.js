import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A software engineer",
          "A musician",
          "A lifelong learner",
          "A tech enthusiast",
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
