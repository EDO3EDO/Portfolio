import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from "../Component/navbar/navbar";
import { HeaderComponent } from "../Component/header/header.component";
import { AboutComponent } from "../Component/About/About.component";
import { WorkComponent } from "../Component/Work/Work.component";
import { ContactComponent } from "../Component/Contact/Contact.component";


@Component({
  selector: 'app-root',
  imports: [Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
