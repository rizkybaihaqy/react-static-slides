import React from "react";

export const End = ({ last }: { first: string; last: string }) => (
  <>
    <h1>End Of Slide</h1>
    <nav>
      <ul>
        <li>
          <a href={last}>Prev</a>
        </li>
        <li>
          <a href="#start-of-slide">Back To Start</a>
        </li>
      </ul>
    </nav>
  </>
);
