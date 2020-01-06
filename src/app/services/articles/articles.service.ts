import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { Article } from '../../model/article';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor() { }

  articles = [
    {
      title: 'Light Up White City',
      date: '18 NOV',
      location: 'Central Avenue',
      img: 'Royals-at-Troubadour.jpg'
    },
    {
      title: 'test-title',
      date: 'test-date',
      location: 'test-location',
      img: 'the-ww-entrance.jpg'
    },
    {
      title: 'test-title',
      date: 'test-date',
      location: 'test-location',
      img: 'Christmas-Decs.JPG'
    }
  ];

  getArticles(): Article[] {
    const result = [];
    this.articles.forEach(e => {
      result.push(
        {
          title: e.title,
          date: e.date,
          location: e.location,
          imagePath: `assets/${e.img}`
        }
      );
    });
    return result;
  }
}
