import * as fs from 'fs';
//import { writeFileSync } from 'fs';

export function createPyFile(fileName:string){

const pyCode:string = `
def functionName(a):
    # Your code here
    return
`;

fs.writeFileSync(`./${fileName}.py`, pyCode, 'utf-8');
}
