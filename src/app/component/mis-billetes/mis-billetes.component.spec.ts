import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisBilletesComponent } from './mis-billetes.component';

describe('MisBilletesComponent', () => {
  let component: MisBilletesComponent;
  let fixture: ComponentFixture<MisBilletesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisBilletesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisBilletesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
