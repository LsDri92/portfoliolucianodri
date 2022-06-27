import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: skills[]=[];

  constructor(private skillsService: SkillsService) { }

  ngOnInit(): void {
    this.getSkills();
  }
  public getSkills():void {
    this.skillsService.getSkills().subscribe({
      next:(Response: skills[]) => {
        this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
      }
}
