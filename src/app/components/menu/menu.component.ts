import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  openNav() {
    // @ts-ignore
    document.getElementById("menu").classList.add("active");
    // @ts-ignore
    document.getElementById("background").classList.add("menu-opened");
  }

  closeNav() {
    // @ts-ignore
    document.getElementById("menu").classList.remove("active");
    // @ts-ignore
    document.getElementById("background").classList.remove("menu-opened");
  }
}
