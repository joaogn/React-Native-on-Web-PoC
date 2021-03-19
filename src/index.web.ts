/* eslint-disable import/no-extraneous-dependencies */
import { AppRegistry } from 'react-native';
import App from './App';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-toastify/dist/ReactToastify.css';

AppRegistry.registerComponent('appName', () => App);

AppRegistry.runApplication('appName', {
  rootTag: document.getElementById('root'),
});
