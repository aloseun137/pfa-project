import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PfaService } from '../pfa.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadForm: FormGroup;

  constructor(private router: Router, private pfaservice: PfaService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createUploadForm();
  }

  onSubmit(form: NgForm) {
    console.log(this.uploadForm.value);

    // this.router.navigate(['/details']);
  }
  createUploadForm() {
    this.uploadForm = this.fb.group({
        empcode: [null, Validators.required],
        month: ['', Validators.required],
        year: ['', Validators.required],
        file: [null],
    });
  }
}
