"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const prompts_1 = require("@inquirer/prompts");
const prompts_2 = require("@inquirer/prompts");
const createJsFile_1 = require("./src/createJsFile");
const createPyFile_1 = require("./src/createPyFile");
const program = new commander_1.Command();
program.name("codecla-cli").description("An interactive CLI tool for code clarity").version("0.0.2");
program
    .command("init")
    .description("Initialize a new project")
    .action(() => __awaiter(void 0, void 0, void 0, function* () {
    const projectFormat = yield (0, prompts_2.checkbox)({
        message: "In Which language should be the boilerplate?",
        choices: [
            { name: "javascript", value: ".js" },
            { name: "python", value: ".py" },
        ],
    });
    const projectName = yield (0, prompts_1.input)({
        message: "What’s your project name?",
    });
    if (projectFormat.includes(".js")) {
        (0, createJsFile_1.createJsFile)(projectName);
        console.log(`Project created: ${projectName} (Javascript)`);
    }
    else if (projectFormat.includes(".py")) {
        (0, createPyFile_1.createPyFile)(projectName);
        console.log(`Project created: ${projectName} (Python)`);
    }
    else {
        console.log("No format selected");
    }
}));
program.parse();
