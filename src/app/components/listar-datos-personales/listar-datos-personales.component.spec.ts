import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDatosPersonalesComponent } from './listar-datos-personales.component';

describe('ListarDatosPersonalesComponent', () => {
  let component: ListarDatosPersonalesComponent;
  let fixture: ComponentFixture<ListarDatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarDatosPersonalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarDatosPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
