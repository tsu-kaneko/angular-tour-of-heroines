import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroineDetailComponent } from './heroine-detail.component';

describe('HeroineDetailComponent', () => {
  let component: HeroineDetailComponent;
  let fixture: ComponentFixture<HeroineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
