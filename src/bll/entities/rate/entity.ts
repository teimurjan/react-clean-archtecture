export default class RateEntity {
  currency: string;
  rate: string;

  constructor(currency: string, rate: string) {
    this.currency = currency;
    this.rate = rate;
  }
}
