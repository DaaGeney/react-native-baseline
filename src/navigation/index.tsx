// @packages
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// @scripts
import Help from '../screens/help';
import Main from '../screens/main';
import routes from './routes';


// @interfaces
import { RootStackParamList } from '../utils/interfaces';

// @constants
const RootStack = createNativeStackNavigator<RootStackParamList>();
const mappedRoutes = {
  main: Main,
  help: Help
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Main">
        {Object.values(routes).map((route, index) => (
          <RootStack.Screen
            key={index}
            name={route.name as unknown as keyof RootStackParamList}
            component={mappedRoutes[route.component as keyof typeof mappedRoutes]}
            options={route.options}
          />
        ))}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;