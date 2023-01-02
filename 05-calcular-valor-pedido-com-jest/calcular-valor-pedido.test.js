const calcularValorPedido = require("./calcular-valor-pedido");

it('não deve cobrar valor de frete quando valor dos produtos for MAIOR que 500', () => {
    //AAA - 3 passos de criação de um teste

    //ARRANGE - ARRANJO - o objeto do teste
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    //ACT - AÇÃO - o que vai ser testado
    const resultado = calcularValorPedido(meuPedido)

    //ASSERT - AFIRMAR - o resultado esperado
    expect(resultado).toBe(2000)
})

it('deve cobrar valor de frete quando valor dos produtos for MENOR que 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sanduíche', valor: 50 },
            { nome: 'Entrega', valor: 10, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(60)
})

it('deve cobrar valor do frete caso valor dos produtos seja EXATAMENTE 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado = calcularValorPedido(meuPedido)

    expect(resultado).toBe(600)
})

/* CASO OS ESTADOS DE ENTREGA SEJAM RS OU SC, DEVE SER ACRESCIDO UM VALRO DE 20% NA ENTREGA */

it ('dever adicionar um acrecimo de 20% no valor de entrega no pedido caso o estado seja RS', () => {
    const pedidoComEstadoRS = {
        estado: 'RS',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado =calcularValorPedido(pedidoComEstadoRS)

    expect(resultado).toBe(620)
})

it ('dever adicionar um acrecimo de 20% no valor de entrega no pedido caso o estado seja SC', () => {
    const pedidoComEstadoSC = {
        estado: 'SC',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado =calcularValorPedido(pedidoComEstadoSC)

    expect(resultado).toBe(620)
})

it ('NÃO dever adicionar um acrecimo de 20% no valor de entrega no pedido caso o estado seja SP', () => {
    const pedidoComEstadoSP = {
        estado: 'SP',
        itens: [
            { nome: 'Sanduíche bem caro', valor: 500 },
            { nome: 'Entrega', valor: 100, entrega: true }
        ]
    }

    const resultado =calcularValorPedido(pedidoComEstadoSP)

    expect(resultado).toBe(600)
})