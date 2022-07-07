import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/new-prediction",
    title: "New Prediction",
    icon: "icon-heart-2",
    class: ""
  },
  {
    path: "/general-report",
    title: "General Report",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/team-6",
    title: "Team 6",
    icon: "icon-trophy",
    class: ""
  },
  {
    path: "/model",
    title: "Model",
    icon: "icon-graph",
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
