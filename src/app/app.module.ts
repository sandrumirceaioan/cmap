import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule, ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';
import { GtagModule } from 'angular-gtag';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'casinobestoffer.com'
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#d8a124'
    }
  },
  theme: 'edgeless',
  type: "info",
  content: {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "dismiss": "Got it!",
    "deny": "Refuse cookies",
    "link": "Learn more",
    "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
};

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
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NavigationComponent,
    FooterComponent,
    EscapeHtmlPipe,
    HomeComponent,
    AboutComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    IconsModule, ButtonsModule, WavesModule, CollapseModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    GtagModule.forRoot({ trackingId: 'UA-165920520-1', trackPageviews: true })

  ],
  providers: [
    HomeResolve,
    SlotsResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
