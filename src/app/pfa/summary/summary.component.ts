import { PfaService } from './../pfa.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  totalpayment: number;
  totalemployee: number;
  totalpfa: number;


  pfas: Array<any>;

  constructor(private toastr: ToastrService, private pfaserve: PfaService ) { }

  ngOnInit(): void {
    this.pfas = this.pfaserve.getPfasum();
    this.calculateTotal('totalpayment');
    this.calculateTotal('totalemployee');
    this.calculateTotal('totalpfa');
    $('#btnSave').click(() => {
      $('#bankdetails').modal('hide');
   });
  }

  formSubmit(form: NgForm) {
    this.toastr.success('Payment Initiated Successfully!!!');
    form.reset();
    console.log('i worked');
  }

// calculate total
  calculateTotal(param) {

    // tslint:disable-next-line: no-var-keyword
    var i;
    // tslint:disable-next-line: no-var-keyword
    var total = 0;
    for (i = 0; i < this.pfas.length; i++) {
       total = total + this.pfas[i][param];
}
    if (param === 'totalemployee') {
  this.totalemployee = total;
} else if (param === 'totalpfa') {
  this.totalpfa = this.pfas.length;
} else {
  this.totalpayment = total;
}




  }

}