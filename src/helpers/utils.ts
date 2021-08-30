export const clsx = (...args: any[]) => args.filter(arg => !!arg).join(" ");

export const ellipsisText = (text: string, letters: number = 60) => {
    if (!text) return "--";
    if (text.length <= letters) return text;
    return text.slice(0, letters).concat("...");
}