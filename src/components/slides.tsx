import React, { isValidElement, ReactElement, ReactNode } from "react";
import { Navigation } from "./navigation.js";

export const Slides = ({ children }: { children: JSX.Element[] }) => {
  return (
    <>
      {children.map((child, i) => {
        return (
          <section id={child.type.name.toLowerCase()} key={i}>
            {child}
            <Navigation
              prev={children[i - 1]?.type.name ?? "start-of-slide"}
              next={children[i + 1]?.type.name ?? "end-of-slide"}
            />
          </section>
        );
      })}
      <section id="end-of-slide">
        <h1>End Of Slide</h1>
        <a href={"#" + children[children.length - 1].type.name.toLowerCase()}>
          Prev
        </a>
        <a href={"#" + children[0].type.name.toLowerCase()}>Back To Start</a>
      </section>
      <section id="start-of-slide">
        <h1>Start Of Slide</h1>
        <a href={"#" + children[0].type.name.toLowerCase()}>Start</a>
      </section>
    </>
  );
};
