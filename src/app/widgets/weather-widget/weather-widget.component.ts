import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment.example';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss'
})
export class WeatherWidgetComponent implements OnInit {

  // Change defaults as you like
  city = '';        // default Indian city
  country = 'IN';         // India country code
  pincode = '';           // optional: e.g. "110001" (New Delhi GPO)

  weatherData: any = null;
  loading = false;
  error: string | null = null;

  // private apiKey = 'c454c62bdfa4c46c80dd7c8e5c9870cb';
  private apiKey = environment.OPENWEATHER_API_KEY;
  private base = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {

  }

  fetchByCity() {
    this.error = null; this.loading = true; this.weatherData = null;
    const url = `${this.base}/weather?q=${encodeURIComponent(this.city)},${this.country}&units=metric&appid=${this.apiKey}`;
    this.http.get(url).subscribe({
      next: (data) => { this.weatherData = data; this.loading = false; },
      error: (err) => { this.error = this.prettyError(err); this.loading = false; }
    });
  }

  fetchByPincode() {
    if (!this.pincode) return;
    this.error = null; this.loading = true; this.weatherData = null;
    const url = `${this.base}/weather?zip=${this.pincode},${this.country}&units=metric&appid=${this.apiKey}`;
    this.http.get(url).subscribe({
      next: (data) => { this.weatherData = data; this.loading = false; },
      error: (err) => { this.error = this.prettyError(err); this.loading = false; }
    });
  }

  private prettyError(err: any): string {
    if (err?.status === 401) return 'Invalid API key. Please check your key.';
    if (err?.status === 404) return 'City or PIN not found.';
    return 'Unable to fetch weather right now.';
  }


  // Helpers for UI
  iconUrl(code: string) {
    return `https://openweathermap.org/img/wn/${code}@2x.png`;
  }

}
