import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullListPageComponent } from './full-list-page.component';

describe('FullListPageComponent', () => {
  let component: FullListPageComponent;
  let fixture: ComponentFixture<FullListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
