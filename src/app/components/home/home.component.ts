import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home.animation.css']
})
export class HomeComponent {
  @Input()
  scroll = 0;
}
