import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteComponent } from './components/carte/carte.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { DialogPasswordComponent } from './components/dialog-password/dialog-password.component';
import { UserAccountComponent } from './components/user-account/user-account.component';

const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full' },
  {path: 'Home', component: HomeComponent},
  {path: 'Cartes', component: CarteComponent},
  {path: 'Inscription', component: InscriptionComponent},
  {path: 'RegenPassword', component: DialogPasswordComponent},
  {path: 'UserAccount', component: UserAccountComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
