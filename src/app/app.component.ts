import { Component, Renderer2, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { CakeComponent } from './cake/cake.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, CardComponent, ContactComponent, CakeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'skeleton';

  constructor(private router: Router, private route: ActivatedRoute, private renderer: Renderer2) {}

  ngOnInit() {
    this.setInitialStyles();
  }

  // Méthode pour déterminer si le lien est actif
  isLinkActive(routePath: string): boolean {
    return this.router.url === routePath;
  }

  // Écouteur d'événement pour le défilement de la fenêtre
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Barre de navigation transparente après avoir défilé de 100 pixels vers le bas
    const navContainer = document.querySelector('.links');
    if (scrollPosition > 100) {
      this.renderer.addClass(navContainer, 'transparent-nav');
    } else {
      this.renderer.removeClass(navContainer, 'transparent-nav');
    }

    // Disparition de l'image du header après avoir défilé de 100 pixels vers le bas
    const headerImgId = 'headerImg';
    if (scrollPosition > 100) {
      // Ajoute ici la logique pour masquer l'image du header si nécessaire
      this.renderer.setStyle(document.getElementById(headerImgId), 'display', 'none');
    } else {
      this.renderer.setStyle(document.getElementById(headerImgId), 'display', 'block');
    }

    // Affiche le footer lorsque le scroll atteint le bas de la page
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    if (windowHeight + scrollPosition >= documentHeight) {
      //  if (windowHeight >= documentHeight) {
      this.showFooter();
    } else {
      this.hideFooter();
    }
  }

  // Méthode pour définir les styles initiaux
  private setInitialStyles() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Styles initiaux pour la barre de navigation
    const navContainer = document.querySelector('.navContainer');
    if (scrollPosition > 100) {
      this.renderer.addClass(navContainer, 'transparent-nav');
    }

    // Styles initiaux pour l'image du header
    const headerImgId = 'headerImg';
    if (scrollPosition > 100) {
      // Ajoute ici la logique pour masquer l'image du header si nécessaire
      this.renderer.setStyle(document.getElementById(headerImgId), 'display', 'none');
    }


  // // Masque le footer initialement
  // this.hideFooter();
}

private showFooter() {
  const footer = document.querySelector('.footer');
  this.renderer.setStyle(footer, 'display', 'block');
}

private hideFooter() {
  const footer = document.querySelector('.footer');
  this.renderer.setStyle(footer, 'display', 'none');
}
}
