import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { Municipality } from 'src/app/models/municipality.model';
import { MunicipalityService } from '../../services/municipality.service';

@Component({
  selector: 'app-municipality',
  templateUrl: './municipality.component.html',
  styleUrls: ['./municipality.component.css']
})
export class MunicipalityComponent implements OnInit {

  totalRecords = 0;
  recordsByPage = 2;
  pageCombo = [1, 2, 5, 10];
  dataSource = new MatTableDataSource<Municipality>();
  deployColumns = ['code', 'name', 'state'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) pagination: MatPaginator;
  timeout: any = null;
  filterValue = null;


  constructor(private municipalityService: MunicipalityService) { }
  // getAllMunicipalities

  ngOnInit(): void {
    this.municipalityService.getAllMunicipalities().subscribe(resp => {
      if (resp.isSuccessful) {
        this.dataSource = new MatTableDataSource<Municipality>(resp.result);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.pagination;
        this.totalRecords = resp.result.length;
      }
    });
  }

  openDialog() {
  }

  filter(event: any) {
  }

  orderColumn(event: any){
    this.sort = event.active;
  }

  eventPager(event: PageEvent){
  }

}
