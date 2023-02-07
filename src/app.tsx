import React from "react";
import * as fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const folderPath = path.join(__dirname, "slides");

const getComponents = async () => {
  const files = fs.readdirSync(folderPath);

  const components = await Promise.all(
    files.map(async (file) => {
      const filePath = `${folderPath}/${file}`;
      const module = await import(filePath);
      return module.default;
    })
  );

  return components;
};

export default async () => {
  const components = await getComponents();
  console.log(components);

  return (
    <html lang="en">
      <head>
        <title>Dynamic components</title>
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        {components.map((Component) => (
          <Component key={Component.name} />
        ))}
      </body>
    </html>
  );
};
