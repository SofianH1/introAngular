import { Component } from '@angular/core';

@Component({
  selector: 'app-component-left',
  imports: [],
  templateUrl: './component-left.component.html',
  styleUrl: './component-left.component.scss'
})
export class ComponentLeftComponent {
  sendValue(val:string){
    console.log(val)
  }
}
