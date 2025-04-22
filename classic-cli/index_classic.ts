#!/usr/bin/env node
import { Command } from "commander";
import { createJsFile } from "./src/createJsFile";
import { createPyFile } from "./src/createPyFile";

const program = new Command();

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
  .description(
    `${asciiLogo}\nBoilerplate code generator for coding challenges. Use --help to see options.\n\nUsage Example: genboil generate -n functionName -l js -i arg1,arg2\n\n
──✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧──
`
  );
  // Define the 'generate' command
  program
    .command("generate")
    .description("Generating a new function boilerplate")
    .option("-n, --name <functionName>", "Function name")
    .option("-i, --inputs <items>", "Comma-separated list of inputs", (val) => val.split(","), []) //required but can be empty
    .option("-l, --language <language>", "Programming Language (js or py)")
    .action((option) => {
      const inputArgs = option.inputs.length > 0 ? option.inputs.join(", ") : ""; // If no inputs, set to an empty string

      if (!["js", "py"].includes(option.language)) {
        console.error("Invalid language. Please use 'js' or 'py'.");
        process.exit(1);
      }

      if (option.language === "js") {
        createJsFile(option.name, inputArgs);
        console.log(`Project created: ${option.name} (Javascript)`);
      } else if (option.language === "py") {
        createPyFile(option.name, inputArgs);
        console.log(`Project created: ${option.name} (Python)`);
      } else {
        console.log("Invalid input or argument");
      }
    });

  program.parse(process.argv);

