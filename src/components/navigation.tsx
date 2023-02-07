import React from "react";

export const Navigation = ({ next, prev }: { next: string; prev: string }) => (
  <nav>
    <ul>
      <li>
        <a href={next}>Next</a>
      </li>
      <li>
        <a href={prev}>Prev</a>
      </li>
    </ul>
  </nav>
);
