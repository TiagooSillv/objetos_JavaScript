const carros = {
    marca:'Toyota',
    modelo: 'Corola',
    cor: 'Branco',
    ano: 2022,
    quantidade_de_portas: 4,
    automatico: true,

}
let verificaSeEhAutomatico = (carros.automatico ? "Automatico":"Manual");

console.log(`Comprei o meu primeiro carro a marca dele é ${carros.marca} ele tem uma cor muito linda é um ${carros.cor} e melhor de tudo ele é ${verificaSeEhAutomatico}`)