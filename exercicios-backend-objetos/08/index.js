const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

let quantidade = 0;

for (let i = 0; i < usuarios.length; i++){
    quantidade = usuarios[i].pets.length

    if (quantidade > 1){
        console.log(`Ola meu nome é ${usuarios[i].nome} e eu tenho ${quantidade} pets`)
    }
    if (quantidade == 0){
        console.log(`Ola meu nome é ${usuarios[i].nome} e eu tenho ${quantidade} pet`)
    }
    if(quantidade < 0){
        console.log(`Ola meu nome é ${usuarios[i].nome} e eu tenho ${quantidade} pet`)
    }
    
}