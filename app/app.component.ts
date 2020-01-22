import { Component } from '@angular/core';
import { TreeControl, NestedTreeControl, FlatTreeControl } from '@angular/cdk/tree';

import { of } from 'rxjs/observable/of';

interface TestData {
  name: string;
  // level: number;
  children?: TestData[];
}

// const GetLevel = (node: TestData) => node.level;
// const IsExpandable = (node: TestData) => node.children && node.children.length > 0;
const GetChildren = (node: TestData) => of(node.children);
// const TC = new FlatTreeControl(GetLevel, IsExpandable);
const TC = new NestedTreeControl(GetChildren);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tc = TC;
  data = [
    {
      name: 'a',
      children: [
        { name: 'g' },
        {
          name: 'b',
          children: [
            { name: 'e' },
            { name: 'f' }
          ]
        },
        {
          name: 'c',
          children: [
            { name: 'd' }
          ]
        }
      ]
    }];

  hasChild(_: number, node: TestData) {
    console.log(node);
    return node.children != null && node.children.length > 0;
  }
}
