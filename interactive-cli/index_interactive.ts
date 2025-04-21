import { Command } from "commander";
import { input } from "@inquirer/prompts";
import { checkbox, Separator, select } from "@inquirer/prompts";
import { createJsFile } from "./src/createJsFile";
import { createPyFile } from "./src/createPyFile";

const program = new Command();

program.name("codecla-cli").description("An interactive CLI tool").version("0.0.2");

program
  .command("init")
  .description("Initialize a new project")
  .action(async () => {
    const projectFormat = await checkbox({
      //Retuns an array!!!!!
      message: "In Which language should be the boilerplate?",
      choices: [
        { name: "javascript", value: ".js" },
        { name: "python", value: ".py" },
      ],
    });

    //console.log(projectFormat);

    const projectName = await input({
      message: "What’s your project name?",
    });

    if (projectFormat.includes(".js")) {
      createJsFile(projectName);
      console.log(`Project created: ${projectName} (Javascript)`);
    } else if (projectFormat.includes(".py")) {
      createPyFile(projectName);
      console.log(`Project created: ${projectName} (Python)`);
    } else {
      console.log("No format selected");
    }
  });

program.parse();
