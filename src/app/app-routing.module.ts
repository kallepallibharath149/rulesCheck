import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RunrulesComponent } from './runrules/runrules.component';


const routes: Routes = [
  { path: 'runrules', component: RunrulesComponent },
 { path: '', redirectTo: '/runrules', pathMatch: 'full' },
 { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
