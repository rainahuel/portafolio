import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {

  constructor( private htpp: HttpClient ) { }


  enviarMensaje(form: any) {
    const body = {
      comentario: form.comentario, 
      correo: form.correo, 
      nombre: form.nombre 
    }
    return this.htpp.post( env.urlBase + env.api.mensaje, body)
  }

}
