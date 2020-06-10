import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyModel } from '../my-model';

@Component({
  selector: 'app-my-resolve-feature-home',
  templateUrl: './my-resolve-feature-home.component.html',
  styleUrls: ['./my-resolve-feature-home.component.css']
})
export class MyResolveFeatureHomeComponent implements OnInit {

  resolveData;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { resolveData: MyModel[]}) => {
      this.resolveData = data.resolveData;
    });
  }

}
