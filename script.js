let carrosseis = document.getElementsByClassName('carossel-Container');

for (let i = 0; i < carrosseis.length; i++) {
  let carossel = carrosseis[i];
  let btnBack = carossel.getElementsByClassName('BtnBack')[0];
  let btnNext = carossel.getElementsByClassName('BtnNext')[0];

  let itens = carossel.getElementsByClassName('item');
  let posicaoAtual = 0;
  let itensPorSessao = 4;
  let larguraItem = 100; 
  let maxItemIndex = 9; 
  let totalItens = itens.length;

  let maxSessoes = Math.floor((maxItemIndex + 1) / itensPorSessao);

  btnNext.addEventListener('click', () => {
    if (posicaoAtual < maxSessoes) {
      posicaoAtual++;
      let deslocamento = posicaoAtual * larguraItem;
      for (let c = 0; c < itens.length; c++) {
        itens[c].style.right = deslocamento + '%';
      }
    }
  });

  btnBack.addEventListener('click', () => {
    if (posicaoAtual > 0) {
      posicaoAtual--;
      let deslocamento = posicaoAtual * larguraItem;
      for (let c = 0; c < itens.length; c++) {
        itens[c].style.right = deslocamento + '%';
      }
    }
  });
}
