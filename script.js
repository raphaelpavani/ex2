const lista_de_estudante = [];
const estudante = [
  {
    nome: "Godines",
    notaDaPrimeiraProva: 8,
    notaDaSegundaProva: 7,
  },
  {
    nome: "Paty",
    notaDaPrimeiraProva: 10,
    notaDaSegundaProva: 10,
  },
  {
    nome: "Chiquinha",
    notaDaPrimeiraProva: 5,
    notaDaSegundaProva: 10,
  },
  {
    nome: "Chaves",
    notaDaPrimeiraProva: 8,
    notaDaSegundaProva: 4,
  },
];

const calculaMedia = (estudante) => {
  const soma = estudante.notaDaPrimeiraProva + estudante.notaDaSegundaProva;
  const media = soma / 2;
  media >= 7.0
    ? alert(`A media do estudante ${estudante.nome} é: ${media}
    
    Parabéns você foi aprovado no concurso!`)
    : alert(`A media do estudante ${estudante.nome} é: ${media}
    
    Não foi desta vez! Tente novamente`);
};

console.log(estudante.filter(calculaMedia));
