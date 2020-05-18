import { Injectable } from '@angular/core';
import { Plugins } from "@capacitor/core";
import { Observable, from } from 'rxjs';

const { DeviceInfoPlugin } = Plugins;

export class DeviceInfo {
  manufacturer: string;
  brand: string;
  hardware: string;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {

  constructor() { }

  public getDeviceInfo(): Observable<DeviceInfo> {
    return from(DeviceInfoPlugin.getDeviceInfo() as Promise<DeviceInfo>);
  }

}
