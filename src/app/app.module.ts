import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ScrollMouseComponent } from './components/scroll-mouse/scroll-mouse.component';
import { MenuComponent } from './components/menu/menu.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HomeComponent,
    HeaderComponent,
    ScrollMouseComponent,
    MenuComponent,
    SkillsComponent,
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
