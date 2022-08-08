import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCaroselComponent } from './logo-carosel.component';

describe('LogoCaroselComponent', () => {
  let component: LogoCaroselComponent;
  let fixture: ComponentFixture<LogoCaroselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoCaroselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
