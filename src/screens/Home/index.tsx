import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { ROUTES_NAME } from '../../routes/routesName';
import CustomButton from '../../components/CustomButton';
import { useContext } from 'react';
import { MoedasContext } from '../../contexts/moedas';
import SelectCoin from '../../components/SelectCoin';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useStyles } from './styles';

const Home: React.FC = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();
  const styles = useStyles();

  const moedasContext = useContext(MoedasContext);

  return (
    <View>
      <SelectCoin
        coins={moedasContext?.moedas ?? []}
        onSelect={(coin: Coin, index: number) => {
          console.log('coin', coin, index);
        }}
        style={styles.coin}
      />
      <SelectCoin
        coins={moedasContext?.moedas ?? []}
        onSelect={(coin: Coin, index: number) => {
          console.log('coinIn', coin, index);
        }}
        style={styles.coinIn}
      />

      <CustomButton
        title="Detalhes"
        onPress={() => navigate(ROUTES_NAME.DETAILS)}
      />
    </View>
  );
};

export default Home;
