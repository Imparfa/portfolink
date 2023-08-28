import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolink';

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const app = document.getElementById('app');
    // @ts-ignore
    document.body.style.setProperty('--scroll', app.scrollTop / window.innerHeight + '');
    // @ts-ignore
    app.addEventListener('wheel', (event) => {
      event.preventDefault();
      const delta = event.deltaY;

      // @ts-ignore
      app.scrollBy({
        top: 0.1 * delta,
        behavior: 'smooth'
      });
    });
  }
}
