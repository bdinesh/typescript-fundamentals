import { generateRandomId } from './utils';

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