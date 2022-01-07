import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDockersComponent } from './my-dockers.component';

describe('MyDockersComponent', () => {
  let component: MyDockersComponent;
  let fixture: ComponentFixture<MyDockersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDockersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDockersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
