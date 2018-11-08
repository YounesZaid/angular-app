import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/employes" },
  { path: "**", pathMatch: "full", redirectTo: "/employes" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
