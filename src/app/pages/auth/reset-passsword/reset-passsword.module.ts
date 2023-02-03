import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPassswordPageRoutingModule } from './reset-passsword-routing.module';

import { ResetPassswordPage } from './reset-passsword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPassswordPageRoutingModule
  ],
  declarations: [ResetPassswordPage]
})
export class ResetPassswordPageModule {}
