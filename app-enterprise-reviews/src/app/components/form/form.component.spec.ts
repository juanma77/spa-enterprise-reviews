import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { ReviewsService } from 'src/app/services/reviews.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should return true from service', () => {
    let service: ReviewsService; 
    review = new ReviewsService(new ReviewsService(http: HttpClient));
    expect(review.checkAdministrator()).toBe('true');
  });

  it('form should return false from service', () => {
    let service: ReviewsService;
    review = new ReviewsService(new ReviewsService(http: HttpClient));
    expect(review.checkAdministrator()).toBe('false');
  });
});

});
