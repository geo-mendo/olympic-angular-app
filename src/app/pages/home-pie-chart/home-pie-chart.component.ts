import {Component, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {Color, PieChartComponent, ScaleType} from "@swimlane/ngx-charts";
import {PieChartData} from "../../core/types/chartTypes";
import {Participation} from "../../core/types/dataType";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-pie-chart',
  templateUrl: './home-pie-chart.component.html',
  styleUrls: ['./home-pie-chart.component.scss']
})
export class HomePieChartComponent {
  @Input()
  pieData!: PieChartData[];
  // options
  showLegend: boolean = false;
  showLabels: boolean = true;
  colorScheme: Color = {
    name:"cool",
    selectable:true,
    group: ScaleType.Quantile,
    domain:["rgb(168, 56, 93)","rgb(122, 163, 229)","rgb(162, 126, 168)","rgb(170, 227, 245)","rgb(173, 205, 237)","rgb(169, 89, 99)"]
  } ;

  constructor(private router:Router) {}

  onSelect(data:PieChartData): void {
    this.router.navigateByUrl(`/details/${data.name.toLowerCase()}`);
  }


}
