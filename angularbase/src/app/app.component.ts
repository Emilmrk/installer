import { Component, OnInit } from '@angular/core';
import { PruebaService } from './prueba.service';
import { CommonModule } from '@angular/common';  // Importar CommonModule para ngFor

@Component({
  selector: 'app-root',
  standalone: true, // Marca el componente como independiente
  imports: [CommonModule], // Incluir CommonModule para ngFor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontend';
  pruebas: any[] = [];  // Cambié 'posts' por 'pruebas' como se mencionó

  constructor(private pruebaService: PruebaService) {}

  ngOnInit() {
    this.pruebaService.getPruebas().subscribe(
      (data) => {
        this.pruebas = data as any[];  // Asegúrate de que esto coincida con la respuesta de la API
        console.log(this.pruebas);
      },
      (error) => {
        console.error('Error al obtener pruebas:', error);
      }
    );
  }
}
