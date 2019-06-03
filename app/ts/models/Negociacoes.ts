import { Imprimivel } from './Imprimivel';
import { Negociacao } from './Negociacao';

export class Negociacoes implements Imprimivel {

    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    toString(): void {
        console.log('Impressão');
        console.log(JSON.stringify(this._negociacoes));
    }
}