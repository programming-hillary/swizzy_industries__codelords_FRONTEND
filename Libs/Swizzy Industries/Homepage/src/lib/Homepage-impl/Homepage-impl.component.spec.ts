import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomepageImplComponent } from './Homepage-impl.component';

describe('HomepageImplComponent', () => {
  let component: HomepageImplComponent;
  let fixture: ComponentFixture<HomepageImplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageImplComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageImplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
