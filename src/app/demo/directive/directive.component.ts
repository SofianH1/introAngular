import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  imports: [],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.scss'
})
export class DirectiveComponent {
  age : number = 19;
  maList :number[] = [1,2,3,4,5,6,7,8,9,10]
}
