type Mods = Record<string, boolean | string>

export function classNames(
    classes: string,
    mods: Mods = {},
    additional: string[] = [],
) {
    return [
        classes,
        ...additional.filter(Boolean),
        ...Object
            .entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}

// Entries  [['asd', true], ['dsa', false]]
// Filter [['asd', true]]
// Map 'asd'
