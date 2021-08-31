import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  logo = '../../../assets/img/logo.png';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%20deseo%20información%20de:';


  routes: any = [
    { name: 'Inicio',   path: '/' },
    { name: 'Nosotros',  path: '/nosotros' },
    { name: 'Predicas', path: '/predicas' },
    { name: 'Calendario',   path: '/calendario' },
  ];

  drop: any = [
    // { name: '',   path: '/' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
