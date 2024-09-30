export default function info(...args: unknown[]) {
    if (process.env.NODE_ENV === 'development') {
        if (args.length <= 1) {
            console.log(args[0]);
        } else console.log(args);
    }
}
