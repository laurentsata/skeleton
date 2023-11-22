import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(80000)]),
      transition(':leave', animate(1000, style({ opacity: 0 }))),
    ]),
  ],
})

export class BurgerMenuComponent {
isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
