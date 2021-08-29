export const clsx = (...args: any[]) => args.filter(arg => !!arg).join(" ");

export const ellipsisText = (text: string, letters: number = 40) => {
    if (!text) return "--";
    return text.slice(0, letters).concat("...");
}