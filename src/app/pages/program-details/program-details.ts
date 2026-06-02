
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PROGRAMS } from '../../programs';

@Component({
  selector: 'app-program-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './program-details.html',
  styleUrls: ['./program-details.css']
})
export class ProgramDetails {

  program: any;

  constructor(private route: ActivatedRoute) {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.program = PROGRAMS.find(p => p.id === id);

  }

}
