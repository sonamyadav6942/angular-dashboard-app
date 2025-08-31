import { Component } from '@angular/core';
import { ClockWidgetComponent } from '../widgets/clock-widget/clock-widget.component';
import { WeatherWidgetComponent } from "../widgets/weather-widget/weather-widget.component";
import { NewsWidgetComponent } from '../widgets/news-widget/news-widget.component';
import { QuoteWidgetComponent } from "../widgets/quote-widget/quote-widget.component";
import { TodoWidgetComponent } from "../widgets/todo-widget/todo-widget.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ClockWidgetComponent, WeatherWidgetComponent, NewsWidgetComponent, QuoteWidgetComponent, TodoWidgetComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
