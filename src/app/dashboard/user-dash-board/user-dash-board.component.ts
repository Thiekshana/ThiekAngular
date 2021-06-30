import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dash-board',
  templateUrl: './user-dash-board.component.html',
  styleUrls: ['./user-dash-board.component.css']
})
export class UserDashBoardComponent implements OnInit {

  chartOption = {
    title: {
      text: 'Stacked area chart'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data:['Email marketing','Affiliate Advertising','Video Advertising','direct interview','search engine']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['on Monday','on Tuesday','on Wednesday','Thursday','Friday','on Saturday','Sunday']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'Email marketing',
        type:'line',
        stack: 'Total',
        areaStyle: {normal: {}},
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'Affiliate Advertising',
        type:'line',
        stack: 'Total',
        areaStyle: {normal: {}},
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      {
        name:'Video Advertising',
        type:'line',
        stack: 'Total',
        areaStyle: {normal: {}},
        data:[150, 232, 201, 154, 190, 330, 410]
      },
      {
        name:'direct interview',
        type:'line',
        stack: 'Total',
        areaStyle: {normal: {}},
        data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
        name:'search engine',
        type:'line',
        stack: 'Total',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: {normal: {}},
        data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  }
  constructor() { }

  

  ngOnInit() {
   
  }

}
