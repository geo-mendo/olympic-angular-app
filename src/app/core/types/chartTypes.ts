import {PieData} from "@swimlane/ngx-charts";

export type PieChartData = {
  name: string,
  value: number
}

export type LineChartData = {
  name: string,
  series: {
    name:number,
    value:number
  }[]
}
