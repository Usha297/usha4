import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Shop1Component } from './shop1/shop1.component';
import { Shop2Component } from './shop2/shop2.component';
import { Shop3Component } from './shop3/shop3.component';
import { Shop4Component } from './shop4/shop4.component';
import { Shop5Component } from './shop5/shop5.component';
import { Shop6Component } from './shop6/shop6.component';

const APPROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shop1', component: Shop1Component },
  { path: 'shop2', component: Shop2Component },
  { path: 'shop3', component: Shop3Component },
  { path: 'shop4', component: Shop4Component },
  { path: 'shop5', component: Shop5Component },
  { path: 'shop6', component: Shop6Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EmergencyComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    Shop1Component,
    Shop2Component,
    Shop3Component,
    Shop4Component,
    Shop5Component,
    Shop6Component
  ],
  imports: [
    HttpClientModule,
    MatDialogModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatTabsModule,
    MatToolbarModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APPROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


