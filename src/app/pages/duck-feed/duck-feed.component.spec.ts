import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckFeedComponent } from './duck-feed.component';

describe('DuckFeedComponent', () => {
  let component: DuckFeedComponent;
  let fixture: ComponentFixture<DuckFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuckFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuckFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
