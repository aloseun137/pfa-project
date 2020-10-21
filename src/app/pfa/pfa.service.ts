import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PfaService {
  public formValue = {};
  pfas: Array<any> = [
    {pfa: 'StanbicIBTC PFA', rsa: 'PEN100XXXX1', employeeName: 'Osibanj Yemi', employee: 800000, employer: 650000, volountary: 100000},
    {pfa: 'StanbicIBTC PFA', rsa: 'PEN100XXXX2', employeeName: 'Ajao Niyi', employee: 500000, employer: 250000, volountary: 0},
    {pfa: 'TrustFund PFA', rsa: 'PEN100XXXX3', employeeName: 'Oluyemi Samuel', employee: 200000, employer: 250000, volountary: 50000},
    {pfa: 'TrustFund PFA', rsa: 'PEN100XXXX4', employeeName: 'Okorie Nkem', employee: 30000, employer: 20000, volountary: 50000},
    {pfa: 'Sigma PFA', rsa: 'PEN100XXXX5', employeeName: 'Kio Fredrick', employee: 15000, employer: 10000, volountary: 50000}
  ];

  pfassum: Array<any> = [
    {pfa: 'StanbicIBTC PFA', scheduleperiod: 'June 2018', totalemployee: 2, totalpayment: 23000000,
    transactionId: 'NIP9009937383'},
    {pfa: 'TrustFund PFA', scheduleperiod: 'June 2018', totalemployee: 2, totalpayment: 600000,
    transactionId: 'NIP3409937383'},
    {pfa: 'Sigma PFA', scheduleperiod: 'June 2018', totalemployee: 1, totalpayment: 75000,
    transactionId: 'NI5509937383'}
  ];
  constructor() { }
  getPfadetails() {
    return this.pfas;
  }

  getPfasum() {
    return this.pfassum;
  }

  getFormValue(param: object) {
    this.formValue = param;

  }

}
