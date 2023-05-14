import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { developerInterface } from "src/app/shared/types/developer.interface";

@Injectable()
export class ProjectModalService {

    constructor(private http: HttpClient) { }

    getAllDevelopers(): Observable<developerInterface[]> {
        const url = environment.apiUrl + "/developers"
        return this.http.get<developerInterface[]>(url)
    }

    addDeveloperOnProject(data: any) {
        const options = {
            headers: new HttpHeaders().append('withCredentials', 'true')
        }
        const url = environment.apiUrl + "/project_developers"
        return this.http.post(url, data, options)
    }

    removeDeveloperFromProject(project_id: number, developer_id: number) {
        const url = environment.apiUrl + "/project-developers/" + project_id + "/" + developer_id
        return this.http.delete(url)
    }

} 