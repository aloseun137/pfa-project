import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PfaService } from '../pfa.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  pfas: Array<any>;

  constructor(private router: Router, private pfaserve: PfaService) { }

  ngOnInit(): void {
    this.pfas = this.pfaserve.getPfadetails();


  }

  submit() {
    this.router.navigate(['/summary']);
  }

}
