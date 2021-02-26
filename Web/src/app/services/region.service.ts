import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseAPI } from '../models/response-api.model';
import { Region } from '../models/region.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  subject = new Subject<ResponseAPI>();
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllRegions(){
    this.http.get<ResponseAPI>(`${this.baseUrl}/region`).subscribe(resp =>{
      this.subject.next(resp);
    });
  }

  deleteRegion(id: number){
    return this.http.delete<ResponseAPI>(`${this.baseUrl}/region/${id}`);
  }

  getCurrentListener(){
    return this.subject.asObservable();
  }

  insertRegion(region: Region){
    return this.http.post<ResponseAPI>(`${this.baseUrl}/region/insert`, region);
  }

  editRegion(region: Region, id: number){
    return this.http.put<ResponseAPI>(`${this.baseUrl}/region/${id}`, region);
  }
}
