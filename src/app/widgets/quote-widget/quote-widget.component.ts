import { Component } from '@angular/core';

@Component({
  selector: 'app-quote-widget',
  standalone: true,
  imports: [],
  templateUrl: './quote-widget.component.html',
  styleUrl: './quote-widget.component.scss'
})
export class QuoteWidgetComponent {

  quote: string = '';
  author: string = '';

  ngOnInit() {
    this.loadRandomQuote();
  }

  private loadRandomQuote() {
    const quotes = [
      { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
      { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
      { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
      { text: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
      { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" }
    ];

    const random = quotes[Math.floor(Math.random() * quotes.length)];
    this.quote = random.text;
    this.author = random.author;
  }

}
