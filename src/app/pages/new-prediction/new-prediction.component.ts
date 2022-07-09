import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConnectBackService } from '../../services/connect-back.service';
import { Diagnostic } from 'src/app/models/diagnotic';

@Component({
  selector: 'app-new-prediction',
  templateUrl: './new-prediction.component.html',
  styleUrls: ['./new-prediction.component.scss']
})
export class NewPredictionComponent implements OnInit {

  risk_diagnostic : string = "--";
  certainty : number = 0;
  name: string ;
  form: FormGroup;

  names = "";

  highcharts = Highcharts;
    chartOptions = {
      chart : {
          plotBorderWidth: null,
          backgroundColor: null,
          borderWidth: 0,
          plotShadow: false,
          verticalAlign: "top"
      },
      title : {
          text: null
      },
      tooltip : {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions : {
          pie: {
            shadow: false,
            center: ['50%', '50%'],
            size:'45%',
            innerSize: '20%'
          }
      },
      colors: ['#d550d7', '#f2b4e9', '#bb53f4'],
      series : [{
          type: 'pie',
          data: [
            ['Age',10],
            ['Gender',20],
            ['IMC',30]
          ]
      }]
    };

  constructor(private serviceBack:ConnectBackService) { }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.form = new FormGroup({
      'nombre': new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z]{2,10}')]),
      'edad': new FormControl('',[Validators.required, Validators.pattern('[0-9]{2,3}')]),
      'imc': new FormControl('',[Validators.required, Validators.pattern('[0-9]{2,3}')]),
      'glucosa': new FormControl('',[Validators.required, Validators.pattern('[0-9]{2,3}')]),
      'genero': new FormControl('',[Validators.required, Validators.pattern('[A-Z]{1,1}')]),
      'colesterol': new FormControl('',[Validators.required, Validators.pattern('[0-9]{2,3}')])
    });
  }
  generateDiagnostic(){
    let predict = new Diagnostic();
    predict.Genero = this.form.value['genero'];
    predict.Edad = this.form.value['edad'];
    predict.IMC = this.form.value['imc'];
    predict.Glucosa = this.form.value['glucosa'];
    predict.Colesterol = this.form.value['colesterol'];

    this.serviceBack.getDiagnistics(predict).subscribe((responce)=>{
      this.certainty=Number((responce[0][1]*100).toFixed(2));
      if (this.certainty>=81 && this.certainty<=100){

        this.risk_diagnostic="VERY HIGH";

      }else if (this.certainty>=61 && this.certainty<=80){

        this.risk_diagnostic="HIGH";
      }
      else if (this.certainty>=41 && this.certainty<=60){

        this.risk_diagnostic="MEDIUM";

      }
      else if (this.certainty>=0 && this.certainty<=40){
        this.risk_diagnostic="LOW";
      }
      else{
        this.risk_diagnostic="UNKNOWN";
      }
    })
  }

}
