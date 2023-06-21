import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { ROUTES_NAME } from '../../routes/routesName';

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <View>
      <Text>Eu sou a Home page ó</Text>
      <Button
        title="Detalhes"
        onPress={() => navigate(ROUTES_NAME.DETAILS as keyof StackParamList)}
      />
    </View>
  );
};

export default Home;
