import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmsHomeComponent } from './oms-home.component';

describe('OmsHomeComponent', () => {
  let component: OmsHomeComponent;
  let fixture: ComponentFixture<OmsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
