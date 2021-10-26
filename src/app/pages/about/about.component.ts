import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  flyer = '../../../assets/img/about/nosotros.jpg';
  title = 'IBEFiladelfia';
  ws: any = 'https://wa.me/51971888294?text=Hola%2deseo%20información%20de:';

  constructor() { }

  ngOnInit(): void {
  }

}
