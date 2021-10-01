import { Component, OnInit } from '@angular/core';
import { MarcosWalletService } from '../marcos-wallet.service';

@Component({
  selector: 'app-marcos-currency',
  templateUrl: './marcos-currency.component.html',
  styleUrls: ['./marcos-currency.component.css'],
})
export class MarcosCurrencyComponent implements OnInit {
  constructor(public BitCoin: MarcosWalletService) {
    this.BitCoin.start();
  }

  ngOnInit() {}
}
