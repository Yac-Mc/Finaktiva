import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseAPI } from '../models/response-api.model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllRegions(){
    return this.http.get<ResponseAPI>(`${this.baseUrl}/region`);
  }
}
