import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote = [
    {id: 1, name: 'When you cant find the sunshine, be the sunshine'},
    {id: 2, name: 'The grass is greener where you water it'},
    {id: 3, name: 'Wherever life plants you bloom with grace'},
    {id: 4, name: 'Learn from yesterday,live for today, hope for tomorrow'},
    {id: 5, name: 'Take time to do what makes your soul happy'},
    {id: 6, name: 'The sun is a daily reminder that we too can rise from the darkness and shine our own light'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
