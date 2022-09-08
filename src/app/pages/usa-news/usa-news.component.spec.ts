import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsaNewsComponent } from './usa-news.component';

describe('UsaNewsComponent', () => {
  let component: UsaNewsComponent;
  let fixture: ComponentFixture<UsaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsaNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
