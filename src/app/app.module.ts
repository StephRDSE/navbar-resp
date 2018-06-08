import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home' , pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'realisations',
    component: RealisationsComponent
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    BioComponent,
    RealisationsComponent,
    ContactComponent,
    HomeComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

