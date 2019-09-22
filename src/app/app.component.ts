import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote-me';

    quotes: string[];

    constructor() {
      this.quotes = ['When you cant find the sunshine, be the sunshine',
      'The grass is greener where you water it',
       'Wherever life plants you bloom with grace'];
    }
  }
