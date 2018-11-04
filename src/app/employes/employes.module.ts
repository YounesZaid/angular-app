import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployesComponent } from "./employes.component";
import { EmployesListComponent } from "./employes-list/employes-list.component";
import { FilterTextboxComponent } from "./employes-list/filter-textbox.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    EmployesComponent,
    EmployesListComponent,
    FilterTextboxComponent
  ],
  exports: [EmployesComponent]
})
export class EmployesModule {}
