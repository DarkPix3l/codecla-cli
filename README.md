# 🎮 Challenge Boilerplate CLI

This CLI tool was built as part of an assignment from CODELABS ACADEMY to create a functional command-line interface using **Node.js**, **TypeScript**, and the **Commander.js** library.

Its purpose is to generate boilerplate function templates for coding challenges in **JavaScript** and **Python**.



## 📖 Table of Contents

- [🔥 GENBOIL CLASSIC-CLI](#-genboil-classic-cli)
    - [📘 Classic - Overview](#classic-overview)
    - [✨ Classic - Features](#classic-features)
    - [⚙️ Classic - Installation](#classic-installation)
    - [🚀 Classic - Usage](#classic-usage)
    - [📦 Classic - Dependencies](#classic-dependencies)
    - [🛠 Classic - Development](#classic-development)

- [🔥 GENBOIL INTERACTIVE-CLI](#-genboil-interactive-cli)
    - [📘 Interactive - Overview](#interactive-overview)
    - [✨ Interactive - Features](#interactive-features)
    - [⚙️ Interactive - Installation](#interactive-installation)
    - [🛠 Interactive - Development](#interactive-development)
    - [🚀 Interactive - Usage](#interactive-usage)
    - [📦 Interactive - Dependencies](#interactive-dependencies)



<br><br>
---
<br><br>

## 🔥 Genboil Classic CLI

Boilerplate code generator for coding challenges



### Classic Overview

Genboil is a simple CLI tool that helps you quickly scaffold boilerplate code (functions) for coding challenges.  
Built with **TypeScript** using **Commander.js**, it currently generates starter **function templates** for both JavaScript and Python solutions.



### Classic Features

✅ Generate function templates in JS or Python  
✅ Provide function name and arguments   
✅ Lightweight and easy to extend  


### Classic Installation

If Local only.
Clone the repo and run:

```bash
npm install
npm link
```

Then use it like a global CLI:

```bash
genboil generate -n myFunc -l js -i arg1,arg2
```


### Classic Usage

Flag            | Description
-n, --name      | Function name
-i, --inputs    | Comma-separated inputs
-l, --language  | Language to generate (js or py)

```bash
genboil generate --help
```

### Classic Dependencies

- [commander](https://www.npmjs.com/package/commander)


### Classic Development

To build and run the CLI locally:
```bash
npm run dev
```

To compile into Js without running:
```bash
npm run build
```


<br><br>
---
<br><br>


## 🔥 Genboil Interactive CLI

Interactive boilerplate code generator for coding challenges, now ✨fueled by animations and styled prompts✨.


### Interactive Overview

This version introduces a guided, interactive CLI using modern prompts and visual elements.
Built with Commander.js, @inquirer/prompts, Chalk, and a dash of animation magic.


### Interactive Features

✅ Interactive terminal interface
✅ Multi-select language options (JS / Python)
✅ Clean, stylized prompts with color and formatting
✅ Animated banners with chalk-animation
✅ Support for custom function names and inputs


### Interactive Installation

Clone the repo and navigate to the interactive CLI folder:

```bash
cd interactive-cli
npm install
```

### Interactive Development

This will build the TypeScript code and then run the compiled JS file from the output directory.
´´´bash
npm run dev
´´´


### Interactive Usage

Follow the interactive prompts:
```bash
? 🌐 In Which language should be the boilerplate?
◯ Javascript
◯ Python

? 💬 What’s your function name? (also used as the filename)
superFun

? 📦 What are the function arguments? (comma separated or leave empty)
a, b, c

```


### Interactive Dependencies

- [commander](https://www.npmjs.com/package/commander)
- [@inquirer/prompts](https://www.npmjs.com/package/@inquirer/prompts)
- [chalk](https://www.npmjs.com/package/chalk#256-and-truecolor-color-support)
- [chalk-animation](https://www.npmjs.com/package/@figliolia/chalk-animation)



