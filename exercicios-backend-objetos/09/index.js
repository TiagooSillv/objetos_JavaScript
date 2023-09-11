const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Jr" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Carlos" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]
let quantidade = 0;
for (let i = 0; i < participantes.length; i ++){
    if (participantes[i].nome == 'Carlos'){
        console.log(`Galera... O Carlos está na posição ${i + 1}, corre lá!`)
    }
}