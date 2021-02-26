import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MunicipalityComponent } from './pages/municipality/municipality.component';
import { RegionComponent } from './pages/region/region.component';
import { NewRegisterComponent } from './components/new-register/new-register.component';
import { EditRegisterComponent } from './components/edit-register/edit-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MunicipalityComponent,
    RegionComponent,
    NewRegisterComponent,
    EditRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
