import http from "http";
import { format } from "prettier";
import { renderToStaticMarkup } from "react-dom/server";
import serveStatic from "serve-static";
import { App } from "../app.js";

const port = 8000;
const serve = serveStatic("./public");
const final = (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 404;
  res.end(`Cannot ${req.method} ${req.url}`);
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === "/") {
    const html = renderToStaticMarkup(App());
    const addDoctype = "<!DOCTYPE html>" + html;
    const formatDoc = format(addDoctype, { parser: "html" });
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(formatDoc);
  }

  serve(req, res, () => {
    final(req, res);
  });
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
