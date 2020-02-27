import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule, ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';

import { EscapeHtmlPipe } from './shared/pipes/keepHtml.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeResolve } from './home/home.resolve';
import { SlotsResolve } from './slots/slots.resolve';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavigationComponent,
    FooterComponent,
    EscapeHtmlPipe,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    IconsModule, ButtonsModule, WavesModule, CollapseModule
    
  ],
  providers: [
    HomeResolve,
    SlotsResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
