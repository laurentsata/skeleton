import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, NgbCarouselModule, FormsModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  // images = [200, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/200/300`);

  images: string[] = [
    'https://knightparabellum.000webhostapp.com/img/gato-choco-c-lignac-17-.jpg',
    'https://knightparabellum.000webhostapp.com/img/fondGateau.png',
    'https://assets.afcdn.com/recipe/20160317/33223_w1024h576c1cx2464cy1632.jpg',
    // 1 image = url
  ];

	paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;

	@ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}

  ngAfterViewInit() {
    const links = document.querySelectorAll("nav li");
    const icons = document.getElementById("icons"); // Assurez-vous d'ajuster l'ID en conséquence
    const nav = document.getElementById("nav"); // Assurez-vous d'ajuster l'ID en conséquence

    if (icons) {
      icons.addEventListener("click", () => {
        if (nav) {
          nav.classList.toggle("active");
        }
      });
    }

    if (links) {
      links.forEach((link) => {
        link.addEventListener("click", () => {
          if (nav) {
            nav.classList.remove("active");
          }
        });
      });
    }
  }

}
