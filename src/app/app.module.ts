import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';
import {NewPredictionComponent} from "src/app/pages/new-prediction/new-prediction.component";
import {GeneralReportComponent} from "src/app/pages/general-report/general-report.component";
import { ModelComponent } from "src/app/pages/model/model.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    ChartsModule,
    HighchartsChartModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  declarations: [AppComponent, AdminLayoutComponent, NewPredictionComponent, GeneralReportComponent, ModelComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
