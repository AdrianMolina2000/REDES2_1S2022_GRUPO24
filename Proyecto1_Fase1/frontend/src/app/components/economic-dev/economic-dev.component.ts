import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { ConexionService } from 'src/app/services/conexion.service';




@Component({
  selector: 'app-economic-dev',
  templateUrl: './economic-dev.component.html',
  styleUrls: ['./economic-dev.component.css']
})
export class EconomicDevComponent implements OnInit {

  G1_series: ApexAxisChartSeries;
  G1_charts: ApexChart;
  G1_xaxis: ApexXAxis;
  G1_dataLabels: ApexDataLabels;
  G1_grid: ApexGrid;
  G1_stroke: ApexStroke;
  G1_title: ApexTitleSubtitle;


  G2_series: ApexAxisChartSeries;
  G2_chart: ApexChart;
  G2_dataLabels: ApexDataLabels;
  G2_plotOptions: ApexPlotOptions;
  G2_yaxis: ApexYAxis;
  G2_xaxis: ApexXAxis;
  G2_fill: ApexFill;
  G2_tooltip: ApexTooltip;
  G2_stroke: ApexStroke;
  G2_legend: ApexLegend;
  G2_title: ApexTitleSubtitle;
  
  constructor(private Connect : ConexionService) { 
   
  }

  ngOnInit(): void {

    this.Connect.getData('/DesarrolloEconomico').subscribe(
      res => {
        var tmpjson =JSON.parse(JSON.stringify(res))
        for(let i in tmpjson){

        }
      }
    )



    this.GRAFICA1();
    this.GRAFICA2();
  }

  GRAFICA1() {
    this.G1_series = [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }
    ];

    this.G1_charts = {
      height: 350,
      type: "line",
      zoom: {
        enabled: false
      }
    };

    this.G1_dataLabels = {
      enabled: false
    };

    this.G1_stroke = {
      curve: "straight"
    };

    

    this.G1_grid = {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    };

    this.G1_xaxis = {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"
      ]
    };

    this.G1_title = {
      text: "GRAFICA 1",
      align: "left"
    };

  }


  GRAFICA2() {
    this.G2_series = [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }
    ];
    this.G2_chart= {
      type: "bar",
      height: 350
    };
    this.G2_plotOptions = {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      }
    };
    this.G2_dataLabels = {
      enabled: false
    };
    this.G2_stroke = {
      show: true,
      width: 2,
      colors: ["transparent"]
    };
    this.G2_xaxis = {
      title: {
        text: "XAXIS"
      },
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct"
      ]
    };
    this.G2_yaxis = {
      title: {
        text: "YXIS"
      }
    };
    this.G2_fill = {
      opacity: 1
    };
    this.G2_tooltip = {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
        }
      }
    }
    this.G2_title = {
      text: "GRAFICA 2",
      align: "left"
    };
  };
  
}
