import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CakeComponent } from './cake/cake.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, CardComponent, ContactComponent, CakeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'skeleton';
  constructor(private router: Router, private route: ActivatedRoute) {}

  isLinkActive(routePath: string): boolean {
    return this.router.url === routePath;
}
}
