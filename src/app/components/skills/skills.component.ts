import { Component, OnInit } from '@angular/core';
import { skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: skills = new skills ("","", "")

  constructor(public skillService: SkillsService) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => {this.skills = data})
  }

}
