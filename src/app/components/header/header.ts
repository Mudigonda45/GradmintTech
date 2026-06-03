import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  refreshPage() {
    window.location.reload();
  }
}
