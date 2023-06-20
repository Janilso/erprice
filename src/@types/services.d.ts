interface IResponseHistoricoCotacao {
  code: string;
  codein: string;
  name: string;
  high: number;
  low: number;
  varBid: number;
  pctChange: number;
  bid: number;
  ask: number;
  timestamp: number;
  create_date: string;
}

interface IMoeda {
  code: string;
  name: string;
}
