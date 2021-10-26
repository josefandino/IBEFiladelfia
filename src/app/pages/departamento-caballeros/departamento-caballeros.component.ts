import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento-caballeros',
  templateUrl: './departamento-caballeros.component.html',
  styleUrls: ['./departamento-caballeros.component.scss']
})
export class DepartamentoCaballerosComponent implements OnInit {

  flyer = '../../../assets/img/caballeros/gentlemen.jpg';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%2deseo%20información%20de:';

  constructor() { }

  ngOnInit(): void {
  }

}
