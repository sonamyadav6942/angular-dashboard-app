import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../../environments/environment.example';

@Component({
  selector: 'app-news-widget',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './news-widget.component.html',
  styleUrl: './news-widget.component.scss'
})
export class NewsWidgetComponent implements OnInit {

  articles: any[] = [];
  loading = false;
  error: string | null = null;


  private apiKey = environment.NEWS_API_KEY;
  private apiUrl = `https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&apiKey=${this.apiKey}`;



  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchNews();
  }

  fetchNews() {
    this.error = null;
    this.loading = true;
    this.articles = [];

    this.http.get(this.apiUrl).subscribe({
      next: (response: any) => {
        this.articles = response.articles.slice(0, 5); // limit to 5
        this.loading = false;
      },
      error: (err) => {
        this.error = this.prettyError(err);
        this.loading = false;
      }
    });
  }

  private prettyError(err: any): string {
    if (err?.status === 401) return 'Invalid News API key.';
    if (err?.status === 429) return 'Too many requests — please try again later.';
    return 'Unable to fetch news right now.';
  }

}
