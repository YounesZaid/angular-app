import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { EmployesModule } from "./employes/employes.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  imports: [BrowserModule, CoreModule, EmployesModule, SharedModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
