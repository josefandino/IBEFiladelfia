import { DepartamentoChildrenComponent } from './pages/departamento-children/departamento-children.component';
import { DepartamentoJovenesComponent } from './pages/departamento-jovenes/departamento-jovenes.component';
import { DepartamentoCaballerosComponent } from './pages/departamento-caballeros/departamento-caballeros.component';
import { DepartamentoDamasComponent } from './pages/departamento-damas/departamento-damas.component';
import { PredicasComponent } from './components/predicas/predicas.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'nosotros', component: AboutComponent },
  {path: 'predicas', component: PredicasComponent },
  { path: 'calendario', component: CalendarComponent },
  
  {path: 'damas', component: DepartamentoDamasComponent },
  {path: 'caballeros', component: DepartamentoCaballerosComponent },
  {path: 'jovenes', component: DepartamentoJovenesComponent },
  {path: 'children', component: DepartamentoChildrenComponent },

  {path: '**', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: false,
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
