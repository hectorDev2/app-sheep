import { Component, Input } from '@angular/core';

@Component({
  selector: 'tattoo-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  @Input() imagesSlider!: string[];
}
