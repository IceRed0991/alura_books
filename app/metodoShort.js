let btnOrdernarPorPreco = document.getElementById('btnOrdenarPorPreco');
btnOrdernarPorPreco.addEventListener('click',  OrdernarLivrosPorPreco)


function OrdernarLivrosPorPreco(){

    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)

    exibirOsLivrosNaTela(livrosOrdenados)

}