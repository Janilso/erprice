import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { ROUTES_NAME } from '../../routes/routesName';
import CustomButton from '../../components/CustomButton';
import { useContext } from 'react';
import { MoedasContext } from '../../contexts/moedas';
import SelectCoin from '../../components/SelectCoin';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Home: React.FC = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();

  const moedasContext = useContext(MoedasContext);

  return (
    <View>
      <Text>Eu sou a Home page ó</Text>
      <SelectCoin coins={moedasContext?.moedas ?? []} />

      {/* <CustomButton
        title="Detalhes"
        onPress={() => navigate(ROUTES_NAME.DETAILS)}
      /> */}
    </View>
  );
};

export default Home;
