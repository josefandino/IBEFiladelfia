import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  logo = '../../../assets/img/logo-circle.png';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%20deseo%20información%20de:';

  anio: number;

  constructor() {
    this. anio = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
