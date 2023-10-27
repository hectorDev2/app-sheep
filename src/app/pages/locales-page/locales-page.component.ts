import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locales-page',
  templateUrl: './locales-page.component.html',
  styleUrls: ['./locales-page.component.scss'],
})
export class LocalesPageComponent implements OnInit {
  public apiKeyMap = 'AIzaSyBwmJLEDrbiuPBD071JlRc-cFZJINlsles';

  public horarios: string[] = [
    'SEG DAS  13:00 ÀS 20:00',
    'TER À SEXTA DAS 10:00 ÀS 20:00',
    'SÁB DAS 10: 00 ÀS 18:00',
  ];
  constructor() {}

  ngOnInit(): void {}
}
