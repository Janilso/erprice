import { NavigationContainer } from '@react-navigation/native';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { ROUTES_NAME } from './routesName';
import Splash from '../screens/Splash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from '../screens/Home';
import { colors } from '../theme';
import Details from '../screens/Details';
import CustomHeader from '../components/CustomHeader';

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

const routes = [
  { name: ROUTES_NAME.SPLASH, componet: Splash, title: '', headerShown: false },
  {
    name: ROUTES_NAME.HOME,
    componet: Home,
    title: 'ERPRICE',
    headerShown: true,
  },
  {
    name: ROUTES_NAME.DETAILS,
    componet: Details,
    title: 'Detalhes',
    headerShown: true,
  },
];

const AppRoutes: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Navigator
          initialRouteName={ROUTES_NAME.SPLASH as keyof StackParamList}
        >
          {routes.map(({ name, componet, title, headerShown }) => {
            const header = headerShown
              ? (props: NativeStackHeaderProps) => <CustomHeader {...props} />
              : undefined;
            const isPageSpash = name === ROUTES_NAME.SPLASH;
            return (
              <Screen
                key={name}
                name={name as keyof StackParamList}
                component={componet}
                options={{
                  headerShown,
                  title,
                  header,
                  contentStyle: {
                    backgroundColor: colors.backGroundPage,
                    paddingHorizontal: !isPageSpash ? 20 : 0,
                    paddingTop: !isPageSpash ? 40 : 0,
                  },
                }}
              />
            );
          })}
        </Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppRoutes;
