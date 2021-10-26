import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-predicas',
  templateUrl: './predicas.component.html',
  styleUrls: ['./predicas.component.scss']
})
export class PredicasComponent implements OnInit {

  flyer = '../../../assets/img/predicas/predicas.jpg';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%2deseo%20información%20de:';

  constructor() { }

  ngOnInit(): void {
  }

}
