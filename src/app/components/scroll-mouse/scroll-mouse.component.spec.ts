import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollMouseComponent } from './scroll-mouse.component';

describe('ScrollMouseComponent', () => {
  let component: ScrollMouseComponent;
  let fixture: ComponentFixture<ScrollMouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScrollMouseComponent]
    });
    fixture = TestBed.createComponent(ScrollMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
