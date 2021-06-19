import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutgroupComponent } from './aboutgroup.component';

describe('AboutgroupComponent', () => {
  let component: AboutgroupComponent;
  let fixture: ComponentFixture<AboutgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
