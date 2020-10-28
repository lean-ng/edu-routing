import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { ExratesModule } from './exrates/exrates.module';
import { LogOnComponent } from './core/components/log-on/log-on.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    LogOnComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ExratesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
