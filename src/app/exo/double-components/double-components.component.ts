import { Component } from '@angular/core';
import { ComponentLeftComponent } from '../doubleComponents/component-left/component-left.component';
import { ComponentRightComponent } from '../doubleComponents/component-right/component-right.component';

@Component({
  selector: 'app-double-components',
  imports: [ComponentLeftComponent,ComponentRightComponent],
  templateUrl: './double-components.component.html',
  styleUrl: './double-components.component.scss'
})
export class DoubleComponentsComponent {

}
