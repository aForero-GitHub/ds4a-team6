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
          ['MEDELLIN', 4373],
          ['CALI',4939],
          ['PALMIRA',2271]
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
          categories:[9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101]
      },
      yAxis: {
          title:{
            text:"# patients by gender"
          }
      },
      colors: ['#d550d7', '#f2b4e9'],
      series: [
          {
            name: 'Pacientes',
            data: [9,11,13,15,17,19,21,23,25,80,85,99,105,120,150,170,210,320,350,360,430,460,500,550,580,630,680,700,790,900,850,820,800,700,680,640,600,620,530,480,200,151,100,95,80,20,3]
          }
      ]
    };
  }
