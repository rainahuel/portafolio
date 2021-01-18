import { Component, OnInit } from '@angular/core';
import { PdfService } from './services/pdf.service';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  constructor( private pdf: PdfService) { }

  ngOnInit(): void {
  }

  descargarCv( ) {
    this.pdf.descargarPdf().subscribe( (resp: any) => {
      const blob = new Blob([resp], {type: 'application/pdf'});
      const fileName = 'cvArturo.pdf'
      saveAs(blob, fileName);
    })
  }
  
}
