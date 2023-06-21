import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSstyles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme';
import { Icon } from '../../../assets/icons';
import cotacaoSevice from '../../services/cotacao';
import { storage } from '../../utils/storage';
import { checkDiffDate } from '../../utils/functions';
import { MoedasContext } from '../../contexts/moedas';
import { useNavigation } from '@react-navigation/native';
import { ROUTES_NAME } from '../../routes/routesName';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Splash: React.FC = () => {
  const styles = useSstyles();

  const { setMoedas, setCode, setCodein } = useContext(
    MoedasContext
  ) as MoedasContextType;

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  const changePage = () => {
    setTimeout(() => {
      return navigation.replace(ROUTES_NAME.HOME as keyof StackParamList);
    }, 3000);
  };

  const setDataContext = (moedas: IMoeda[]) => {
    setMoedas(moedas);
    setCode('BRL');
    setCodein('USD');
  };

  const fetchGetMoedas = (moedasStorage: IMoeda[]) => {
    cotacaoSevice
      .getMoedas()
      .then(async (moedas) => {
        const dateNow = Date.now();
        await storage.setDataXML({
          moedas,
          date: dateNow,
        });
        setDataContext(moedas);
      })
      .catch(() => {
        setDataContext(moedasStorage);
      })
      .finally(() => changePage());
  };

  const verifyStorage = async () => {
    const dataStorage = await storage.getDataXML();
    if (!dataStorage?.date || !dataStorage.moedas?.length) {
      fetchGetMoedas(dataStorage.moedas);
    } else if (checkDiffDate(dataStorage.date, 1)) {
      fetchGetMoedas(dataStorage.moedas);
    } else {
      setDataContext(dataStorage.moedas);
      changePage();
    }
  };

  useEffect(() => {
    verifyStorage();
  }, []);

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[colors.primaryMedium, colors.primaryLight]}
        style={styles.background}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Icon.Logo width={115} height={115} />
        <Text style={styles.title}>ERPRICE</Text>
        <Text style={styles.subtitle}>COTAÇÃO DE MOEDAS</Text>
        <ActivityIndicator
          style={styles.indicator}
          size="large"
          color={colors.white}
        />
      </LinearGradient>
    </View>
  );
};

export default Splash;
