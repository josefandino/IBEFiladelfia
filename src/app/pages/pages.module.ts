import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ComponentsModule } from './../components/components.module';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DepartamentoDamasComponent } from './departamento-damas/departamento-damas.component';
import { DepartamentoCaballerosComponent } from './departamento-caballeros/departamento-caballeros.component';
import { DepartamentoJovenesComponent } from './departamento-jovenes/departamento-jovenes.component';
import { DepartamentoChildrenComponent } from './departamento-children/departamento-children.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    DepartamentoDamasComponent,
    DepartamentoCaballerosComponent,
    DepartamentoJovenesComponent,
    DepartamentoChildrenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
