import { Component, OnInit } from '@angular/core';
import { DatosPersonales } from 'src/app/interfaces/DatosPersonales';

@Component({
  selector: 'app-listar-datos-personales',
  templateUrl: './listar-datos-personales.component.html',
  styleUrls: ['./listar-datos-personales.component.css']
})
export class ListarDatosPersonalesComponent implements OnInit {

  listarDatosPersonales:  DatosPersonales[]=[
    //mapeo de datos, colleción de datos
    {
      nombre: 'Vanessa',
      apellido: 'Diaz', 
      direccion: 'Praderas de Mayasquer',
      email: 'vanessa99@udenar.edu.co',
      telefono: 3172766878
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
