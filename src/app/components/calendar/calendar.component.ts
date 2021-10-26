import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  flyer = '../../../assets/img/calendar/calendar.jpg';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%2deseo%20información%20de:';

  constructor() { }

  ngOnInit(): void {
  }

}
