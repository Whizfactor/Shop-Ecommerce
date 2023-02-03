import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnPage } from './en.page';

const routes: Routes = [
  {
    path: '',
    component: EnPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnPageRoutingModule {}
