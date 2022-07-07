import { Routes } from "@angular/router";

import { TypographyComponent } from "../../pages/typography/typography.component";
import {NewPredictionComponent} from "../../pages/new-prediction/new-prediction.component";
import {GeneralReportComponent} from "../../pages/general-report/general-report.component";
import { ModelComponent } from "src/app/pages/model/model.component";

export const AdminLayoutRoutes: Routes = [
  { path: "model", component: ModelComponent },
  { path: "team-6", component: TypographyComponent },
  { path: "new-prediction", component: NewPredictionComponent },
  { path: "general-report", component: GeneralReportComponent }
];
