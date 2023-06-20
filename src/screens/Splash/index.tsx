import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { style } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../theme';
import { Icon } from '../../../assets/icons';
import cotacaoSevice from '../../services/cotacao';
import { storage } from '../../utils/storage';

const Splash: React.FC = () => {
  const verifyStorage = async () => {
    const dateNow = Date.now();
    const dataStorage = await storage.getDataXML();
  };

  useEffect(() => {
    verifyStorage();
    cotacaoSevice.getMoedas();
  });
  return (
    <>
      <View style={style.root}>
        <LinearGradient
          colors={[colors.primaryMedium, colors.primaryLight]}
          style={style.background}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Icon.Logo width={115} height={115} />
          <Text style={style.title}>ERPRICE</Text>
          <Text style={style.subtitle}>COTAÇÃO DE MOEDAS</Text>
        </LinearGradient>
      </View>
    </>
  );
};

export default Splash;
