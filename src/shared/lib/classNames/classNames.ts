type Modifiers = Record<string, boolean | string>

export const classNames = (className: string, array: string[] = [],  modifiers: Modifiers = {}): string => {
    return [
        className,
        ...array.filter(Boolean),
        ...Object.entries(modifiers)
            // Фильтруем значения если true
            .filter(([key, value]) => Boolean(value))
            // Делаем отфильтрованный массив только ключей
            .map(([key]) => key)
    ].join(" ")
}
