import { createContext, useState } from 'react';
import { SvgProps } from 'react-native-svg';
import { Flag } from '../../assets/flags';

export const MoedasContext = createContext<MoedasContextType | null>(null);

const MoedasProvider: React.FC<MoedasProvideProps> = (props) => {
  const [moedas, setListMoedas] = useState<Coin[]>([]);

  const [code, setCode] = useState<string>('');
  const [codein, setCodein] = useState<string>('');
  const setMoedas = (moedas: IMoeda[]) => {
    const coins = moedas.map(({ code, name }) => {
      const flags = Flag as IFlags;
      const icon = flags[`${code.toUpperCase()}`] ?? Flag.DEFAULT;
      return {
        code,
        name,
        icon,
      };
    });
    setListMoedas(coins);
  };

  return (
    <MoedasContext.Provider
      value={{ moedas, code, codein, setMoedas, setCode, setCodein }}
    >
      {props.children}
    </MoedasContext.Provider>
  );
};

export default MoedasProvider;
