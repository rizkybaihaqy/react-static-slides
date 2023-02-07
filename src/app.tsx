import React from "react";
import { Presentation } from "./presentation.js";

export const App = () => {
  return (
    <html lang="en">
      <head>
        <title>Dynamic components</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <Presentation />
      </body>
    </html>
  );
};
