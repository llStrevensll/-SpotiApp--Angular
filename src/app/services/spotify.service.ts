import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Service Listo');
    
  }
  //Obtener query-> para busquedas
  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDidXaUIHEsJOvOWXMWeCQJM5Kij2kqMr7NvdsOLtxuTmgKDKNZFjFhfWA8_aT-qw1XfF88Rq8FSDPgAvU'
    });

    return this.http.get(url, {headers}); //retorna el observable
  }
  
  //Obtener nuevas canciones(estrenos)
  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items));//map -> Observable      
  }

  //Obtener Artistas
  getArtistas(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=25`)
               .pipe(map(data =>  data['artists'].items));
  
  }
  
  //Obtener un unico artista
  getArtista(id: string){

    return this.getQuery(`artists/${id}`);
               //.pipe(map(data =>  data['artists'].items));
  
  }
}
