import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento-damas',
  templateUrl: './departamento-damas.component.html',
  styleUrls: ['./departamento-damas.component.scss']
})
export class DepartamentoDamasComponent implements OnInit {

  flyer = '../../../assets/img/damas/women.jpg';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%2deseo%20información%20de:';

  constructor() { }

  ngOnInit(): void {
  }

}
