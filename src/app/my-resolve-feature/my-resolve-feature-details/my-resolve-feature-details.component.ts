import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyModel } from '../my-model';

@Component({
  selector: 'app-my-resolve-feature-details',
  templateUrl: './my-resolve-feature-details.component.html',
  styleUrls: ['./my-resolve-feature-details.component.css']
})
export class MyResolveFeatureDetailsComponent implements OnInit {

  resolveData;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // 1. Using Observable when Route Changes WITHOUT changing the View.
    this.route.data.subscribe((data: { resolveData: MyModel}) => {
      this.resolveData = data.resolveData;
    });

    // 2. Using Non-Observable Snapshot
    // this.resolveData = this.route.snapshot.data['resolveData'];
  }

}
