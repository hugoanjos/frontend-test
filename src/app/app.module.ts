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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent,
    AboutComponent,
    AnswersComponent,
    SequenceComponent,
    SocialComponent,
    VerticalAdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
