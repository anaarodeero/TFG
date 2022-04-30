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
import { AlimentoComponent } from './components/alimento/alimento.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddFoodDialogComponent } from './components/add-food-dialog/add-food-dialog.component';
import { SwapFoodDialogComponent } from './components/swap-food-dialog/swap-food-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FoodPyramidComponent } from './components/food-pyramid/food-pyramid.component';
import { DatosCuentaComponent } from './components/register/datos-cuenta/datos-cuenta.component';
import { DietaComponent } from './components/register/dieta/dieta.component';
import { AlergiasComponent } from './components/register/alergias/alergias.component';
import { CommonModule } from '@angular/common';
import { RecetasBBDDComponent } from './components/recetas-bbdd/recetas-bbdd.component';
import { RecetaComponent } from './components/receta/receta.component';
import { AddRecetaComponent } from './components/add-receta/add-receta.component';
import { DailyPlanComponent } from './components/daily-plan/daily-plan.component';
import { AddRecetaSimpleComponent } from './components/add-receta-simple/add-receta-simple.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WeeklyPlanComponent,
    DailyPlanComponent,
    AlimentoComponent,
    DashboardComponent,
    AddFoodDialogComponent,
    SwapFoodDialogComponent,
    HeaderComponent,
    FooterComponent,
    FoodPyramidComponent,
    DatosCuentaComponent,
    AlergiasComponent,
    DietaComponent,
    RecetasBBDDComponent,
    RecetaComponent,
    AddRecetaComponent,
    AddRecetaSimpleComponent,
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
