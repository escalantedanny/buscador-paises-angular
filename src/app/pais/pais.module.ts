import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorMonedaComponent } from './pages/por-moneda/por-moneda.component';
import { PorIdiomaComponent } from './pages/por-idioma/por-idioma.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';



@NgModule({
  declarations: [
    PorCapitalComponent, 
    PorPaisComponent, 
    PorRegionComponent, 
    PorMonedaComponent, 
    PorIdiomaComponent, 
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PorCapitalComponent, 
    PorPaisComponent, 
    PorRegionComponent, 
    PorMonedaComponent, 
    PorIdiomaComponent, 
    VerPaisComponent
  ]
})
export class PaisModule { }
