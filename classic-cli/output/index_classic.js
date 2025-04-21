#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const createJsFile_1 = require("./src/createJsFile");
const program = new commander_1.Command();
program
    .name("cligen")
    .version("0.0.1")
    .description("Cligen: boilerplate code generator for coding challenges. Use --help to see options.\n\nUsage Example: cligen generate -n functionName -l js -i arg1,arg2");
program
    .command("generate")
    .description("Generating a new function boilerplate")
    .option("-n, --name <functionName>", "Function name")
    .option("-i, --inputs <items>", "Comma-separated list of inputs", (val) => val.split(","), [])
    .option("-l, --language <language>", "Programming Language (js or py)")
    .action((option) => {
    const inputArgs = option.inputs.length > 0 ? option.inputs.join(", ") : "";
    if (!["js", "py"].includes(option.language)) {
        console.error("Invalid language. Please use 'js' or 'py'.");
        process.exit(1);
    }
    if (option.language === "js") {
        (0, createJsFile_1.createJsFile)(option.name, inputArgs);
        console.log(`Project created: ${option.name} (Javascript)`);
    }
    else {
        console.log("invalid input or argument");
    }
});
program.parse(process.argv);
