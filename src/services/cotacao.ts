import { AxiosError, AxiosResponse } from 'axios';
import api from './api';
import { ENDPOINTS } from './endpoints';
import { getMoedasByDataXML } from '../utils/functions';

interface IResponseCalcService extends AxiosResponse {
  data: IResponseHistoricoCotacao[];
}

const cotacaoSevice = {
  getMoedas: () => {
    return new Promise((resolve: (value: IMoeda[]) => void, reject) => {
      api
        .get(ENDPOINTS.AVAILABLE, { responseType: 'text' })
        .then((response) => {
          const moedas = getMoedasByDataXML(response.data);
          resolve(moedas);
        })
        .catch((err: AxiosError) =>
          reject(err?.response?.data ?? { mensage: 'Error request' })
        );
    });
  },
  getHistoricoCotacao: (moeda: string, days: number) => {
    return new Promise(
      (resolve: (value: IResponseHistoricoCotacao[]) => void, reject) => {
        api
          .get(
            ENDPOINTS.DAYS.replace('{moeda}', moeda).replace(
              '{days}',
              `${days}`
            )
          )
          .then((response: IResponseCalcService) => resolve(response.data))
          .catch((err: AxiosError) =>
            reject(err?.response?.data ?? { mensage: 'Error request' })
          );
      }
    );
  },
};

export default cotacaoSevice;
