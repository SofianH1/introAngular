import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-main-demo',
  imports: [RouterModule],
  templateUrl: './main-demo.component.html',
  styleUrl: './main-demo.component.scss'
})
export class MainDemoComponent {
  navItems : NavItem[] = [
    {
      title: 'Binding',
      url: ['/demo','binding'],
      isVisible: true,
    },
    {
      title: 'Directive',
      url: ['/demo','directive'],
      isVisible: true,
    },
    {
      title: 'Parent',
      url: ['/demo','inpout'],
      isVisible: true,
    },
  ]
}
