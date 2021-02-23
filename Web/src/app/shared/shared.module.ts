import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BarComponent } from './bar/bar.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    BarComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    BarComponent,
    MenuComponent
  ]
})
export class SharedModule { }
