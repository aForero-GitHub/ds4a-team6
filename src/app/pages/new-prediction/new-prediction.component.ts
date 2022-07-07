import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-new-prediction',
  templateUrl: './new-prediction.component.html',
  styleUrls: ['./new-prediction.component.scss']
})
export class NewPredictionComponent implements OnInit {

  risk_diagnostic : string = "MEDIUM";
  certainty : number = 90;

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

  constructor() { }

  ngOnInit(): void {
  }

}
