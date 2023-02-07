import React from "react";
import { Slides } from "./components/slides.js";
import { Closing } from "./slides/closing.js";
import { Example } from "./slides/example.js";
import { Illustration } from "./slides/illustration.js";
import { Opening } from "./slides/opening.js";

export const Presentation = () => (
  <Slides>
    <Opening />
    <Illustration />
    <Example />
    <Closing />
  </Slides>
);
