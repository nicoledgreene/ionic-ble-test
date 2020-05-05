import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Home } from './home.component';

describe('Tab1Page', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Home],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
