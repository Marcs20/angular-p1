import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface BitCoinRate {
  time: {
    updated: string;
  };
  bpi: {
    USD: {
      rate_float: number;
    };
    BRL: {
      rate_float: number;
    };
    EUR: {
      rate_float: number;
    };
  };
}

@Injectable()
export class MarcosWalletService {
  constructor(private http: HttpClient) {}

  bitCoinList: Array<BitCoinRate> = [];
  bitCoinListEUR: Array<BitCoinRate> = [];

  dataUSD: number;
  dataBRL: number;
  dataEUR: number;

  private timer: any;

  saldo: number;

  getSaldo() {
    return this.saldo;
  }

  adicionar(n) {
    return (this.saldo = n);
  }

  remover(n) {
    if (this.saldo >= n) this.saldo = this.saldo - n;
  }

  getDataBRL() {
    return this.dataBRL;
  }

  getDataEUR() {
    return this.dataEUR;
  }

  getDataUSD() {
    return this.dataUSD;
  }

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.updateBitCoinRate();
      }, 60000);
    }
  }

  updateBitCoinRate() {
    this.http
      .get<BitCoinRate>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        this.bitCoinList.push(data);
        this.dataBRL = data.bpi.BRL.rate_float;
        this.dataUSD = data.bpi.USD.rate_float;
      });
    this.http
      .get<BitCoinRate>('https://api.coindesk.com/v1/bpi/currentprice/EUR.json')
      .subscribe((data) => {
        this.bitCoinListEUR.push(data);
        this.dataEUR = data.bpi.EUR.rate_float;
      });
  }
}
