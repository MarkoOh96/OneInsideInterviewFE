import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { projectInterface } from "src/app/shared/types/project.interface";
import { developerInterface } from "src/app/shared/types/developer.interface";

@Injectable()
export class ProjectService {

    constructor(private http: HttpClient){}

    getProjects(): Observable<projectInterface[]>{
        const url = environment.apiUrl + "/projects"
        return this.http.get<projectInterface[]>(url)
    }

    getDevelopersOnProject(projectID: number): Observable<developerInterface[]>{
        const url = environment.apiUrl + "/developers_by_project/" + projectID
        return this.http.get<developerInterface[]>(url)
    }

} 