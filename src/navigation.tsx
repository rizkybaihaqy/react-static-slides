import React from "react";

export const Navigation = ({ next, prev }: { next: string; prev: string }) => (
  <nav>
    <a href={"#" + next.toLowerCase()}>next</a>
    <a href={"#" + prev.toLowerCase()}>prev</a>
  </nav>
);
