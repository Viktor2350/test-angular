import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NewsCardComponent } from './news-card/news-card.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardServiceService } from './card-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: CardComponent },
  { path: 'newsCard', component: NewsCardComponent },
];
@NgModule({
  declarations: [AppComponent, CardComponent, SearchPipe, NewsCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [CardServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
