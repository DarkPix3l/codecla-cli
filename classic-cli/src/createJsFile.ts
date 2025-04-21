import * as fs from 'fs';
//import { writeFileSync } from 'fs';

export function createJsFile(functionName:string, argument:string){

const jsCode:string = `
function ${functionName}(${argument}) {
// Your code here
return;
}
`;

fs.writeFileSync(`./${functionName}.js`, jsCode, 'utf-8');
}
