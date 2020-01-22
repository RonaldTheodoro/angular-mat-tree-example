import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent  {
  @Input() name: string;
}
