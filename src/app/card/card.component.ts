import { element } from 'protractor';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

let answer;
const url =
  'http://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=c28ec9b0a8504b3897a5de03d03525df';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  titles: any;
  response: any;
  articles: any;
  urlToImage: any;
  arrayNews: any;
  public page: number;
  public collectionSize: number;
  searchN = '';

  constructor(private http: HttpClient, private router: Router) {}

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
    this.http.get(url).subscribe((response) => {
      answer = this.response = response;
      let arrayNews = answer.articles.map((el) => el.title);
      let url = answer.articles.map((el) => el.urlToImage);
      this.titles = arrayNews;
      this.urlToImage = url;
    });
  }

  searchNews() {
    this.http.get(url).subscribe((response) => {
      answer = this.response = response;
      let arrayNews = answer.articles.map((el) => el.title);
      let url = answer.articles.map((el) => el.urlToImage);
      this.titles = arrayNews;
      this.urlToImage = url;
    });
  }
}
