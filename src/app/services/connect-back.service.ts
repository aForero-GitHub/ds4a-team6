import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {Cites} from "../models/cites";

@Injectable({
  providedIn: 'root'
})
export class ConnectBackService {

  constructor(private http: HttpClient) { }

  getCites(): any {
    return this.http.get('https://ds4ateam6-3bdeekglpa-uc.a.run.app/Top3Ciudades');
  }
}
