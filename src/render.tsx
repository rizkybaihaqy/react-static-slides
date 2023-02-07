import * as fs from "fs";
import prettier from "prettier";
import * as R from "ramda";
import ReactDOMServer from "react-dom/server";
import App from "./app.js";

R.pipe(
  ReactDOMServer.renderToStaticMarkup,
  R.concat("<!DOCTYPE html>"),
  (html) => prettier.format(html, { parser: "html" }),
  (html) => fs.writeFileSync("./public/index.html", html),
  (_) => console.log(`File Created`)
)(await App());
