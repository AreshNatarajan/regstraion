import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImglogComponent } from './imglog.component';

describe('ImglogComponent', () => {
  let component: ImglogComponent;
  let fixture: ComponentFixture<ImglogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImglogComponent]
    });
    fixture = TestBed.createComponent(ImglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
