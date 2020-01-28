import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  
  nuevasCanciones: any[] = [];//Arreglo nuevasCanciones
  loading: boolean; //icono cargando

  constructor( private spotify: SpotifyService) {
    
    this.loading = true;

    this.spotify.getNewReleases()
        .subscribe((data:any) => {
          this.nuevasCanciones = data;
          this.loading = false;//quitar icono de carga
        });
  }


}
