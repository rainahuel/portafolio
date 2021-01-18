import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  Habilidades = [{nombre: "Spring boot", valor: 40},
                {nombre: "Angular", valor: 60},
                {nombre: "nodeJs", valor: 50},
                {nombre: "HTML", valor: 80},
                {nombre: "CSS", valor: 80}]

  constructor() { }

  ngOnInit(): void {
  }

  
  
}
