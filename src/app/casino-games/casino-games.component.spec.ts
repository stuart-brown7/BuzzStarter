import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoGamesComponent } from './casino-games.component';

describe('CasinoGamesComponent', () => {
  let component: CasinoGamesComponent;
  let fixture: ComponentFixture<CasinoGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CasinoGamesComponent]
    });
    fixture = TestBed.createComponent(CasinoGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
