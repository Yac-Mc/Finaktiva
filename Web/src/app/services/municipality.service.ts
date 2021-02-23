import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseAPI } from '../models/response-api.model';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllMunicipalities(){
    return this.http.get<ResponseAPI>(`${this.baseUrl}/municipality`);
  }
}
