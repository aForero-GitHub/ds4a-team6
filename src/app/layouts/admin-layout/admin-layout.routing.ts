import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import {NewPredictionComponent} from "../../pages/new-prediction/new-prediction.component";
import {GeneralReportComponent} from "../../pages/general-report/general-report.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "tables", component: TablesComponent },
  { path: "team-6", component: TypographyComponent },
  { path: "new-prediction", component: NewPredictionComponent },
  { path: "general-report", component: GeneralReportComponent }
];
