import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiRes } from '../model/class/interface/design';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAllDesignations():Observable<IApiRes>
  {
  return this.http.get<IApiRes>("https://localhost:7151/api/ValuesController1/Design");
  }
}
