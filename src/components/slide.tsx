import React from "react";
import { Navigation } from "./navigation.js";

export const Slide = ({
  children,
  id,
  next,
  prev,
}: {
  children: JSX.Element;
  id: string;
  next: string;
  prev: string;
}) => (
  <section id={id}>
    {children}
    <Navigation prev={prev} next={next} />
  </section>
);
