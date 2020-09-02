import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNPCComponent } from './create-npc.component';

describe('CreateNPCComponent', () => {
  let component: CreateNPCComponent;
  let fixture: ComponentFixture<CreateNPCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNPCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNPCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
