import React from "react";
import Slides from "./slides.js";
import { Closing } from "./slides/closing.js";
import { Example } from "./slides/example.js";
import { Illustration } from "./slides/illustration.js";
import { Opening } from "./slides/opening.js";

export const App = () => {
  return (
    <html lang="en">
      <head>
        <title>Dynamic components</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <Slides>
          <Opening />
          <Illustration />
          <Example />
          <Closing />
        </Slides>
      </body>
    </html>
  );
};
