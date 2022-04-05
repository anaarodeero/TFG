import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WeeklyPlanComponent } from './components/weekly-plan/weekly-plan.component';
import { DailyPlanComponent } from './components/dialy-plan/dialy-plan.component';
import { FoodComponent } from './components/food/food.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFoodDialogComponent } from './components/add-food-dialog/add-food-dialog.component';
import { SwapFoodDialogComponent } from './components/swap-food-dialog/swap-food-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodPyramidComponent } from './components/food-pyramid/food-pyramid.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { DatosCuentaComponent } from './components/register/datos-cuenta/datos-cuenta.component';
import { DietaComponent } from './components/register/dieta/dieta.component';
import { AlergiasComponent } from './components/register/alergias/alergias.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WeeklyPlanComponent,
    DailyPlanComponent,
    FoodComponent,
    DashboardComponent,
    AddFoodDialogComponent,
    SwapFoodDialogComponent,
    HeaderComponent,
    FooterComponent,
    FoodPyramidComponent,
    EditProfileComponent,
    DatosCuentaComponent,
    AlergiasComponent,
    DietaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
