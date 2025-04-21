import * as fs from 'fs';
//import { writeFileSync } from 'fs';

export function createPyFile(functionName:string, argument:string){

const pyCode:string = `
def ${functionName}(${argument}):
    # Your code here
    return
`;

fs.writeFileSync(`./output/${functionName}.py`, pyCode, 'utf-8');
}
