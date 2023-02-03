import {Component, Input} from '@angular/core';
import {Color, ScaleType} from "@swimlane/ngx-charts";
import {LineChartData} from "../../core/types/chartTypes";

@Component({
  selector: 'app-details-line-chart',
  templateUrl: './details-line-chart.component.html',
  styleUrls: ['./details-line-chart.component.scss']
})
export class DetailsLineChartComponent {
  @Input()
  countryDataFormatted!: LineChartData[] ;
  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Numbers of medals';
  timeline: boolean = true;
  colorScheme: Color = {
    name:"cool",
    selectable:true,
    group: ScaleType.Quantile,
    domain:["rgb(168, 56, 93)","rgb(122, 163, 229)","rgb(162, 126, 168)","rgb(170, 227, 245)","rgb(173, 205, 237)","rgb(169, 89, 99)"]
  } ;

}
