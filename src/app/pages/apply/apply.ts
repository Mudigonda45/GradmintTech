import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {
  FormBuilder,
  Validators,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-apply',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './apply.html',
  styleUrls: ['./apply.css']
})
export class Apply {
 loading = false; 
  submitted = false;

  form: FormGroup;   

  constructor(private fb: FormBuilder) {

  
    this.form = this.fb.group({

  fullName: ['', Validators.required],

  email: ['', [Validators.required, Validators.email]],

  phone: ['', Validators.required],

  college: ['', Validators.required],

  graduationYear: ['', Validators.required],

  domain: ['', Validators.required],

  resume: [
    '',
    [
      Validators.required,
      Validators.pattern('https?://.+')
    ]
  ]

});

  }

  submit() {

  this.submitted = true;

  if (this.form.invalid) {
    alert('Please fill all fields');
    return;
  }

  const templateParams = {

    name: this.form.value.fullName,

    email: this.form.value.email,

    phone: this.form.value.phone,

    college: this.form.value.college,

    graduationYear: this.form.value.graduationYear,

    domain: this.form.value.domain,

    resume: this.form.value.resume

  };

  emailjs.send(
'service_m45d2t7',

      'template_h5awi8o',

    templateParams,

   'Son3K5SQtn0DalNLD'

  )

  .then((response) => {

    console.log('SUCCESS!', response);

    alert('Application Submitted Successfully');

    this.form.reset();

  })

  .catch((error) => {

    console.error('FAILED...', error);

    alert('Email Sending Failed');

  });

}
}