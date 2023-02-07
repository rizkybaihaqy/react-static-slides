import React from "react";

export const Start = ({ first }: { first: string; last: string }) => (
  <>
    <h1>Start Of Slide</h1>
    <nav>
      <ul>
        <li>
          <a href={first}>Start</a>
        </li>
      </ul>
    </nav>
  </>
);
