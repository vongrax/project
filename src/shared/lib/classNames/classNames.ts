type Modifiers = Record<string, boolean | string>

export const classNames = (className: string, modifiers: Modifiers, array: string[]): string => {
    return [
        className,
        ...array,
        ...Object.entries(modifiers)
            // Фильтруем значения если true
            .filter(([key, value]) => Boolean(value))
            // Делаем отфильтрованный массив только ключей
            .map(([key, value]) => key)
    ].join(" ")
}
