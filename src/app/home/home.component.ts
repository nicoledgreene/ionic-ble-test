import { Component, NgZone } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

@Component({
  selector: 'home',
  templateUrl: 'home.template.html',
  styleUrls: ['home.style.scss']
})
export class Home {

  devices: any[] = [];

  constructor(private ble: BLE, private ngZone: NgZone) {}

  ngOnInit() {
    // this.devices = [
    //   {name: 'test', id: '234', rssi: 'testrssi'}
    // ]
  }

  public scanForBLE() {
    console.log('scan for ble');
    this.devices = [];
    this.ble.scan([], 15).subscribe(device => {
      device => this.onDiscovered(device);
    })
  }

  private onDiscovered(device) {
    console.log('Discovered' +  JSON.stringify(device, null, 2));
    this.ngZone.run(() => {
      this.devices.push(device);
      console.log(device);
    })
  }
}
