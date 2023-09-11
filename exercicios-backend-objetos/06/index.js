const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const jovens = [{}]
const adultos = [{}]
let tamanhoDeAdultos = adultos.length - 1;
let tamanhoDeJovens = jovens.length - 1

let tamanhoDoMeuObjeto = usuarios.length
for (let i = 0; i < tamanhoDoMeuObjeto; i++){
    if(usuarios[i].idade < 18){
        jovens[tamanhoDeJovens] = {...usuarios[i]}
        tamanhoDeJovens ++
    }else{
        adultos[tamanhoDeAdultos] =  {...usuarios[i]}
        tamanhoDeAdultos ++
    }
}
console.log('os jovens :',jovens)
console.log('os adultos',adultos)