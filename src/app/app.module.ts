import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsComponent } from './pages/details/details.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";
import { HomePieChartComponent } from './pages/home-pie-chart/home-pie-chart.component';
import { ToPieDataFormatPipe } from './core/pipes/to-pie-data-format.pipe';
import { DetailsLineChartComponent } from './pages/details-line-chart/details-line-chart.component';
import { FormatToLineChartDataPipe } from './core/pipes/format-to-line-chart-data.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent, DetailsComponent, HomePieChartComponent, ToPieDataFormatPipe, DetailsLineChartComponent, FormatToLineChartDataPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,NgxChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
