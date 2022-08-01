import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';



const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'team', component: TeamsPageComponent },
  { path: 'about', component: AboutPageComponent },
  {
    path: 'login', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }