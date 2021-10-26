import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento-jovenes',
  templateUrl: './departamento-jovenes.component.html',
  styleUrls: ['./departamento-jovenes.component.scss']
})
export class DepartamentoJovenesComponent implements OnInit {

  flyer = '../../../assets/img/jovenes/young.jpg';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%2deseo%20información%20de:';

  constructor() { }

  ngOnInit(): void {
  }

}
