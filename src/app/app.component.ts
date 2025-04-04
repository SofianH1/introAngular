import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './shared/banner/banner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'intro';
}