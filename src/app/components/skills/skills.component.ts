import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: skills[]=[];
  public editSkills: skills | undefined;
  public deleteSkills: skills | undefined;


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

      public onOpenModal(mode:string, skills?: skills):void{
        const container=document.getElementById('main-container');
        const button=document.createElement('button');
        button.style.display='none';
        button.setAttribute('data-toggle', 'modal');
        if(mode==='add') {
          button.setAttribute('data-target', '#addSkillsModal')
        } else if(mode==='delete'){
          this.deleteSkills=skills;
          button.setAttribute('data-target', '#deleteSkillsModal')
        }else if(mode==='edit'){
          this.editSkills=skills;
          button.setAttribute('data-target', '#editSkillsModal')
        }
        container?.appendChild(button);
        button.click();
      }

      public onAddSkill(addForm: NgForm){
        document.getElementById('add-skills-form')?.click();
        this.skillsService.addSkills(addForm.value).subscribe({
          next: (response:skills) =>{
            console.log(response);
              this.getSkills();
              addForm.reset();
          },
          error:(error:HttpErrorResponse)=>{
            alert(error.message);
            addForm.reset();
          }
        });
      }

      public onEditSkill(skills: skills){
        document.getElementById('add-skills-form')?.click();
        this.skillsService.editSkills(skills).subscribe({
          next: (response:skills) =>{
            console.log(response);
              this.getSkills();
          },
          error:(error:HttpErrorResponse)=>{
            alert(error.message);
        }
      })
}
public onDeleteSkill(id: number ):void{

  this.skillsService.deleteSkills(id).subscribe({
    next: (response:void) =>{
      console.log(response);
        this.getSkills();
    },
    error:(error:HttpErrorResponse)=>{
      alert(error.message);
  }
})
}
}