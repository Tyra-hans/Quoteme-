import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
     new  Quote(1, 'Sometimes you don’t have to use many words to get your point across.', '— unknown', new Date(2018, 3, 14), 0),
     new  Quote(2, 'The only joy in the world is to begin.', '— Cesare Pavese', new Date(2019, 2, 14), 0),
     new  Quote(3, 'What you do not want done to yourself, do not do to others.', '— Confucius', new Date(2010, 3, 17), 0),
     new  Quote(4, 'Happiness is not something ready-made. It comes from your own actions.', '— Dalai Lama', new Date(2019, 3, 4), 0),
     new  Quote(5, 'To be happy, we must not be too concerned with others.', '— Albert Camus', new Date(2018, 7, 12), 0),
     new  Quote(6, 'Happiness depends upon ourselves.', '— Aristotle', new Date(2019, 5, 14), 0)
  ];
toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  deleteQuote(isComplete, index) {
    if (isComplete) {
      const toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(quote) {
    const quoteLength = this.quotes.length;

    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }


constructor() { }

ngOnInit() {
  }

}
