import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Region } from '../../models/region.model';
import { MatOption } from '@angular/material/core';
import { RegionService } from '../../services/region.service';
import { MunicipalityService } from '../../services/municipality.service';
import { AlertsService } from '../../services/alerts.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-register',
  templateUrl: './edit-register.component.html',
  styleUrls: ['./edit-register.component.css']
})
export class EditRegisterComponent implements OnInit, OnDestroy {

  selectRegionText: string;
  regions: Region[] = [];
  private regionSubscription: Subscription;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialog,
            public regionService: RegionService, public municipalityService: MunicipalityService,
            private alertsService: AlertsService) { }

  ngOnInit(): void {
    if(this.data.type === "Municipio"){
      this.regionService.getAllRegions()
      this.regionSubscription = this.regionService.getCurrentListener().subscribe(response => {
        this.regions = response.result;
      });
    }
  }

  selected(event: MatSelectChange){
    this.selectRegionText = (event.source.selected as MatOption).viewValue;
  }

  editRegister(form: NgForm){
    if(form.valid){
      if(this.data.type === "Municipio"){
        form.controls['state'].setValue(Boolean(form.value.state))
        this.municipalityService.editMunicipality(form.value, this.data.data.id).subscribe(response => {
          if(response.result){
            this.alertsService.getShowAlert(`${this.data.type} actualizado`, response.message).then(() => this.dialogRef.closeAll());
          }else{
            this.alertsService.getShowAlert("Error", `Error al editar el ${this.data.type}`, "error").then(() => this.dialogRef.closeAll());
          }
        })
      }else{
        this.regionService.editRegion(form.value, this.data.data.code).subscribe(response => {
          if(response.result){
            this.alertsService.getShowAlert(`${this.data.type} actualizada`, response.message).then(() => this.dialogRef.closeAll());
          }else{
            this.alertsService.getShowAlert("Error", `Error al editar la ${this.data.type}`, "error").then(() => this.dialogRef.closeAll());
          }
        })
      }
    }
  }

  ngOnDestroy(): void {
    if(this.data.type === "Municipio"){
      this.regionSubscription.unsubscribe();
    }
  }


}
