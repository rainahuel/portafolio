import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private htpp: HttpClient) { }

  descargarPdf() {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    return this.htpp.get('https://rainahuel.github.io/portafolio/assets/images/cvActualizado2020.pdf', { headers: headers, responseType: 'blob' })
  }

}
