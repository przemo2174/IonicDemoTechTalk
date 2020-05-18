import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DeviceInfoService, DeviceInfo } from '../services/device-info.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-device-info',
  templateUrl: 'device-info.page.html',
  styleUrls: ['device-info.page.scss']
})
export class DeviceInfoPage implements OnInit {

  deviceInfo$: Observable<DeviceInfo>;

  constructor(private deviceInfoService: DeviceInfoService, private toastService: ToastService) {}

  ngOnInit() { 
    this.deviceInfo$ = this.deviceInfoService.getDeviceInfo().pipe(
      catchError(error => {
        console.log(error);
        this.toastService.presentToast(error);
        return of(new DeviceInfo())
      })
    );
  }

}
