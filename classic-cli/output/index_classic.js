#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const createJsFile_1 = require("./src/createJsFile");
const createPyFile_1 = require("./src/createPyFile");
const program = new commander_1.Command();
const asciiLogo = `
╔══════════════════════════════════════════════════════════════════════════════════╗
║  ██████╗ ██████╗ ██████╗ ███████╗ ██████╗██╗      █████╗      ██████╗██╗     ██╗ ║
║ ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝██║     ██╔══██╗    ██╔════╝██║     ██║ ║
║ ██║     ██║   ██║██║  ██║█████╗  ██║     ██║     ███████║    ██║     ██║     ██║ ║
║ ██║     ██║   ██║██║  ██║██╔══╝  ██║     ██║     ██╔══██║    ██║     ██║     ██║ ║
║ ╚██████╗╚██████╔╝██████╔╝███████╗╚██████╗███████╗██║  ██║    ╚██████╗███████╗██║ ║
║  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝╚══════╝╚═╝  ╚═╝     ╚═════╝╚══════╝╚═╝ ║
╚══════════════════════════════════════════════════════════════════════════════════╝
`;
program
    .name("genboil")
    .version("0.0.1")
    .description(`${asciiLogo}\nBoilerplate code generator for coding challenges. Use --help to see options.\n\nUsage Example: genboil generate -n functionName -l js -i arg1,arg2\n\n
──✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧──
`);
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
    else if (option.language === "py") {
        (0, createPyFile_1.createPyFile)(option.name, inputArgs);
        console.log(`Project created: ${option.name} (Python)`);
    }
    else {
        console.log("Invalid input or argument");
    }
});
program.parse(process.argv);
