import * as fs from 'fs';
export function createJsFile(functionName, argument) {
    const jsCode = `
function ${functionName}(${argument}) {
// Your code here
return;
}
`;
    fs.writeFileSync(`./output/${functionName}.js`, jsCode, 'utf-8');
}
