import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProjectModalComponent } from "./components/project-modal/project-modal.component";
import { MaterialModule } from "src/app/material.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProjectModalService } from "./components/service/project-modal.service";


@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule, 
        ReactiveFormsModule  
    ],
    declarations: [
        ProjectModalComponent
    ],
    exports: [
        ProjectModalComponent
    ],
    providers: [
        ProjectModalService
    ]
})
export class projectModalModule{}