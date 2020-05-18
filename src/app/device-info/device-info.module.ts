import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeviceInfoRoutingModule } from './device-info-routing.module'
import { DeviceInfoPage } from './device-info.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    DeviceInfoRoutingModule
  ],
  declarations: [DeviceInfoPage]
})
export class DeviceInfoPageModule {}
