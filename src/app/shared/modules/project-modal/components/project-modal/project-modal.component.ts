import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { developerInterface } from 'src/app/shared/types/developer.interface';
import { ProjectModalService } from '../service/project-modal.service';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent implements OnInit {

  newControl = new FormControl<string | developerInterface>('');
  filteredOptions!: Observable<developerInterface[]>;
  options: developerInterface[] = [];

  constructor(public dialogRef: MatDialogRef<ProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private projectModalService: ProjectModalService) {   }


  ngOnInit(): void {
    this.getAllDevelopers();
    this.filteredOptionsFn();
  }

  filteredOptionsFn(){
    this.filteredOptions = this.newControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: developerInterface): string {
    return user && user.name ? user.name : '';
  }
  
  private _filter(name: string): developerInterface[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  getAllDevelopers(){
    this.projectModalService.getAllDevelopers().subscribe(
      developers => {
        this.options = developers;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  addDeveloperOnProject(developer: developerInterface){
    let data = {
      project_id: this.data.id,
      developer_id: developer.id
    }
    this.projectModalService.addDeveloperOnProject(data).subscribe(
      success => {
        this.data.developers.push(success)       
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

  removeDeveloper(developer: any){
    this.projectModalService.removeDeveloperFromProject(this.data.id, developer.id).subscribe(
      success => {
        console.log(success);
        this.data.developers = this.data.developers.filter((item: developerInterface) => item.id !== developer.id)   
      },
      error => {
        console.error('Error:', error);
      }
    );

  }



}
