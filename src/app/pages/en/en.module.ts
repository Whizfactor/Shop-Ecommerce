import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnPageRoutingModule } from './en-routing.module';

import { EnPage } from './en.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnPageRoutingModule
  ],
  declarations: [EnPage]
})
export class EnPageModule {}
