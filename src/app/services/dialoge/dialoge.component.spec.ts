import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeComponent } from './dialoge.component';

describe('DialogeComponent', () => {
  let component: DialogeComponent;
  let fixture: ComponentFixture<DialogeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogeComponent]
    });
    fixture = TestBed.createComponent(DialogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
