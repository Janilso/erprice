import { createContext, useState } from 'react';

export const MoedasContext = createContext<MoedasContextType | null>(null);

type MoedasProvideProps = {
  children: React.ReactNode;
};

const MoedasProvider = (props: MoedasProvideProps) => {
  const [moedas, setMoedas] = useState<IMoeda[]>([]);

  const [code, setCode] = useState<string>('');
  const [codein, setCodein] = useState<string>('');

  return (
    <MoedasContext.Provider
      value={{ moedas, code, codein, setMoedas, setCode, setCodein }}
    >
      {props.children}
    </MoedasContext.Provider>
  );
};

export default MoedasProvider;
