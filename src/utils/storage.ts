import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEYS = {
  MOEDAS: 'moedas',
};

const setDataXML = async (data: IDataSetXML) => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem(STORAGE_KEYS.MOEDAS, jsonValue);
  } catch (e) {
    console.log('Erro ao salvar dados', e);
  }
};

const getDataXML = async () => {
  let data: IDataSetXML = { date: undefined, moedas: [] };
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEYS.MOEDAS);
    if (jsonValue != null) data = JSON.parse(jsonValue) as IDataSetXML;

    return data;
  } catch (e) {
    console.log('Erro ao buscar dados', e);
    return data;
  }
};

export const storage = {
  setDataXML,
  getDataXML,
};
