import { Component, OnInit } from '@angular/core';
import { projectInterface } from 'src/app/shared/types/project.interface';
import { ProjectService } from '../../services/project.service';
import { ProjectModalComponent } from 'src/app/shared/modules/project-modal/components/project-modal/project-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { developerInterface } from 'src/app/shared/types/developer.interface';


@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects: projectInterface[] = [];
  searchTerm: string = '';

  constructor(private projectService: ProjectService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllProjects();
   
  }

  getAllProjects(){
    this.projectService.getProjects().subscribe(
      projects => {
        this.projects = projects;
      },
      error => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  get filteredProjects() {
    return this.projects.filter(project =>
      project.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModal(project: any) {
    this.projectService.getDevelopersOnProject(project.id).subscribe(
      developers => {
        const data = {...project, developers}
        const dialogRef = this.dialog.open(ProjectModalComponent, {
          width: '500px',
          data: data
        });
      },
      error => {
        console.error('Error fetching developers on project:', error);
      },
    );     
  }

}
