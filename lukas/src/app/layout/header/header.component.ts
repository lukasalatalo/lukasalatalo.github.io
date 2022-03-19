import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  
  move(val: string) {
    if (val == 'internet') {
      this.router.navigate(['/services/internet']);
    }

    if (val == 'tv') {
      this.router.navigate(['/services/tv']);
    }

    if (val == 'phone') {
      this.router.navigate(['/services/phone']);
    }
  }
}
