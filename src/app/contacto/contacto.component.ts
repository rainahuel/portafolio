import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MensajeService } from '../services/mensaje.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup;


  constructor( private mensajeService: MensajeService,
               ) { 
 
  }

  ngOnInit(): void {
    this.iniciarForm();
  }

  iniciarForm() {
    this.contactoForm = new FormGroup({
      nombre: new FormControl(''),
      correo: new FormControl(''),
      comentario: new FormControl('')
    });
  }

  enviarMensaje() {
    if (this.contactoForm.invalid) {
      return;
    }
    this.mensajeService.enviarMensaje(this.contactoForm.value).subscribe((resp: any) => {
      if (resp.ok === true) {
        Swal.fire(
          `${resp.message}`,
          '',
          'success'
        )
        this.iniciarForm();
      } else {
        Swal.fire(
          `Error al enviar mensaje!`,
          '',
          'error'
        )
        this.iniciarForm();
      }
      
    })

  }


}
