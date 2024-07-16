import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginImplComponent } from './Login-impl.component';

describe('LoginImplComponent', () => {
  let component: LoginImplComponent;
  let fixture: ComponentFixture<LoginImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginImplComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
