import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Login from '../components/Login/Login';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import Absence from '../screens/Absence';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Home: MainTabNavigator,
    Auth: Login,
    Absence: Absence,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
