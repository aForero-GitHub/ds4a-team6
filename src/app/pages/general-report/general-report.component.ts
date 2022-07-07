import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ConnectBackService } from '../../services/connect-back.service';

@Component({
  selector: 'app-general-report',
  templateUrl: './general-report.component.html',
  styleUrls: ['./general-report.component.scss']
})
export class GeneralReportComponent implements OnInit {

  citesList = [];

  constructor(private serviceBack:ConnectBackService) { }

  ngOnInit(){
    this.serviceBack.getCites().subscribe((responce:[])=>{
      this.citesList=responce;
      console.log(this.citesList);
    })
  }

  highcharts = Highcharts;
  chartOptions = {
    chart : {
        plotBorderWidth: null,
        backgroundColor: null,
        borderWidth: 0,
        plotShadow: false,
        margin:0,
    },
    title : {
        text: null
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
          ['Medellin', 80],
          ['Bucamaranga',       20],
          ['Bogota',      130]
        ]
    }]
  };

    chartOptions_risk = {
      chart: {
          type: 'column',
        backgroundColor: null,
      },
      title: {
          text: null
      },
      xAxis:{
          categories: ['IMC','Glucosa','Edad','Colesterol'],
          crosshair: true
      },
      yAxis : {
          className: 'high_color',
          title: {
            text: '% importance'
          }
      },
      plotOptions : {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
      },
      colors: ['#d550d7', '#f2b4e9', '#bb53f4'],
      series: [{
          name: 'Variables Used',
          data: [100,25.33, 96.78, 80.03]
      }]
    };

    chartOptions_time = {
      chart: {
          type: "spline",
          backgroundColor: null
      },
      title: {
          text: null
      },
      xAxis:{
          categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
          title:{
            text:"# patients by gender"
          }
      },
      colors: ['#d550d7', '#f2b4e9'],
      series: [
          {
            name: 'F',
            data: [17100,7300, 7400, 7900, 13400, 13900, 16600,19900, 41800, 38100, 37500, 36000]
          },
          {
            name: 'M',
            data: [12300,5200, 4650, 5100, 8200, 9200, 11300,10700, 12000, 26650, 27980, 28500]
          }
      ]
    };
  }
