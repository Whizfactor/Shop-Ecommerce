import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetPassswordPage } from './reset-passsword.page';

const routes: Routes = [
  {
    path: '',
    component: ResetPassswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPassswordPageRoutingModule {}
