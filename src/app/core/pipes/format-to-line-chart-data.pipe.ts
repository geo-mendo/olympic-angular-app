import { Pipe, PipeTransform } from '@angular/core';
import {CountryItem, Participation} from "../types/dataType";
import {LineChartData} from "../types/chartTypes";

@Pipe({
  name: 'formatToLineChartData'
})
export class FormatToLineChartDataPipe implements PipeTransform {

  transform(country: CountryItem, ...args: unknown[]): LineChartData[] {
    let data: LineChartData = {
      name: country.country,
      series:country.participations.map( (part: Participation) => ({name:part.year,value:part.medalsCount}))
    };

    return [data];
  }



}
