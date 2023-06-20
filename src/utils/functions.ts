import { DOMParser } from '@xmldom/xmldom';

export const getMoedasByDataXML = (xml: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'text/xml');
  const itens = doc.getElementsByTagName('xml').item(0)?.childNodes;

  const moedas = Array.from({ length: itens?.length ?? 0 }).reduce<IMoeda[]>(
    (acc, _, index) => {
      const code = itens?.item(index).nodeName;
      const name = itens?.item(0).textContent;
      if (code && name) return [...acc, { code, name }];
      return [];
    },
    [] as IMoeda[]
  );

  return moedas;
};
