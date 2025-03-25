import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem } from '../interfaces/nav-item.interface';

@Component({
  selector: 'app-exo',
  imports: [RouterModule],
  templateUrl: './exo.component.html',
  styleUrl: './exo.component.scss'
})
export class ExoComponent {
  navitem : NavItem[] = [
    {
      title:"Liste de Course",
      url:["/exo","listeDeCourses"],
      isVisible:true
    },
    {
      title:"Doubles Components",
      url:["/exo","doubleComponents"],
      isVisible:true
    },
  ]
}
