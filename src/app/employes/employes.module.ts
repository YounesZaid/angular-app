import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EmployesComponent } from "./employes.component";
import { EmployesListComponent } from "./employes-list/employes-list.component";
import { FilterTextboxComponent } from "./employes-list/filter-textbox.component";

@NgModule({
  imports: [CommonModule],
  declarations: [
    EmployesComponent,
    EmployesListComponent,
    FilterTextboxComponent
  ],
  exports: [EmployesComponent]
})
export class EmployesModule {}
