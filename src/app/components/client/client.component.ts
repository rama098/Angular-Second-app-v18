import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IClient } from '../../model/class/interface/client';

import { ClientService } from '../../services/client.service';
import { FormsModule } from '@angular/forms';
import { client } from '../../model/class/client';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clearBtnFlag = false;
  clientList: IClient[] = [];

  constructor(private clientService: ClientService) { }

  clients: client = {
    Cid: 0,
    CName: '',
    CEmail: '',
    CPhone: 0
  }

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.clientService.getAllClinets().subscribe((res: any) => {
      this.clientList = res;

      console.log(res);
    });
  }

  saveClient() {
    this.clientService.AddClient(this.clients).subscribe({
      next: (res: any) => {
        if (res.msg == "saved") {
          alert('Client Saved Successfully!');
        } else if (res.msg == "updated") {
          alert('Client Updated Successfully!');
        }

        this.getClients();

        this.clients = {
          CName: '',
          CEmail: '',
          CPhone: 0,
          Cid: 0
        };
      }
    });
  }

  EditFunc(clients: client) {
    this.clients = clients;
    this.clearBtnFlag = true;
  }

  ClearFun() {
   this.clearBtnFlag=false;

    this.clients = {
      Cid: 0,
      CName: '',
      CEmail: '',
      CPhone: 0
    };

  }


  deleteFunc(id: number) {
    this.clientService.DeleteClientById(id).subscribe((res: any) => {
      if (res.msg == "deleted") {
        alert("Client Deleted Successfully");
      } else if (res.msg == "Client Not Found") {
        alert("Client Not Found");
      }
      else if (res.msg = "Not Valid Data") {
        alert("Not Valid Data");
      }

      this.getClients();
    })
  }
}
