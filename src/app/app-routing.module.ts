import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoothComponent } from './booth/booth.component';
import { ReserveComponent } from './reserve/reserve.component';

const routes: Routes = [
  {path:'booth/:id', component:BoothComponent},
  {path:'reserve/:id', component:ReserveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
