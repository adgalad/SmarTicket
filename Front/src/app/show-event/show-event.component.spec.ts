import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEventComponent } from './show-event.component';

describe('ShowEventComponent', () => {
  let component: ShowEventComponent;
  let fixture: ComponentFixture<ShowEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show', () => {
    expect(component).toBeTruthy();
  });
});
