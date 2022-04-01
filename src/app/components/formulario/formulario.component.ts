import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  listaPersona: [] = []
  formularioContacto: FormGroup = new FormGroup({
    nombre: new FormControl ('', [Validators.required, Validators.minLength(5)]),
    edad: new FormControl ('',[Validators.required]),
    email: new FormControl ('',[Validators.required,Validators.email]),
    mensaje:new FormControl ('')
  })
  constructor() { } 

  ngOnInit(): void {
  }

  submit(){
    console.log(this.formularioContacto)
  }

}
