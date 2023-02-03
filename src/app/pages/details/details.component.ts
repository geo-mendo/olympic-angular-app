import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {CountryItem, Participation} from "../../core/types/dataType";
import {OlympicService} from "../../core/services/olympic.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  country!: CountryItem ;
  subscription!: Subscription ;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private joService: OlympicService
  ) { }

  ngOnInit(): void {
    this.subscription =
      this.joService
        .getCountryByName(this.route.snapshot.params["countryName"])
        .subscribe( (country: CountryItem) => this.country = country);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getTotalMedalsCount(participation:Participation[]): number {
    return this.sumFromArrayOnKey(participation,"medalsCount")
  }

  getTotalAthleteCount(participation:Participation[]): number {
    return this.sumFromArrayOnKey(participation,"athleteCount")
  }

  sumFromArrayOnKey(array: any[], key: string): number {
    return array.reduce((a: number, b: any) => a + b[key], 0) as number ;
  }

  onReturnToHome(){
    this.router.navigateByUrl('');
  }

}
