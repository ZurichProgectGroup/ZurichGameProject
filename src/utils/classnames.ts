type TypesDictionary = {
    [id: string]: boolean
};

type Types = string | TypesDictionary;

function classNames(...args: Types[]): string {
    return args.reduce((res: string, arg) => {
        if (!arg) {
            return res;
        }

        if (Array.isArray(arg)) {
            return `${res} ${classNames(...arg)}`;
        }

        if (typeof (arg) === 'object') {
            return `${res} ${Object
                .entries(arg)
                .reduce((carry, [key, value]) => (value ? `${carry} ${key}` : carry), '').trim()}`;
        }

        return `${res} ${arg}`;
    }, '').trim();
}

export default classNames;
