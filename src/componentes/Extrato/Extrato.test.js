import { render, screen } from '@testing-library/react';
import Extrato from './index';
describe('Deve renderizar um lista de transações ', () => {
  test('', () => {
    const transacoes = [
      {
        transacao: 'Depósito',
        valor: 100,
      },
    ];

    render(<Extrato transacoes={transacoes} />);
    const lista = screen.getByRole('listitem');
    expect(lista).toBeInTheDocument();
  });
});
