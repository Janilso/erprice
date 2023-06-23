type MoedasContextType = {
  moedas: Coin[];
  code: string;
  codein: string;
  setMoedas: (moedas: IMoeda[]) => void;
  setCode: (code: string) => void;
  setCodein: (codein: string) => void;
};

interface MoedasProvideProps {
  children: React.ReactNode;
}

type Coin = IMoeda & {
  icon: React.FC<SvgProps>;
};

interface IFlags {
  [index: string]: React.FC<SvgProps>;
}
