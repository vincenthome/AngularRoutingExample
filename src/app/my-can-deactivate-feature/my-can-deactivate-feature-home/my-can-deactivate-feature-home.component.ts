import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-my-can-deactivate-feature-home',
  templateUrl: './my-can-deactivate-feature-home.component.html',
  styleUrls: ['./my-can-deactivate-feature-home.component.css']
})
export class MyCanDeactivateFeatureHomeComponent implements OnInit {

  dirty = false;

  constructor() { }

  ngOnInit() {
  }

  public get isDirty(): boolean {
    return this.dirty;
  }

}
