import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote = [
    {id: 1, name: 'When you cant find the sunshine, be the sunshine', description: 'Waldor Fratt'},
    {id: 2, name: 'The grass is greener where you water it', description: 'Partrick Star'},
    {id: 3, name: 'Wherever life plants you bloom with grace', description: 'Peter Griffin'},
    {id: 4, name: 'Learn from yesterday,live for today, hope for tomorrow', description: 'Glenn Quagmire'},
    {id: 5, name: 'Take time to do what makes your soul happy', description: 'Cleveland'},
    {id: 6, name: 'The sun is a daily reminder that we too can rise from the darkness and shine our own light', description: 'Pastor Joe'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
