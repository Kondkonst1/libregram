import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitsComponent } from './twits.component';

describe('TwitsComponent', () => {
  let component: TwitsComponent;
  let fixture: ComponentFixture<TwitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
