const body = document.querySelector("body");
const mapa = document.getElementById("mapa");

function abrirModal(src) {
    var modal = document.getElementById("modal");
    var imagemAmpliada = document.getElementById("imagemAmpliada");

    imagemAmpliada.src = src;
    modal.style.display = "block";

    body.style.overflowY = "hidden";
    mapa.style.zIndex = "-2";
}

function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";

    body.style.overflowY = "auto";
    mapa.style.zIndex = "0";
}

function inicializarMapa() {
    // Coordenadas do local desejado
    var localizacao = { lat: -23.493059212360556, lng: -47.42160875407419 };

    // Opções do mapa
    var opcoesDoMapa = {
      zoom: 14, // Nível de zoom
      center: localizacao // Centro do mapa
    };

    // Criar o mapa
    var mapa = new google.maps.Map(document.getElementById('mapa'), opcoesDoMapa);

    // Adicionar marcador
    var marcador = new google.maps.Marker({
      position: localizacao,
      map: mapa,
      title: 'Localização'
    });
  }

