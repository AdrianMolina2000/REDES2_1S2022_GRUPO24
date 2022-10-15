import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EconomicDevComponent} from './components/economic-dev/economic-dev.component';
import { AdministratorsComponent } from './components/administrators/administrators.component';
import { DevelopersComponent } from './components/developers/developers.component';
import { PublicFuntionComponent } from './components/public-funtion/public-funtion.component'

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'economic-dev', component: EconomicDevComponent},
  {path: 'administrators', component: AdministratorsComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'public-funtion', component: PublicFuntionComponent},
  {path: '', redirectTo: '/home', pathMatch:'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
