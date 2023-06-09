import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStoryComponent } from './create-story.component';

describe('CreateStoryComponent', () => {
  let component: CreateStoryComponent;
  let fixture: ComponentFixture<CreateStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateStoryComponent]
    });
    fixture = TestBed.createComponent(CreateStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
