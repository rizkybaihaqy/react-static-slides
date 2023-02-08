import { writeFileSync } from "fs";
import { format } from "prettier";
import { renderToStaticMarkup } from "react-dom/server";
import { App } from "../app.js";

const html = renderToStaticMarkup(App());
const addDoctype = "<!DOCTYPE html>" + html;
const formatDoc = format(addDoctype, { parser: "html" });
const writeDoc = writeFileSync("./public/index.html", formatDoc);

console.log('File Created');
