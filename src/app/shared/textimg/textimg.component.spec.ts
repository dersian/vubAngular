import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextimgComponent } from './textimg.component';

describe('TextimgComponent', () => {
  let component: TextimgComponent;
  let fixture: ComponentFixture<TextimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
