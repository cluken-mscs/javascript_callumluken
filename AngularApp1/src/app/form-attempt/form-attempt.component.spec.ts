import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAttemptComponent } from './form-attempt.component';

describe('FormAttemptComponent', () => {
  let component: FormAttemptComponent;
  let fixture: ComponentFixture<FormAttemptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAttemptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAttemptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
