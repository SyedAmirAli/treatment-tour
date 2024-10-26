export default function info(...args: unknown[]) {
    if (args.includes("ignore")) return null;
    if (args.includes("ignored")) return console.log("console log ignored");

    if (process.env.NODE_ENV === "development") {
        if (args[0] === 1 || args[0] === true) return console.log(...args);
        if (args.includes("chain")) return args.map((arg) => console.log(arg));

        if (args.length <= 1) {
            console.log(args[0]);
        } else console.log(args);
    }

    return null;
}

export function asset(endpoint: string = "", slash: boolean = true): string {
    const url = process.env.NEXT_PUBLIC_ASSET_URL;
    if (!url) return endpoint;

    return url + (slash ? "/" : "") + endpoint;
}

export function portfolioAsset(
    endpoint: string = "",
    slash: boolean = true
): string {
    const url = process.env.NEXT_PUBLIC_MAIN_URL + "/storage/portfolio";
    if (!url) return endpoint;

    return url + (slash ? "/" : "") + endpoint;
}

export function doctorAsset(
    endpoint: string = "",
    slash: boolean = true
): string {
    const url = process.env.NEXT_PUBLIC_MAIN_URL + "/storage/doctors";
    if (!url) return endpoint;

    return url + (slash ? "/" : "") + endpoint;
}
