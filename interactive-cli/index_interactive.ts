import { Command } from "commander";
import { checkbox, Separator, input } from "@inquirer/prompts";
import chalk from "chalk";
import { ChalkAnimation } from '@figliolia/chalk-animation';
import { createJsFile } from "./src/createJsFile.js";
import { createPyFile } from "./src/createPyFile.js";
import { centerToLine } from './src/centerToLine.js'; 

const program = new Command();
const divider ="──✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧──"

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
.version("0.0.2")
.description(
  `${asciiLogo}\n Interactive boilerplate code generator for coding challenges. Use --help to see options.\n\n${divider}`);

program
.command("init")
.description("Initialize a new project")
.action(async () => {
  
  const animation = ChalkAnimation.rainbow(`
╔══════════════════════════════════════════════════════════════════════════════════╗
║  ██████╗ ██████╗ ██████╗ ███████╗ ██████╗██╗      █████╗      ██████╗██╗     ██╗ ║
║ ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔════╝██║     ██╔══██╗    ██╔════╝██║     ██║ ║
║ ██║     ██║   ██║██║  ██║█████╗  ██║     ██║     ███████║    ██║     ██║     ██║ ║
║ ██║     ██║   ██║██║  ██║██╔══╝  ██║     ██║     ██╔══██║    ██║     ██║     ██║ ║
║ ╚██████╗╚██████╔╝██████╔╝███████╗╚██████╗███████╗██║  ██║    ╚██████╗███████╗██║ ║
║  ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝ ╚═════╝╚══════╝╚═╝  ╚═╝     ╚═════╝╚══════╝╚═╝ ║
╚══════════════════════════════════════════════════════════════════════════════════╝
`);

      // Let the animation run for 1.5 seconds
  await new Promise((resolve) => setTimeout(resolve, 2000));
  animation.stop();
    
    const projectFormat = await checkbox({
      //Retuns an array!!!!!
      message: `${'\u200B🌐 '}${chalk.hex("#FF6A00").bold("In Which language should be the boilerplate?")}\n\n`,

      choices: [
        { name: "javascript", value: ".js" },
        { name: "python", value: ".py" },
        new Separator('\u200B'),
      ],
    });
    console.log("");

    const projectName = await input({
       message: `${'\u200B💬 '}${chalk.hex("#FF6A00").bold("What’s your project name")}`,
      //message: "\u200B💬 What’s your project name?\u200B",
    });
    console.log("");


    const rawArgs = await input({
      message: `${'\u200B📦 '}${chalk.hex("#FF6A00").bold("What are the function arguments?")}`,
      //message: "\u200B📦 What are the function arguments? (comma separated or empty)\u200B",
    });
    
    const inputArgs = rawArgs.split(",").map((arg) => arg.trim()).filter(Boolean).join(',');
    
    

    if (projectFormat.includes(".js")) {
      createJsFile(projectName, inputArgs);
      console.log("");
      console.log(chalk.cyan(divider));
      console.log("");
      const createdJ = centerToLine(`🥷✨ Project created: ${projectName+projectFormat}`, divider)
      ChalkAnimation.pulse(createdJ);
      console.log("");
      console.log(chalk.cyan(divider));
      console.log("");
      //console.log(`🥷✨ Project created: ${projectName+projectFormat}`);

    } else if (projectFormat.includes(".py")) {
      createPyFile(projectName, inputArgs);

      console.log("");
      console.log(chalk.cyan(divider));
      console.log("");
      const createdP = centerToLine(`🥷✨ Project created: ${projectName+projectFormat}`, divider)
      ChalkAnimation.pulse(createdP);
      console.log("");
      console.log(chalk.cyan(divider));
      console.log("");
      //console.log(`🥷✨ Project created: ${projectName+projectFormat}`);
      
    } else {
      console.log("⚠ No format selected");
    }
  });

  
  process.on('uncaughtException', (error) => {
    if (error instanceof Error && error.name === 'ExitPromptError') {

      const message = centerToLine('👋 until next time!', divider);
      console.log(chalk.cyan(divider));
      ChalkAnimation.pulse(message);
      console.log(chalk.cyan(divider));

/*       console.log(`──✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧──
        \n👋 until next time!\n\n──✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧──
        `); */
    } else {
      // Rethrow unknown errors
      throw error;
    }
  });

program.parse();
