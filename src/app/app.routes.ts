import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { ProgramDetails } from './pages/program-details/program-details';
import { Apply } from './pages/apply/apply';
import { HowItWorks } from './pages/how-it-works/how-it-works';

export const routes: Routes = [




  {
    path: '',
    component: Home
  },

  {
    path: 'program/:id',
    component: ProgramDetails
  }/* ,

  {
    path: 'apply',
    component: Apply
  },
  {
    path:'how-it-works',
    component: HowItWorks
  } */
];

