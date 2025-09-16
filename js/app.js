let subTotal = 0;

    /* Carrinho começa zerado */
    limpar();

function adicionar() {

    /* Recuperar nome, quantidade e valor do produto */
        let produto = document.getElementById('produto').value;
        let quantidadeProduto = document.getElementById('quantidade').value;
        let nomeProduto = produto.split('-') [0];
        let valorUnitario = produto.split('R$') [1];

    /*  Verificando se a quantidade inserida é válida */
        if (isNaN(quantidadeProduto) || quantidadeProduto <= 0) {
            alert("Insira uma quantidade válida.");
        return;
        }
    
    /* Calculando subtotal */
        let preco = quantidadeProduto * valorUnitario;

    /* Adicionado no carrinho */
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + (`<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`);

    /* Calculando o subtotal */
        subTotal = subTotal + preco;

        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${subTotal}`;

    /* Zerando o campo quantidade após adicionar o produto no carrinho */
        quantidadeProduto = document.getElementById('quantidade').value = 0;
}
        
    /* Limpando o carrinho */
        function limpar() {
            subTotal = 0;
            document.getElementById('lista-produtos').innerHTML = '';
            document.getElementById('valor-total').textContent = 'R$ 0,00';
        }