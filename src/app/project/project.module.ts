import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProjectListComponent } from './component/project-list/project-list.component';
import { FormsModule } from "@angular/forms";
import { ProjectService } from "./services/project.service";
import { projectModalModule } from "../shared/modules/project-modal/project-modal.module";
import { MaterialModule } from "../material.module";

const routes = [{ path: 'projects', component: ProjectListComponent }]

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild(routes),
        FormsModule,
        projectModalModule,
        MaterialModule
    ],
    declarations: [
        ProjectListComponent
    ],
    providers: [
        ProjectService
    ]
})
export class ProjectModule { }
