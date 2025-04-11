import { Component } from '@angular/core';
import { NowDate } from '../my-Date';
@Component({
  selector: 'app-home-page',
  standalone: false,

  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  date = new NowDate().date;
}
