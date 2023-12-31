import {
  useFonts,
  MavenPro_400Regular,
  MavenPro_500Medium,
  MavenPro_700Bold,
} from '@expo-google-fonts/maven-pro';
import AppRoutes from './src/routes';
import MoedasProvider from './src/contexts/moedas';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  let [fontsLoaded] = useFonts({
    MavenProRegular: MavenPro_400Regular,
    MavenProMedium: MavenPro_500Medium,
    MavenProBold: MavenPro_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <MoedasProvider>
        <AppRoutes />
      </MoedasProvider>
    </SafeAreaProvider>
  );
}
