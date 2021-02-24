import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { MunicipalityService } from '../../services/municipality.service';
import { AlertsService } from '../../services/alerts.service';

import { Municipality } from 'src/app/models/municipality.model';
import { NewRegisterComponent } from '../../components/new-register/new-register.component';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit, OnDestroy {

  private municipalitySubscription: Subscription;
  totalRecords = 0;
  recordsByPage = 2;
  pageCombo = [1, 2, 5, 10];
  dataSource = new MatTableDataSource<Municipality>();
  deployColumns = ['code', 'name', 'regionCode', 'state'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;
  timeout: any = null;
  filterValue = null;

  constructor(private municipalityService: MunicipalityService, private dialog: MatDialog, private alertsService: AlertsService) { }

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
  }

  orderColumn(event: any){
    this.sort = event.active;
  }

  eventPager(event: PageEvent){
  }

  ngOnDestroy(): void {
    this.municipalitySubscription.unsubscribe();
  }

}
