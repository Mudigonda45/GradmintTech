import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from "./components/header/header";
import { Home } from "./pages/home/home";

import { CommonModule } from '@angular/common';

import emailjs from '@emailjs/browser';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormGroup
} from '@angular/forms';
import { ProgramDetails } from "./pages/program-details/program-details";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Home,
    CommonModule,
    ReactiveFormsModule,
    ProgramDetails,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'gradmint-clone';

  submitted = false;

  loading = false;

  form!: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      fullName: ['', Validators.required],

      email: [
        '',
        [Validators.required, Validators.email]
      ],

      phone: ['', Validators.required],

      college: ['', Validators.required],

      graduationYear: ['', Validators.required],

      domain: ['', Validators.required],

      resume: ['', Validators.required]

    });

  }

  submit() {

    this.submitted = true;

    if (this.form.invalid) {

      alert('Please fill all fields');

      return;

    }

    this.loading = true;

    emailjs.send(

      'service_m45d2t7',

      'template_h5awi8o',

      {
        name: this.form.value.fullName,
        email: this.form.value.email,
        phone: this.form.value.phone,
        college: this.form.value.college,
        graduationYear: this.form.value.graduationYear,
        domain: this.form.value.domain,
        resume: this.form.value.resume
      },

      'Son3K5SQtn0DalNLD'

    ).then(() => {

      alert('Application Submitted Successfully');

      this.form.reset();

      this.loading = false;

    }).catch((error) => {

      console.log(error);

      alert('Something went wrong');

      this.loading = false;

    });

  }

}