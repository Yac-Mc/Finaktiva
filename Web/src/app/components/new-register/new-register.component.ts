import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Region } from 'src/app/models/region.model';
import { RegionService } from '../../services/region.service';
import { MunicipalityService } from '../../services/municipality.service';
import { AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {

  selectedRegion: string;
  selectRegionText: string;
  regions: Region[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public type: string, private dialogRef: MatDialog,
              public regionService: RegionService, public municipalityService: MunicipalityService,
              private alertsService: AlertsService) { }

  ngOnInit(): void {
    if(this.type === "Municipio"){
      this.regionService.getAllRegions().subscribe(response => {
        this.regions = response.result;
      });
    }
  }

  selected(event: MatSelectChange){
    this.selectRegionText = (event.source.selected as MatOption).viewValue;
  }

  createRegister(form: NgForm){
    if(form.valid){
      if(this.type === "Municipio"){
        form.controls['state'].setValue(Boolean(form.value.state))
        this.municipalityService.insertMunicipality(form.value).subscribe(response => {
          if(!response.result){
            this.alertsService.getShowAlert(`${this.type} agregado`, response.message).then(() => this.dialogRef.closeAll());
          }else{
            this.alertsService.getShowAlert("Error", response.message, "error").then(() => this.dialogRef.closeAll());
          }
        })
      }else{
        console.log(form);
      }
    }
  }

}
