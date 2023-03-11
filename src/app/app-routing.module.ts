import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RezepteComponent } from './rezepte/rezepte.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rezepte', component: RezepteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
