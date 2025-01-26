import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesDelMundoComponent } from './paises-del-mundo.component';

describe('PaisesDelMundoComponent', () => {
  let component: PaisesDelMundoComponent;
  let fixture: ComponentFixture<PaisesDelMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaisesDelMundoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisesDelMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
