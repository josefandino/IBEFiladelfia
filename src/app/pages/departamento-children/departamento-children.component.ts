import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departamento-children',
  templateUrl: './departamento-children.component.html',
  styleUrls: ['./departamento-children.component.scss']
})
export class DepartamentoChildrenComponent implements OnInit {

  flyer = '../../../assets/img/children/children.jpeg';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%2deseo%20información%20de:';

  constructor() { }

  ngOnInit(): void {
  }

}
