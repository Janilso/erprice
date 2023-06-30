import { DOMParser } from '@xmldom/xmldom';
import { differenceInDays } from 'date-fns';

export const getSymbolByCode = () => {
  console.log('symbolsJson', SYMBOLS);
  // const symbols = ;
};

export const getMoedasByDataXML = (xml: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const itens = doc.getElementsByTagName('xml').item(0)?.childNodes;

  const moedas = Array.from({ length: itens?.length ?? 0 }).reduce<IMoeda[]>(
    (acc, _, index) => {
      const code = itens?.item(index).nodeName;
      const name = itens?.item(index).textContent;
      if (code && name) return [...acc, { code, name }];
      return [];
    },
    [] as IMoeda[]
  );

  return moedas;
};

export const checkDiffDate = (dateInTimestemp?: number, dataDiff?: number) => {
  if (dateInTimestemp && dataDiff) {
    const diff = differenceInDays(Date.now(), dateInTimestemp);
    return diff >= dataDiff;
  } else return true;
};

export const removeAccents = (str: string) => {
  let text = str;
  text = text.toLowerCase();
  text = text.replace(/[ÁÀÂÃ]/gi, 'a');
  text = text.replace(/[ÉÈÊ]/gi, 'e');
  text = text.replace(/[ÍÌÎ]/gi, 'i');
  text = text.replace(/[ÓÒÔÕ]/gi, 'o');
  text = text.replace(/[ÚÙÛ]/gi, 'u');
  return text;
};
