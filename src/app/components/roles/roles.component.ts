import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRoles } from '../../model/class/interface/roles';
import { IApiRes } from '../../model/class/interface/design';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  roleList: IRoles[] = [];

  http = inject(HttpClient);//this is letest


  ngOnInit(): void {
    this.getAllRoles();
  }//life cycle function


  getAllRoles() {
    this.http.get("https://localhost:7151/api/ValuesController1")
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.roleList = res;
        },
        error: (err) => {
          console.error('API error:', err);
        }
      });


  }



}

