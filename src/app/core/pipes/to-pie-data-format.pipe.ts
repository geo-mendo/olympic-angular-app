import { Pipe, PipeTransform } from '@angular/core';
import {CountryItem, Participation} from "../types/dataType";
import {PieChartData} from "../types/chartTypes";

@Pipe({
  name: 'toPieDataFormat'
})
export class ToPieDataFormatPipe implements PipeTransform {

  transform(values: CountryItem[], ...args: unknown[]): PieChartData[] {
    return this.formatJsonDataToPieData(values);
  }

  formatJsonDataToPieData(countriesData: CountryItem[]): PieChartData[]{

    let countriesDataFormatted:PieChartData[] = [];

    countriesData?.forEach((country: CountryItem) => {
      let countryData: PieChartData = {
        name:country.country,
        value: country.participations.reduce( (a: number, b: Participation) => a + b.medalsCount ,0)
      }
      countriesDataFormatted.push(countryData) ;
    })

    return countriesDataFormatted ;
  }

}
