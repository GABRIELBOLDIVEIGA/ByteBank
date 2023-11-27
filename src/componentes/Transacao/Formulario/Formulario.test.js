import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar um campo de input ', () => {
  test('no Documento.', () => {
    render(<Formulario />);
    const campoInput = screen.getByPlaceholderText('Digite um valor');
    expect(campoInput).toBeInTheDocument();
  });

  test('com o type number.', () => {
    render(<Formulario />);
    const campoInput = screen.getByPlaceholderText('Digite um valor');
    expect(campoInput).toHaveAttribute('type', 'number');
  });

  test('que pode ser preenchido.', () => {
    render(<Formulario />);
    const campoInput = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoInput, '50');
    expect(campoInput).toHaveValue(50);
  });
});

test('Deve chamar um event ode onSubmit ao clicar em realizar transacao.', () => {
  const realizarTransacao = jest.fn();
  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');
  expect(botao).toBeInTheDocument();

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
