import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessiondataComponent } from './sessiondata.component';

describe('SessiondataComponent', () => {
  let component: SessiondataComponent;
  let fixture: ComponentFixture<SessiondataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessiondataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessiondataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
