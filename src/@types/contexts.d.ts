type MoedasContextType = {
  moedas: IMoeda[];
  code: string;
  codein: string;
  setMoedas: (moedas: IMoeda[]) => void;
  setCode: (code: string) => void;
  setCodein: (codein: string) => void;
};
