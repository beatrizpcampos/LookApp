import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Home from './src/pages/Home';
import SignUp from './src/pages/SignUp'
import Feed from './src/pages/Feed'
import SignIn from './src/pages/SignIn'


AppRegistry.registerComponent(appName, () => Feed);
