import { Component, OnInit } from '@angular/core';

// ng g component my-feature-a/my-feature-a

@Component({
  selector: 'app-my-feature-a',
  templateUrl: './my-feature-a.component.html',
  styleUrls: ['./my-feature-a.component.css']
})
export class MyFeatureAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
