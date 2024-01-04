import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._amount = amount;
    this._currency = {
      _code: currency.code,
      _name: currency.name,
    };
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof (newAmount) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be a Currency');
    }
    this._currency = {
      _code: newCurrency.code,
      _name: newCurrency.name,
    };
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Amount must be a number');
    } else if (typeof (conversionRate) !== 'number') {
      throw new TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
