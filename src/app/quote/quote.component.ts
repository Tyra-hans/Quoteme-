import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote [] = [
    new Quote (1, 'When you cant find the sunshine, be the sunshine', 'Waldor Fratt'),
    new Quote (2, 'The grass is greener where you water it', 'Partrick Star'),
    new Quote (3, 'Wherever life plants you bloom with grace', 'Peter Griffin'),
    new Quote (4, 'Learn from yesterday,live for today, hope for tomorrow', 'Glenn Quagmire'),
    new Quote (5, 'Take time to do what makes your soul happy', 'Cleveland'),
    new Quote (6, 'The sun is a daily reminder that we too can rise from the darkness and shine our own light', 'Pastor Joe')
  ];
  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote){
    const quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }


  constructor() { }

  ngOnInit() {
  }

}
