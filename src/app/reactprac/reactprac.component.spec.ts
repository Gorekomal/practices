import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactpracComponent } from './reactprac.component';

describe('ReactpracComponent', () => {
  let component: ReactpracComponent;
  let fixture: ComponentFixture<ReactpracComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactpracComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
