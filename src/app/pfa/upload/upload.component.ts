import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PfaService } from '../pfa.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  selectedValue;
  selectedValue2;

  constructor(private router: Router, private pfaservice: PfaService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm, param: NgForm) {
    this.router.navigate(['/details']);
  }
}
