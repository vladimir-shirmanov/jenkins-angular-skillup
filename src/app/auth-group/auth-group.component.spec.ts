import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGroupComponent } from './auth-group.component';

describe('AuthGroupComponent', () => {
  let component: AuthGroupComponent;
  let fixture: ComponentFixture<AuthGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
