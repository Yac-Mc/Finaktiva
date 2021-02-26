import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { Region } from '../../models/region.model';
import { AlertsService } from '../../services/alerts.service';
import { NewRegisterComponent } from '../../components/new-register/new-register.component';
import { RegionService } from '../../services/region.service';
import { EditRegisterComponent } from '../../components/edit-register/edit-register.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css', '../municipality/municipality.component.css']
})
export class RegionComponent implements OnInit, OnDestroy {

  private regionSubscription: Subscription;
  totalRecords = 0;
  recordsByPage = 5;
  pageCombo = [5, 10, 20, 30];
  dataSource = new MatTableDataSource<Region>();
  deployColumns = ['code', 'name', 'edit', 'delete'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private dialog: MatDialog, private alertsService: AlertsService,
              private regionService: RegionService) { }

  ngOnInit(): void {
    this.alertsService.getShowLoading("Cargando...");
    this.regionService.getAllRegions();
    this.regionSubscription = this.regionService.getCurrentListener().subscribe(resp => {
      if (resp.isSuccessful) {
        this.dataSource = new MatTableDataSource<Region>(resp.result);
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
      data: 'Región',
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.regionService.getAllRegions();
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
    this.alertsService.getShowAlert("¿Esta seguro?", "Al eliminar una región automaticamente eliminara los municipios asociados", 'question', true).then(() => {
      this.regionService.deleteRegion(id).subscribe(resp => {
        if(resp.result){
          this.alertsService.getShowAlert("Éxito!", resp.message).then(() => this.regionService.getAllRegions());
        }
      })
    })
  }

  editRegister(element: Region){
    const dialogRef = this.dialog.open(EditRegisterComponent, {
      data: {
        type: 'Region',
        data: element
      },
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.regionService.getAllRegions();
    })
  }

  ngOnDestroy(): void {
    this.regionSubscription.unsubscribe();
  }

}
