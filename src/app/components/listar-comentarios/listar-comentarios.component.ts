import { Component, OnInit } from '@angular/core';
import {Comentario} from 'src/app/interfaces/comentarios';

@Component({
  selector: 'app-listar-comentarios',
  templateUrl: './listar-comentarios.component.html',
  styleUrls: ['./listar-comentarios.component.css']
})
export class ListarComentariosComponent implements OnInit {

listComentarios: Comentario []=[

  {
    titulo: 'Cibersecurity',
    autor: 'Vanessa Diaz',
    fechaCreacion: new Date(), 
    texto: 'Este es un comentario 1'
  },
  {
    titulo: 'Angular Developer',
    autor: 'Jennifer Oliva ',
    fechaCreacion: new Date(), 
    texto: 'Este es un comentario 2'
  },

  {
    titulo: '.NET Developer',
    autor: 'Paula Rosero',
    fechaCreacion: new Date(), 
    texto: 'Este es un comentario 3'
  },

  {
    titulo: 'React Developer',
    autor: 'Meliza Gomez',
    fechaCreacion: new Date(), 
    texto: 'Este es un comentario 4'
  },

  {
    titulo: 'Andriod Developer',
    autor: 'Dario Campiño',
    fechaCreacion: new Date(), 
    texto: 'Este es un comentario 5'
  }


]

  constructor() { }

  ngOnInit(): void {
  }

}
