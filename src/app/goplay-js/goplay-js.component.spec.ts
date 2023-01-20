import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoplayJsComponent } from './goplay-js.component';

describe('GoplayJsComponent', () => {
  let component: GoplayJsComponent;
  let fixture: ComponentFixture<GoplayJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoplayJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoplayJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
