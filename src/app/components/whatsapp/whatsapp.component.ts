import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent implements OnInit {

  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%20deseo%20información%20de:';

  constructor() { }

  ngOnInit(): void {
  }

}
