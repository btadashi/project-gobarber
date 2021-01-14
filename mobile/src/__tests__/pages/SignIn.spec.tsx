import React from 'react';
/** Importamos o 'render' de dentro de 'react-native-testing-library' */
import { render } from 'react-native-testing-library';

/** Importamos o componente de 'SignIn' */
import SignIn from '../../pages/SignIn';

/** Fazemos um 'mock' da lib '@react-navigation/native', retornando um objeto com a função useNavigation vazia (jest.fn())  */
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('SignIn page', () => {
  it('should contains email/password inputs', () => {
    /** Pegamos o método 'getByPlaceholder' de dentro de 'render', passando o nosso 'SignIn' */
    const { getByPlaceholder } = render(<SignIn />);

    /** Esperamos que o getByPlaceholder de 'email' e 'senha' existam */
    expect(getByPlaceholder('E-mail')).toBeTruthy();
    expect(getByPlaceholder('Senha')).toBeTruthy();
  });
});
