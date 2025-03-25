import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem } from '../../interfaces/nav-item.interface';

@Component({
  selector: 'app-banner',
  imports: [RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  navItems: NavItem[] = [
    {
      title: 'Demo',
      url: ['/demo'],
      isVisible: true,
    },
    {
      title: 'Exo',
      url: ['/exo'],
      isVisible: true,
    }
  ];
}
