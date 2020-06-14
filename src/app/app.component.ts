import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myroute';

  constructor(private router: Router) {

  }

  display2ndOutlet(): void {
    this.router.navigate([{ outlets: { my2ndoutlet: ['my2ndoutletpath'] } }]);
  }

  hide2ndOutlet(): void {
    this.router.navigate([{ outlets: { my2ndoutlet: null } }]);
  }

}
