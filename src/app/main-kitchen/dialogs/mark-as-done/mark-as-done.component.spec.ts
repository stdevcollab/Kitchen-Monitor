import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkAsDoneComponent } from './mark-as-done.component';

describe('MarkAsDoneComponent', () => {
  let component: MarkAsDoneComponent;
  let fixture: ComponentFixture<MarkAsDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkAsDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAsDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
