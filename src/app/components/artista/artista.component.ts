import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  
  //Artista objeto vacio
  artista: any = {};
  topTrask: any[] = [];
  loadingArtist: boolean; //icono cargando

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) { 
    
    this.loadingArtist = true;
    this.router.params.subscribe(params => {//suscribirse a cambios en el parametro url
        
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }
  

  //Obtener el artista desde el servicio
  getArtista (id: string){

    this.loadingArtist = true;
    this.spotify.getArtista(id)
          .subscribe(artista => {
            console.log(artista);
            this.artista = artista;
            this.loadingArtist = false;
          });
  }
  
  //Mejores pistas
  getTopTracks(id: string){

    this.spotify.getTopTracks(id)
                .subscribe(topTracks => {
                  console.log(topTracks);
                  this.topTrask = topTracks;
                  
                });
  }



  

}
