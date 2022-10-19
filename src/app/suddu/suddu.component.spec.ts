import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudduComponent } from './suddu.component';

describe('SudduComponent', () => {
  let component: SudduComponent;
  let fixture: ComponentFixture<SudduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudduComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
