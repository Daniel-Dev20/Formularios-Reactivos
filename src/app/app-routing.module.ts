import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactivoComponent } from './components/reactivo/reactivo.component';

const routes: Routes = [
  {path: 'reactivo', component:ReactivoComponent},
  {path: '**', redirectTo: 'reactivo'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
