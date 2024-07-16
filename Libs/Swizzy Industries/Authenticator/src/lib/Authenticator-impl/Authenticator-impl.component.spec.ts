import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticatorImplComponent } from './Authenticator-impl.component';

describe('AuthenticatorImplComponent', () => {
  let component: AuthenticatorImplComponent;
  let fixture: ComponentFixture<AuthenticatorImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthenticatorImplComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticatorImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
