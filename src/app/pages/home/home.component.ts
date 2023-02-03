import {Component, OnDestroy, OnInit} from '@angular/core';
import {filter, Observable, of, Subscription, tap} from 'rxjs';
import { OlympicService } from 'src/app/core/services/olympic.service';
import {CountryItem} from "../../core/types/dataType";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public countries!: CountryItem[];
  private subscription!: Subscription ;

  constructor(private olympicService: OlympicService) {}

  ngOnInit(): void {
    this.subscription =
      this.olympicService
        .getOlympics()
        .pipe(
          filter(Boolean),
          tap(console.log)
        )
        .subscribe( values => this.countries = values );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
