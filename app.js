#!/usr/bin/env node

import fs from "fs";

const fileProcessorProjectStructure = {
    'src' : ['index.js']
}

Object.entries(fileProcessorProjectStructure).forEach(([dir, files]) => {
    fs.mkdirSync(dir, { recursive: true });
    files.forEach(file => fs.writeFileSync(`${dir}/${file}`, ''))
});

console.log("Project structure created successfully!");