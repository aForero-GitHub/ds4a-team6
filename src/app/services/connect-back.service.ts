import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Diagnostic } from '../models/diagnotic';

@Injectable({
  providedIn: 'root'
})
export class ConnectBackService {

  constructor(private http: HttpClient) { }

  getCites(): any {
    return this.http.get('https://ds4ateam6-3bdeekglpa-uc.a.run.app/Top3Ciudades');
  }

  getDiagnistics( paramsDiag: Diagnostic): any {
    return this.http.get('https://ds4ateam6-3bdeekglpa-uc.a.run.app/PredictRF',{
      params:{
        Genero:paramsDiag.Genero,
        Edad:paramsDiag.Edad,
        IMC:paramsDiag.IMC,
        Glucosa:paramsDiag.Glucosa,
        Colesterol:paramsDiag.Colesterol
      }
    });
  }
}
