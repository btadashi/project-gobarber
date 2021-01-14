import React from 'react';
/** Precisamos passar para o nosso button a propriedade 'onPress'. Para isso, importamos
 * o 'RectButtonProperties' de dentro de 'react-native-gesture-handler', que nada mais
 * é do que as propriedades que um 'RectButton' pode receber
 */
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText } from './styles';

/** Criamos uma interface 'ButtonProps' que extende ao 'RectButtonProperties'
 * Forçamos, dizendo que o conteúdo do botão, o 'children' precisa ser um texto
 */
interface ButtonProps extends RectButtonProperties {
  children: string;
}

/** Então passamos o 'ButtonProps' por volta do FC
 * Com o '...rest' pegamos todas as propriedades existentes do nosso button e passamos
 * para dentro do nosso 'Container'
 */
const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
