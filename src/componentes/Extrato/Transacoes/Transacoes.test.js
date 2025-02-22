import { render, screen } from '@testing-library/react';
import Transacoes from './index';
import estilos from '../Extrato.module.css';

describe('Deve renderizar o mesmo componentes com propos atualizadas', () => {
  test('', () => {
    const transacao = {
      transacao: 'Depósito',
      valor: 100,
    };

    const { rerender } = render(
      <Transacoes estilos={estilos} transacao={transacao} />,
    );
    const tipoTransacao = screen.getByTestId('tipoTransacao');
    const valorTransacao = screen.getByTestId('valorTransacao');

    expect(tipoTransacao).toHaveTextContent('Depósito');
    expect(valorTransacao).toHaveTextContent('R$ 100');

    const novaTransacao = {
      transacao: 'Transferência',
      valor: 50,
    };

    rerender(<Transacoes estilos={estilos} transacao={novaTransacao} />);
    const novoTipoTransacao = screen.getByTestId('tipoTransacao');
    const novoValorTransacao = screen.getByTestId('valorTransacao');

    expect(novoTipoTransacao).toHaveTextContent('Transferência');
    expect(novoValorTransacao).toHaveTextContent('- R$ 50');
  });
});
