import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseAPI } from '../models/response-api.model';
import { Municipality } from 'src/app/models/municipality.model';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  subject = new Subject<ResponseAPI>();
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getAllMunicipalities(){
    this.http.get<ResponseAPI>(`${this.baseUrl}/municipality`).subscribe(resp =>{
      this.subject.next(resp);
    });
  }

  deleteMunicipality(id: number){
    return this.http.delete<ResponseAPI>(`${this.baseUrl}/municipality/${id}`);
  }

  getCurrentListener(){
    return this.subject.asObservable();
  }

  insertMunicipality(municipality: Municipality){
    return this.http.post<ResponseAPI>(`${this.baseUrl}/municipality/insert`, municipality);
  }

  editMunicipality(municipality: Municipality, id: number){
    return this.http.put<ResponseAPI>(`${this.baseUrl}/municipality/${id}`, municipality);
  }
}
