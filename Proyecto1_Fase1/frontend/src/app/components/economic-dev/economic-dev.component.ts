import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexFill, ApexGrid, ApexLegend, ApexPlotOptions, ApexStroke, ApexTitleSubtitle, ApexTooltip, ApexXAxis, ApexYAxis, ChartComponent } from 'ng-apexcharts';
import { ConexionService } from 'src/app/services/conexion.service';

export interface Moneda{
  nombre: String,
  valor: Number[]
}

export interface Ucrontime{
  valor: String,
  fecha : String
}


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

  meses:String[] = [
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
  
  constructor(private Connect : ConexionService) { 
   
  }

  ngOnInit(): void {
    this.GRAFICA1();
    this.GRAFICA2();
    this.Connect.getData('/DesarrolloEconomico').subscribe(
      res => {
        var tmpjson =JSON.parse(JSON.stringify(res))
       
        var lista_monedas:Moneda[] = []
        for(let i in tmpjson){
          var look = lista_monedas.find(t => t.nombre == tmpjson[i].nombre);
          if(!(look == undefined)){
            look.valor[parseInt(tmpjson[i].fecha) - 1] = parseFloat(tmpjson[i].valor)
          }
          else{
            var tmp1 = {
              nombre: tmpjson[i].nombre,
              valor: [0,0,0,0,0,0,0,0,0],
            }
            tmp1.valor[parseInt(tmpjson[i].fecha) - 1] = parseFloat(tmpjson[i].valor)
            lista_monedas.push(tmp1)
          }
          
        }

        var lista_general = [];
        var lista_ucroncoin = [];
        // AGREGAR DATOS A LA TABLA
        for(let i in lista_monedas){
          var datass:any = {
            name: lista_monedas[i].nombre,
            data: lista_monedas[i].valor
          };

          var prome:any = 0.0;
          for(var j in lista_monedas[i].valor){
            prome += lista_monedas[i].valor[j];
          }
          //console.log('promedio -> ', lista_monedas[i].valor.length)
          var ucron:any = {
            name: lista_monedas[i].nombre,
            promedio: (prome/lista_monedas[i].valor.length).toFixed(4)
          };

          lista_general.push(datass);
          lista_ucroncoin.push(ucron);
        };
        this.G1_series = lista_general;

        
        var lista_aux = []
        var categorias = []
        //console.log(lista_ucroncoin)
        for(let k in lista_ucroncoin){
          lista_aux.push(lista_ucroncoin[k].promedio)
          categorias.push(lista_ucroncoin[k].name)
        }
        
        this.G2_series = [
          {
            name: "",
            data: lista_aux
          }
        ];

        this.G2_xaxis = {
          title: {
            text: "MONEDA"
          },
          categories: categorias
        };

        //console.log(this.G2_series)
        

      }
    )
    
    
    
  }

  GRAFICA1() {
    this.G1_series = [
      
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
        "Sep",
        "Oct",
        "Nov",
        "Dic"
      ]
    };

    this.G1_title = {
      text: "UCRONCOIN A TRAVEZ DEL TIEMPO POR MONEDA",
      align: "left"
    };

  }


  GRAFICA2() {
    this.G2_series = [
      {
        name: "Ucron",
        data: []
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
      ]
    };
    this.G2_yaxis = {
      title: {
        text: "UCRONCOIN"
      }
    };
    this.G2_fill = {
      opacity: 1
    };
    this.G2_tooltip = {
      y: {
        formatter: function(val) {
          return "1 UCRONCOIN = " + val + "";
        }
      }
    }
    this.G2_title = {
      text: "GRAFICA DE PROMEDIO DE UCRONCOIN POR MONEDA",
      align: "left"
    };
  };
  
}
