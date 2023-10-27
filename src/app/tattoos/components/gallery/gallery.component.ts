import { Component, Input } from '@angular/core';

@Component({
  selector: 'tattoo-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  @Input()
  images!: string[];

  @Input()
  imageSelect?: string;

  selectImage(image: string) {
    this.imageSelect = image;
  }
}
