import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WeeklyPlanComponent } from './components/weekly-plan/weekly-plan.component';
import { DailyPlanComponent } from './components/dialy-plan/dialy-plan.component';
import { FoodComponent } from './components/food/food.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FoodPyramidComponent } from './components/food-pyramid/food-pyramid.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatTableModule } from '@angular/material/table'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { CdkStepperModule } from '@angular/cdk/stepper'; 
import { GlobalGuard } from './guards/global.guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'daily-plan', component: DailyPlanComponent, canActivate: [GlobalGuard] },
  { path: 'weekly-plan', component:  WeeklyPlanComponent, canActivate: [GlobalGuard]},
  { path: 'food', component:  FoodComponent, canActivate: [GlobalGuard]},
  { path: 'dashboard', component:  DashboardComponent, canActivate: [GlobalGuard]},
  { path: 'pyramid', component:  FoodPyramidComponent, canActivate: [GlobalGuard]},
  { path: 'edit', component:  EditProfileComponent, canActivate: [GlobalGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    FlexLayoutModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTableModule,
    MatDividerModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,
    MatDialogModule,
    MatSelectModule,
    CdkStepperModule]
})
export class AppRoutingModule { }
