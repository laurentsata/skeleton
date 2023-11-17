import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cake',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.scss'
})
export class CakeComponent {
  @Input() cake: { name: string; composition: string; price: number; imageUrl: string } = {
    name: '',
    composition: '',
    price: 0,
    imageUrl: ''
  };
}
