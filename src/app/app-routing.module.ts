import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminComponent } from './admin/admin.component';
import { MaterialFormDemoComponent } from './material-form-demo/material-form-demo.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'home',component:HomeComponent},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent},  
  { path:'forgot-password',component:ForgotPasswordComponent},
  { path:'admin',component:AdminComponent,canActivate:[AuthGuard]},
  { path:'m-demo',component:MaterialFormDemoComponent},
  { path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
