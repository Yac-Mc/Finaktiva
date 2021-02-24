import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { Region } from '../../models/region.model';
import { AlertsService } from '../../services/alerts.service';
import { NewRegisterComponent } from '../../components/new-register/new-register.component';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css', '../municipality/municipality.component.css']
})
export class RegionComponent implements OnInit, OnDestroy {

  private regionSubscription: Subscription;
  totalRecords = 0;
  recordsByPage = 2;
  pageCombo = [1, 2, 5, 10];
  dataSource = new MatTableDataSource<Region>();
  deployColumns = ['code', 'name'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;
  timeout: any = null;
  filterValue = null;

  constructor(private dialog: MatDialog, private alertsService: AlertsService) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewRegisterComponent, {
      data: 'Región',
      width: '550px',
    });

    dialogRef.afterClosed().subscribe(() => {
      // this.municipalityService.getAllMunicipalities();
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
    this.regionSubscription.unsubscribe();
  }

}
