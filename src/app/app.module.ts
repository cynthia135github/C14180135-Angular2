import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobalvarService } from './globalvar.service';
import { DetailnoteComponent } from '../detailnote/detailnote.component';
import { FavoriteComponent } from '../favorite/favorite.component';
import { RouterModule, Routes } from '@angular/router';

const ROUTES : Routes = [
  {path: 'detailnote', component: DetailnoteComponent},
  {path: 'favorite', component: FavoriteComponent},
]

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobalvarService]
})
export class AppModule { }
