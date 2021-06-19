import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdcontactComponent } from './tdcontact.component';

describe('TdcontactComponent', () => {
  let component: TdcontactComponent;
  let fixture: ComponentFixture<TdcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
