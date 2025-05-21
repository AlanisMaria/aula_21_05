//exercício 1
const alunos = [
    { nome: "Eliza", notaFinal:70 },
    { nome: "Gaby", notaFinal:60 },
    { nome: "João", notaFinal:90},
    { nome: "Anna", notaFinal:100}
  ];

const encontrado = alunos.find(alunos => alunos.nome === "João");
console.log(encontrado);

//exercício 2
const notas = alunos.filter(alunos => alunos.notaFinal >= 70);
console.log(notas);

//exercício 3
const ordenadosPorNota = alunos.sort((a, b) => a.notaFinal - b.notaFinal);
console.log(ordenadosPorNota);