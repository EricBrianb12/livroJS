/*
1 - Elaborar um programa que leia um número. Calcule e informe os seus vizinhos, ou seja, o número anterior e posterior.
    Exemplo: 
    Número: 15 
    Vizinhos: 14 e 16

  //resposta
    const numero = Number(prompt("Digite um número: "))
    const anterior = numero - 1
    const proximo = numero + 1
    alert(`Os vizinhos do número ${numero} são: ${anterior} e ${proximo}`)

*/


/**

2 - Elaborar um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.

    Exemplo: 
    Valor da Conta R$: 90.00 
    Número de Clientes: 3 
    Valor por cliente R$: 30.00

    //resposta
    const valorConta = Number(prompt("Digite o valor da conta:"))
    const totalClientes = Number(prompt("Digite o total de clientes"))
    const valorCliente = valorConta / totalClientes

    alert(`Valor total por cliente é de R$ ${valorCliente.toFixed(2)}`)

 */



/*
3 - Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.

    Exemplo: 
    Preço R$: 60.00
    À Vista R$: 54.00 
    Ou 3x de R$: 20.00

    //resposta
    const valorProduto = Number(prompt("Valor do produto:"))
    const avista = valorProduto - (valorProduto * 0.10)
    const parcelado = valorProduto / 3

    alert(`Preço: R$ ${valorProduto.toFixed(2)}\nÀ vista: R$: ${avista.toFixed(2)}\nOu parcelado: R$ ${parcelado.toFixed(2)}`)

*/


/**
4 - Elaborar um programa que leia 2 notas de um aluno em uma disciplina. Calcule e informe a média das notas.

    Exemplo: 
    1ª Nota: 7.0 
    2ª Nota: 8.0 
    Média: 7.5

    //resposta
    const nota1 = Number(prompt("1º Nota:"))
    const nota2 = Number(prompt("2º Nota:"))
    const media = (nota1 + nota2) / 2
    alert(`Média: ${media.toFixed(1)}`)

 */

