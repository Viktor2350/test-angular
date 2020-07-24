import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let answer;
const url =
  'http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=c28ec9b0a8504b3897a5de03d03525df';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent {
  titles: any;
  response: any;
  articles: any;
  urlToImage: any;
  arrayNews: any;
  public page: number;
  public collectionSize: number;
  searchN = '';

  constructor(private http: HttpClient) {}

  getNews() {
    this.http.get(url).subscribe((response) => {
      answer = this.response = response;
      let arrayNews = answer.articles.map((el) => {
        return el.title;
      });
      this.titles = arrayNews;
    });
  }
}
