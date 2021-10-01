import { Component, OnInit } from '@angular/core';
import { MarcosWalletService } from '../marcos-wallet.service';

@Component({
  selector: 'app-marcos-wallet',
  templateUrl: './marcos-wallet.component.html',
  styleUrls: ['./marcos-wallet.component.css'],
})
export class MarcosWalletComponent implements OnInit {
  constructor(public BitCoin: MarcosWalletService) {}

  n: number;

  ngOnInit() {}
}
