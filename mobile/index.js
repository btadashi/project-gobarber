/**
 * @format
 */

import {AppRegistry} from 'react-native';
/**Mudamos o caminho para a pasta 'src' */
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
