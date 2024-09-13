const resultado = new RecintosZoo().analisaRecintos('MACACO', 2);
console.log(resultado);

bioma1 = new RecintosZoo().verificaBioma(1, 'LEOPARDO');
console.log(bioma1);
bioma2 = new RecintosZoo().verificaBioma(2, 'LEOPARDO');
console.log(bioma2);
bioma3 = new RecintosZoo().verificaBioma(3, 'LEOPARDO');
console.log(bioma3);
bioma4 = new RecintosZoo().verificaBioma(4, 'LEOPARDO');
console.log(bioma4);
bioma5 = new RecintosZoo().verificaBioma(5, 'LEOPARDO');
console.log(bioma5);

// LEAO: { tamanho: 3, bioma: 'savana' },
//             LEOPARDO: { tamanho: 2, bioma: 'savana' },
//             CROCODILO: { tamanho: 3, bioma: 'rio' },
//             MACACO: { tamanho: 1, bioma: 'savana, floresta' },
//             GAZELA: { tamanho: 2, bioma: 'savana' },
//             HIPOPOTAMO: { tamanho: 4, bioma: 'savana, rio' }
// 
//             { numero: 1, bioma: 'savana', tamanhoTotal: 10, animais: [{ especie: 'MACACO', quantidade: 3, tamanho: 1 }] },
//             { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animais: [] },
//             { numero: 3, bioma: 'savana, rio', tamanhoTotal: 7, animais: [{ especie: 'GAZELA', quantidade: 1, tamanho: 2 }] },
//             { numero: 4, bioma: 'rio', tamanhoTotal: 8, animais: [] },
//             { numero: 5, bioma: 'savana', tamanhoTotal: 9, animais: [{ especie: 'LEAO', quantidade: 1, tamanho: 3 }] }