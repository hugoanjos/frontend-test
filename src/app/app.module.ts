import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TestComponent } from './components/test/test.component';
import { AboutComponent } from './components/about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnswersComponent } from './components/answers/answers.component';
import { SequenceComponent } from './components/sequence/sequence.component';
import { SocialComponent } from './components/social/social.component';
import { VerticalAdComponent } from './components/vertical-ad/vertical-ad.component';
import { NavbarButtonComponent } from './components/navbar-button/navbar-button.component';
import { FormsModule } from '@angular/forms';
import { FavButtonComponent } from './components/fav-button/fav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    AboutComponent,
    AnswersComponent,
    SequenceComponent,
    SocialComponent,
    VerticalAdComponent,
    NavbarButtonComponent,
    FavButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
