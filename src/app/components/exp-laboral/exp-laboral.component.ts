import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { exp_laboral } from 'src/app/model/exp-laboral.model';
import { ExpLaboralService } from 'src/app/service/exp-laboral.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})
export class ExpLaboralComponent implements OnInit {
 
  public exp_laboral: exp_laboral[]=[];
 
  constructor() { }

  ngOnInit(): void {
    this.getExpe();
  }
  public getExpe():void {
   
      }
 
 
}
