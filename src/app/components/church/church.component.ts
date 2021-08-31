import { Component, OnInit } from '@angular/core';

import { Church } from './../../interfaces/church';

@Component({
  selector: 'app-church',
  templateUrl: './church.component.html',
  styleUrls: ['./church.component.scss']
})
export class ChurchComponent implements OnInit {

  logo = '../../../assets/img/logo.png';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%20deseo%20información%20de:';

  church: Church[] = [];

  constructor() { }

  ngOnInit(): void {
    this.church = [
      {
        img: '../../../assets/img/church/damas.png',
        title: 'Damas',
        des: 'Departamento de damas valientes y poderosas en Crsito',
        url: '/damas',
      },
      {
        img: '../../../assets/img/church/mens.jpg',
        title: 'Caballeros',
        des: 'Hombres al servicio de Cristo',
        url: '/caballeros',
      },
      {
        img: '../../../assets/img/church/jovenes.png',
        title: 'Jóvenes',
        des: 'Jóvenes que dejan huellas en la arena de la historia',
        url: '/jovenes',
      },
      {
        img: '../../../assets/img/church/children.jpg',
        title: 'Niños',
        des: 'Niños que son luz en medio de las tinieblas',
        url: '/children',
      },
    ];
  }
}