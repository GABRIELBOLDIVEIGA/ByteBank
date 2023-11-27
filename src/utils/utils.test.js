import { calculaNovoSaldo } from './index';

describe('Quando realizo uma transação ', () => {
  test('Que é um deposito o saldo deve aumentar.', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 50,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(150);
  });

  test('Que é uma tranferencia o saldo deve diminuir.', () => {
    const transacao = {
      transacao: 'Transferência',
      valor: 20,
    };

    const novoSaldo = calculaNovoSaldo(transacao, 100);

    expect(novoSaldo).toBe(80);
  });
});

test('Deve retornar o valor do saldo atualizado com o rendeimento.', () => {
  const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);
  const saldo = 100;
  const novoSaldo = calculaRendimento(saldo);
  expect(novoSaldo).toBe(100.5);
  expect(calculaRendimento).toBeCalled();
  expect(calculaRendimento).toBeCalledWith(saldo);
});
