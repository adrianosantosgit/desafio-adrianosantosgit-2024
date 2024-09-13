class RecintosZoo {
    constructor() {
        this.recintos = [
            { numero: 1, bioma: 'savana', tamanhoTotal: 10, animais: [{ especie: 'MACACO', quantidade: 3, tamanho: 1 }] },
            { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animais: [] },
            { numero: 3, bioma: 'savana, rio', tamanhoTotal: 7, animais: [{ especie: 'GAZELA', quantidade: 1, tamanho: 2 }] },
            { numero: 4, bioma: 'rio', tamanhoTotal: 8, animais: [] },
            { numero: 5, bioma: 'savana', tamanhoTotal: 9, animais: [{ especie: 'LEAO', quantidade: 1, tamanho: 3 }] }
        ];

        this.animais = {
            LEAO: { tamanho: 3, bioma: 'savana' },
            LEOPARDO: { tamanho: 2, bioma: 'savana' },
            CROCODILO: { tamanho: 3, bioma: 'rio' },
            MACACO: { tamanho: 1, bioma: 'savana, floresta' },
            GAZELA: { tamanho: 2, bioma: 'savana' },
            HIPOPOTAMO: { tamanho: 4, bioma: 'savana, rio' }
        };
    }

    analisaRecintos(animal, quantidade) {

    }
}


export { RecintosZoo as RecintosZoo };

const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
console.log(resultado);

