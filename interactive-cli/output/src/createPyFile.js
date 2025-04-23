import * as fs from 'fs';
export function createPyFile(functionName, argument) {
    const pyCode = `
def ${functionName}(${argument}):
    # Your code here
    return
`;
    fs.writeFileSync(`./output/${functionName}.py`, pyCode, 'utf-8');
}
