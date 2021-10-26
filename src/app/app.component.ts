import { Component } from '@angular/core';
// import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IBEFiladelfia';


  // @HostListener("window:scroll", []) onWindowScroll() {
  //   // do some stuff here when the window is scrolled
  //   const verticalOffset = window.pageYOffset 
  //         || document.documentElement.scrollTop 
  //         || document.body.scrollTop || 10;
  //         console.log(verticalOffset)
  //         console.log('Soy el parte:', HostListener )
  // }
}
