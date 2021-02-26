import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { MunicipalityService } from '../../services/municipality.service';
import { AlertsService } from '../../services/alerts.service';

import { Municipality } from 'src/app/models/municipality.model';
import { NewRegisterComponent } from '../../components/new-register/new-register.component';
import { EditRegisterComponent } from '../../components/edit-register/edit-register.component';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit, OnDestroy {

  private municipalitySubscription: Subscription;
  totalRecords = 0;
  recordsByPage = 5;
  pageCombo = [5, 10, 20, 30];
  dataSource = new MatTableDataSource<Municipality>();
  deployColumns = ['code', 'name', 'regionCode', 'state', 'edit', 'delete'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private municipalityService: MunicipalityService,
            private dialog: MatDialog, private alertsService: AlertsService,) { }

  ngOnInit(): void {
    this.alertsService.getShowLoading("Cargando...");
    this.municipalityService.getAllMunicipalities();
    this.municipalitySubscription = this.municipalityService.getCurrentListener().subscribe(resp => {
      if (resp.isSuccessful) {
        this.dataSource = new MatTableDataSource<Municipality>(resp.result);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.pagination;
        this.totalRecords = resp.result.length;
        this.alertsService.closeAlert();
      }else{
        this.alertsService.getShowAlert("¡Oops!", "Se presento un error al cargar la información", "error");
      }
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewRegisterComponent, {
      data: 'Municipio',
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.municipalityService.getAllMunicipalities();
    })
  }

  filter(event: any) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  orderColumn(event: any){
    this.sort = event.active;
  }

  deleteRegister(id: number){
    this.municipalityService.deleteMunicipality(id).subscribe(resp => {
      if(resp.result){
        this.alertsService.getShowAlert("Éxito!", resp.message).then(() => this.municipalityService.getAllMunicipalities());
      }
    })

  }

  editRegister(element: Municipality){
    const dialogRef = this.dialog.open(EditRegisterComponent, {
      data: {
        type: 'Municipio',
        data: element
      },
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.municipalityService.getAllMunicipalities();
    })
  }

  ngOnDestroy(): void {
    this.municipalitySubscription.unsubscribe();
  }

}
