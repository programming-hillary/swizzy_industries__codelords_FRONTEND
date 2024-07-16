import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandingImplComponent } from './Landing-impl.component';

describe('LandingImplComponent', () => {
  let component: LandingImplComponent;
  let fixture: ComponentFixture<LandingImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingImplComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LandingImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
