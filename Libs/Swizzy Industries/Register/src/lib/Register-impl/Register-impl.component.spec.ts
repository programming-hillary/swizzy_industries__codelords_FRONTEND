import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterImplComponent } from './Register-impl.component';

describe('RegisterImplComponent', () => {
  let component: RegisterImplComponent;
  let fixture: ComponentFixture<RegisterImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterImplComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
