export function centerToLine(text, line) {
    const lineLength = line.length;
    const padding = Math.floor((lineLength - text.length) / 2);
    return ' '.repeat(Math.max(0, padding)) + text;
}
