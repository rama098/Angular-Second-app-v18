import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IClient } from '../model/class/interface/client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClinets(){
    return this.http.get('https://localhost:7151/api/Client');
  }

  AddClient(client:any)
  {
    return this.http.post('https://localhost:7151/api/Client',client);
  }

  DeleteClientById(id:number){
    // return this.http.delete('https://localhost:7151/api/Client?cid=${id}');
      return this.http.delete(`https://localhost:7151/api/Client?cid=${id}`);
  }
}
