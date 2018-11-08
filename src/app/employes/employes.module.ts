import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { EmployesComponent } from "./employes.component";
import { EmployesListComponent } from "./employes-list/employes-list.component";
import { FilterTextboxComponent } from "./employes-list/filter-textbox.component";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";
import { EmployesRoutingModule } from "./employes-routing.module";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    FormsModule,
    EmployesRoutingModule
  ],
  declarations: [
    EmployesComponent,
    EmployesListComponent,
    FilterTextboxComponent
  ],
  exports: [EmployesComponent]
})
export class EmployesModule {}
