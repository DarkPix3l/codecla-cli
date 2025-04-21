import * as fs from 'fs';
//import { writeFileSync } from 'fs';

export function createJsFile(fileName:string){

const jsCode:string = `
function functionName(a) {
// Your code here
return;
}
`;

fs.writeFileSync(`./${fileName}.js`, jsCode, 'utf-8');
}
