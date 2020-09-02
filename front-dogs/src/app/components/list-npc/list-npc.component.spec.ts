import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNPCComponent } from './list-npc.component';

describe('ListNPCComponent', () => {
  let component: ListNPCComponent;
  let fixture: ComponentFixture<ListNPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
