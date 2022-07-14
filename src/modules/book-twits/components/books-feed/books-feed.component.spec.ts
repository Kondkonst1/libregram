import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksFeedComponent } from './books-feed.component';

describe('BooksFeedComponent', () => {
  let component: BooksFeedComponent;
  let fixture: ComponentFixture<BooksFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
