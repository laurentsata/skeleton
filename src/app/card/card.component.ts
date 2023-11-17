import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CakeComponent } from '../cake/cake.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, CakeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
