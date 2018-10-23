import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { EmployesModule } from "./employes/employes.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [BrowserModule, EmployesModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
