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
        if (!this.animais[animal]) {
            return { erro: "Animal inválido", recintosViaveis: null };
        }

        if (quantidade <= 0) {
            return { erro: "Quantidade inválida", recintosViaveis: null };
        }

        const animalInfo = this.animais[animal];
        const recintosViaveis = this.recintos.filter(recinto => {
            const biomas = recinto.bioma.split(', ');
            if (!biomas.includes(animalInfo.bioma)) {
                return false;
            }

            const espacoNecessario = quantidade * animalInfo.tamanho;
            const espacoOcupado = recinto.animais.reduce((total, a) => total + (a.quantidade * a.tamanho), 0);
            const espacoLivre = recinto.tamanhoTotal - espacoOcupado;

            if (espacoLivre < espacoNecessario) {
                return false;
            }

            if (animalInfo.bioma.includes('savana') && animalInfo.bioma.includes('rio')) {
                if (!biomas.includes('savana') || !biomas.includes('rio')) {
                    return false;
                }
            }

            if (animal === 'HIPOPOTAMO' && (recinto.animais.length > 0 && !biomas.includes('savana, rio'))) {
                return false;
            }

            if (animal === 'MACACO' && recinto.animais.length === 0) {
                return false;
            }

            if (recinto.animais.some(a => a.especie !== animal && this.animais[a.especie].bioma.includes('carnivoro'))) {
                return false;
            }

            return true;
        }).map(recinto => {
            const espacoOcupado = recinto.animais.reduce((total, a) => total + (a.quantidade * a.tamanho), 0);
            const espacoLivre = recinto.tamanhoTotal - espacoOcupado - (recinto.animais.length > 0 ? 1 : 0);
            return `Recinto ${recinto.numero} (espaço livre: ${espacoLivre} total: ${recinto.tamanhoTotal})`;
        });

        if (recintosViaveis.length === 0) {
            return { erro: "Não há recinto viável", recintosViaveis: null };
        }

        return { erro: null, recintosViaveis: recintosViaveis.sort((a, b) => a.numero - b.numero) };
    }
}

export { RecintosZoo as RecintosZoo };




