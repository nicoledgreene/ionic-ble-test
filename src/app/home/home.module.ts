import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { BLE } from '@ionic-native/ble/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  providers: [BLE],
  declarations: [Home]
})
export class HomeModule {}
