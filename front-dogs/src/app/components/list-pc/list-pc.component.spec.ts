import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPCComponent } from './list-pc.component';

describe('ListPCComponent', () => {
  let component: ListPCComponent;
  let fixture: ComponentFixture<ListPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
