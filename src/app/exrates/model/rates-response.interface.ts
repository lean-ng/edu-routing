
export interface RatesResponse {
  base: string;
  date: string;
  rates: {
    [currency: string]: number
  };
}
