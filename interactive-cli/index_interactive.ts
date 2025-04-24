import { Command } from "commander";
import { checkbox, Separator, input } from "@inquirer/prompts";
import chalk from "chalk";
import { ChalkAnimation } from "@figliolia/chalk-animation";
import { createJsFile } from "./src/createJsFile.js";
import { createPyFile } from "./src/createPyFile.js";
import { centerToLine } from "./src/centerToLine.js";
/* The CLI displays a stylish ASCII banner inspired by the block font from cfonts, 
pre-rendered for faster startup and zero runtime dependencies.
https://npm.io/package/cfonts 
*/

const program = new Command();
const divider = "──✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧────✧──";

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
    `${asciiLogo}\n Interactive boilerplate code generator for coding challenges. Use --help to see options.\n\n${divider}`
  );

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

    //need this for that double render and broken prompt behavior because chalk-animation doesn’t play well with Inquirer prompts
    await new Promise((resolve) => setTimeout(resolve, 2000));
    animation.stop();

    const projectFormat = await checkbox({
      //Retuns an array!!!!!
      message: `${"\u200B🌐 "}${chalk.hex("#FF6A00").bold("In Which language should be the boilerplate?")}\n\n`,

      choices: [
        { name: "Javascript", value: ".js" }, 
        { name: "Python", value: ".py" }, 
        new Separator("\u200B")],
    });
    console.log("");

    const projectName = await input({
      message: `${"\u200B💬 "}${chalk.hex("#FF6A00").bold("What’s your function name? (also used as the filename)")}`,
    });
    console.log("");

    const rawArgs = await input({
      message: `${"\u200B📦 "}${chalk.hex("#FF6A00").bold("What are the function arguments? (comma separated or leave empty)")}`,
    });

    const inputArgs = rawArgs
      .split(",")
      .map((arg) => arg.trim())
      .filter(Boolean)
      .join(",");

    if (projectFormat.includes(".js")) {
      createJsFile(projectName, inputArgs);
      console.log("");
      console.log(chalk.cyan(divider));
      console.log("");
      const createdJ = centerToLine(`🥷✨ Project created: ${projectName + projectFormat}`, divider);
      ChalkAnimation.pulse(createdJ);
      console.log("");
      console.log(chalk.cyan(divider));
      console.log("");
    } else if (projectFormat.includes(".py")) {
      createPyFile(projectName, inputArgs);

      console.log("");
      console.log(chalk.cyan(divider));
      console.log("");
      const createdP = centerToLine(`🥷✨ Project created: ${projectName + projectFormat}`, divider);
      ChalkAnimation.pulse(createdP);
      console.log("");
      console.log(chalk.cyan(divider));
      console.log("");
    } else {
      console.log("⚠ No format selected");
    }
  });

process.on("uncaughtException", (error) => {
  if (error instanceof Error && error.name === "ExitPromptError") {
    const message = centerToLine("👋 until next time!", divider);
    console.log(chalk.cyan(divider));
    ChalkAnimation.pulse(message);
    console.log(chalk.cyan(divider));
  } else {
    // Rethrow unknown errors
    throw error;
  }
});

program.parse();
