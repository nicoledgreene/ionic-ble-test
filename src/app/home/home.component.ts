import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'home',
  templateUrl: 'home.template.html',
  styleUrls: ['home.style.scss']
})
export class Home {

  devices: any[] = [];
  statusMessage: string;

  constructor(private ble: BLE, private zone: NgZone, private toastCtrl: ToastController) {}

  ngOnInit() {
    // this.devices = [
    //   {name: 'test', id: '234', rssi: 'testrssi'}
    // ]
  }

  public scanForBLE() {
    console.log('scan for ble');
    this.devices = [];
    this.ble.scan([], 5).subscribe(device => {
      console.log('Discovered '+JSON.stringify(device, null, 2))
      this.zone.run(() => {
        this.devices.push(device);
        this.devices = this.devices.slice(0)
        console.log(device);
      }), error => {
        this.scanError(error);
      }
    })

    setTimeout(this.setStatus.bind(this), 5000, 'Scan complete');
  }
  
  // If location permission is denied, you'll end up here
  async scanError(error) {
    this.setStatus('Error ' + error);
    let toast = await this.toastCtrl.create({
      message: 'Error scanning for Bluetooth low energy devices',
      position: 'middle',
      duration: 5000
    });
    toast.present();
  }

  setStatus(message) {
    console.log(message);
    this.ngZone.run(() => {
      this.statusMessage = message;
    });
  }
}
