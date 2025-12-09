import { Component,inject,OnInit } from '@angular/core';
import { Idesign } from '../../model/class/interface/design';
import {IApiRes} from '../../model/class/interface/design';
import { MasterService } from '../../services/master.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  isLoader:boolean=true;

  masterServ=inject(MasterService);

 designationsList:Idesign[]=[];

  ngOnInit(): void {
    this.masterServ.getAllDesignations().subscribe((res:IApiRes)=>{
      this.designationsList=res.Data;
      this.isLoader=false;
    })

  }


}
