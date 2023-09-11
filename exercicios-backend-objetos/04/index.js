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

let maiorDeIdade = 18;


for (let i = 0; i < usuarios.length; i++ ){

    if ( usuarios[i].idade >= maiorDeIdade){
        usuarios[i] = {...usuarios[i],maiorDeIdade:true};
    }else{
        usuarios[i] = {...usuarios[i],maiorDeIdade:false};
    }
    
}
console.log(usuarios)