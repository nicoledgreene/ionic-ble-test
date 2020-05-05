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

  }

  public scanForBLE() {
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
