export const getMathRandomValue = (values: Array<string>) => {
    return Math.floor(Math.random() * values.length);
}