import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolink';
  scroll = 0

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const app = document.getElementById('app');

    if (app) {
      this.scroll = app.scrollTop / app.clientHeight;
      document.body.style.setProperty('--scroll', this.scroll + '');
      app.addEventListener('wheel', (event) => {
        if (this.scroll != 3) {
          event.preventDefault();
          const delta = event.deltaY;

          app.scrollBy({
            top: 0.001 * delta,
            behavior: 'smooth'
          });
        }
      });

      const works = document.getElementById('works');
      if (works && this.scroll == 3) {
        works.focus();
      }
    }
  }
}
