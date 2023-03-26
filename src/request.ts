import axios from 'axios';

interface Pizza {
    id: string;
    lowest: string;
    hashes: {
        [key: string]: string;
    }
}

export interface PizzaJson {
    list: {
        [key: string]: Pizza
    }
}

export function getPizzaJson() {
    return axios.get<PizzaJson>('https://bitcoinpizzadatasync.bitcoinnftpizzalab.workers.dev/pizzasList.json')
}