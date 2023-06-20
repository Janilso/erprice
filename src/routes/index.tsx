import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES_NAME } from './routesName';
import Splash from '../screens/Splash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

const routes = [
  { name: ROUTES_NAME.SPLASH, componet: Splash, showBar: false },
  { name: ROUTES_NAME.HOME, componet: Home, showBar: true },
];

const AppRoutes: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator
          initialRouteName={ROUTES_NAME.SPLASH as keyof StackParamList}
        >
          {routes.map(({ name, componet, showBar }) => (
            <Screen
              key={name}
              name={name as keyof StackParamList}
              component={componet}
              options={{
                headerShown: showBar,
              }}
            />
          ))}
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
