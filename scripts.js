class ListasSorteadas {
  constructor(titulo, participantes, nomeSorteado) {
    this.titulo = titulo;
    this.participantes = participantes;
    this.nomeSorteado = nomeSorteado;
  }
}

let todasAsListas = [];
const botaoEnviar = document.getElementById("botaoEnviar");
let ulTodasAsListas = document.getElementById("ulTodasAsListas");

function adicionarParticipantes(event) {
  event.preventDefault();

  let containerNomeSorteado = document.getElementById("nomeSorteado");
  let nomeParticipantes = document.getElementById("participantes");
  let nomeTitulo = document.getElementById("titulo");

  if (nomeParticipantes.value === ''){
    alert('Insira os dados corretamente')
  }else{
    let listaNomes = nomeParticipantes.value.split(",");
    let nomeSorteado = parseInt(Math.random() * listaNomes.length);
  
    //   console.log(`o nome sorteado foi ${listaNomes[nomeSorteado]}`);
  
    const detalhesLista = new ListasSorteadas(
      nomeTitulo.value,
      listaNomes,
      listaNomes[nomeSorteado]
    );
  
    containerNomeSorteado.innerHTML = `<h3>O amigo secreto sorteado foi: ${detalhesLista.nomeSorteado}</h3>`;
  
    console.log(detalhesLista);
  
    todasAsListas.push(detalhesLista);
  
    atualizarListas();
  }
  
}

function atualizarListas() {
  ulTodasAsListas.innerHTML = "";
  todasAsListas.forEach((lista) => {
    let li = document.createElement("li");
    li.innerHTML = `<strong>${lista.titulo}</strong>Sorteado: ${lista.nomeSorteado}<span>Participantes: ${lista.participantes}</span>`;
    ulTodasAsListas.appendChild(li);
  });
}

botaoEnviar.addEventListener("click", adicionarParticipantes);
