import React from "react";
import { End } from "./end.js";
import { Slide } from "./slide.js";
import { Start } from "./start.js";

export const Slides = ({ children }: { children: JSX.Element[] }) => {
  return (
    <>
      {children.map((child, i) => (
        <Slide
          key={i}
          id={child.type.name.toLowerCase()}
          prev={
            "#" + (children[i - 1]?.type.name.toLowerCase() ?? "start-of-slide")
          }
          next={
            "#" + (children[i + 1]?.type.name.toLowerCase() ?? "end-of-slide")
          }
        >
          {child}
        </Slide>
      ))}
      <section id="end-of-slide">
        <End
          first={"#" + children[0].type.name.toLowerCase()}
          last={"#" + children[children.length - 1].type.name.toLowerCase()}
        ></End>
      </section>
      <section id="start-of-slide">
        <Start
          first={"#" + children[0].type.name.toLowerCase()}
          last={"#" + children[children.length - 1].type.name.toLowerCase()}
        />
      </section>
    </>
  );
};
