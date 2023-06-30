import { useNavigation } from '@react-navigation/native';
import { LayoutChangeEvent, Text, View } from 'react-native';
import { ROUTES_NAME } from '../../routes/routesName';
import CustomButton from '../../components/CustomButton';
import { useContext, useState } from 'react';
import { MoedasContext } from '../../contexts/moedas';
import SelectCoin from '../../components/SelectCoin';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useStyles } from './styles';
import IconButton from '../../components/IconButton';
import { Icon } from '../../../assets/icons';
import { colors } from '../../theme';

const Home: React.FC = () => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<StackParamList>>();

  const [sizeContent, setSizeContent] = useState({ width: 100, height: 100 });

  const styles = useStyles({ sizeContent });

  const moedasContext = useContext(MoedasContext);

  return (
    <View>
      <View style={styles.contentCoins}>
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
          onLayout={(e: LayoutChangeEvent) => {
            const width = e.nativeEvent.layout.width;
            const height = e.nativeEvent.layout.height;
            setSizeContent({ width, height });
          }}
          style={styles.coinIn}
          topContent={
            <IconButton
              underlayColor={colors.white}
              onPress={() => {
                console.log('click');
              }}
            >
              <View style={styles.buttonChange}>
                <Icon.SwapThinWhite width={24} height={24} />
              </View>
            </IconButton>
          }
        />
      </View>

      <CustomButton
        title="Detalhes"
        onPress={() => navigate(ROUTES_NAME.DETAILS)}
      />
    </View>
  );
};

export default Home;
