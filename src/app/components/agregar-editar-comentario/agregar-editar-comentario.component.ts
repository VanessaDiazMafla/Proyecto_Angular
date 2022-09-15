import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interfaces/comentarios';


@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {

  agregaComentarios: FormGroup;

  
  constructor(private fb: FormBuilder) { 

    this.agregaComentarios = this.fb.group({

      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      texto: ['', Validators.required]

    })
    
  }

  ngOnInit(): void {
  }

  //metodo para agregar un comentario
  agregar(){

    console.log(this.agregaComentarios);

    const comentario: Comentario = {

      titulo: this.agregaComentarios.get('titulo')?.value,
      autor: this.agregaComentarios.get('autor')?.value,
      texto: this.agregaComentarios.get('texto')?.value,
      fechaCreacion: new Date()
    }

    console.log(comentario);

  }

}
