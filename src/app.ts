type ValidSymbol = "#" | "$";

interface RandomIdConfig{
    length: number,
    symbol: ValidSymbol
}

function generateRandomId(symbol: ValidSymbol, length: number): string
function generateRandomId(options: RandomIdConfig): string
function generateRandomId(options: RandomIdConfig | ValidSymbol): string {
    if(typeof options === 'string'){
        return `${options}${Math.random()
            .toString(36)
            .substr(2, length)}`;
    }
    
    return `${options.symbol}${Math.random()
        .toString(36)
        .substr(2, options.length)}`;
}

function main() {
    var app = document.getElementById('app');
    setInterval(() => {
        if (app) {
            app.innerHTML = generateRandomId({
                symbol: '#',
                length: 7
            });
        }
    }, 1000);
}