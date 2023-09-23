import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css', './background.animation.css']
})
export class BackgroundComponent {
  @Input()
  scrolled = false;
}
