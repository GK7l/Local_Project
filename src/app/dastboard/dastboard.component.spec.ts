import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DastboardComponent } from './dastboard.component';

describe('DastboardComponent', () => {
  let component: DastboardComponent;
  let fixture: ComponentFixture<DastboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DastboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DastboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
