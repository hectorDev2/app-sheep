import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  hour: string;
  // logo: any;
  nameBarber: string;
  // scheduleButton: any;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { hour: '05/07/2022 09:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 10:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 11:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 11:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 13:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 14:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 15:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 16:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 17:00', nameBarber: 'Bruno' },
  { hour: '05/07/2022 18:00', nameBarber: 'Felipe' },
  { hour: '05/07/2022 19:00', nameBarber: 'Bruno' },
];
@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {}

  openModal(): void {
    console.log('open modal');
  }
}
