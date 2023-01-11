import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './components/carte/carte.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';

const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full' },
  {path: 'Home', component: HomeComponent},
  {path: 'Cartes', component: CarteComponent},
  {path: 'Inscription', component: InscriptionComponent},
  {path: 'UserAccount', component: UserAccountComponent},
  {path: 'Gestion', component: GestionComponent},
  {path: 'RequestReset', component: RequestResetComponent},
  {path: 'ResponseReset', component: ResponseResetComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
