import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolink';
  scrolled = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const app = document.getElementById('app');
    const home = document.getElementById('home');

    if (app) {
      const scroll = app.scrollTop / app.clientHeight;
      document.body.style.setProperty('--scroll', scroll + '');
      if (home)
        this.scrolled = (scroll >= 1);

      app.addEventListener('wheel', (event) => {
        event.preventDefault();
        const delta = event.deltaY;

        app.scrollBy({
          top: delta,
          behavior: 'smooth'
        });
      });
    }
  }
}
