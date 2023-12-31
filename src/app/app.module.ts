import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BackgroundComponent} from './components/background/background.component';
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {ScrollMouseComponent} from './components/scroll-mouse/scroll-mouse.component';
import {MenuComponent} from './components/menu/menu.component';
import {SkillsComponent} from './components/skills/skills.component';
import {CareerComponent} from './components/career/career.component';
import {WorksComponent} from './components/works/works.component';
import {ContactComponent} from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    HomeComponent,
    HeaderComponent,
    ScrollMouseComponent,
    MenuComponent,
    SkillsComponent,
    CareerComponent,
    WorksComponent,
    ContactComponent,
  ],
    imports: [
        BrowserModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
