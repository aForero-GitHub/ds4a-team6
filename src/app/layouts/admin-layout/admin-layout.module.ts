import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ModelComponent } from "src/app/pages/model/model.component";
import { NewPredictionComponent } from "../../pages/new-prediction/new-prediction.component";
import { GeneralReportComponent } from "../../pages/general-report/general-report.component";


import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    TypographyComponent,
    ModelComponent,
    NewPredictionComponent,
    GeneralReportComponent
  ]
})
export class AdminLayoutModule {}
