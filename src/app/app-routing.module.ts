import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { ReactpracComponent } from './reactprac/reactprac.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'reactprac',component:ReactpracComponent},
  {path:'crud',component:CrudComponent},
  {path:'update',component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
