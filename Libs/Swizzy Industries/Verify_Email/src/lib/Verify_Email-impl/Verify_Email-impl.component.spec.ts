import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyEmailImplComponent } from './Verify_Email-impl.component';

describe('VerifyEmailImplComponent', () => {
  let component: VerifyEmailImplComponent;
  let fixture: ComponentFixture<VerifyEmailImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyEmailImplComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyEmailImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
