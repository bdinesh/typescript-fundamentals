export type ValidSymbol = "#" | "$";

export interface RandomIdConfig {
    length: number,
    symbol: ValidSymbol
}

export function generateRandomId(symbol: ValidSymbol, length: number): string
export function generateRandomId(options: RandomIdConfig): string
export function generateRandomId(options: RandomIdConfig | ValidSymbol): string {
    if (typeof options === 'string') {
        return `${options}${Math.random()
            .toString(36)
            .substr(2, length)}`;
    }

    return `${options.symbol}${Math.random()
        .toString(36)
        .substr(2, options.length)}`;
}