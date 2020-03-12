export interface Country {
  id: string;
  name: string;
  capital: string;
  population: number;
  currencies: {
    code: string,
    name: string,
    symbol: string
  };
  flag: string;
}
