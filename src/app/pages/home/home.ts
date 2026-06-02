import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PROGRAMS } from '../../programs';
import { HowItWorks } from "../how-it-works/how-it-works";
import { SuccessStories } from "../success-stories/success-stories";
import { Apply } from "../apply/apply";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HowItWorks, SuccessStories, Apply],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

  programs = PROGRAMS;

}