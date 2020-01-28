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
      'Authorization': 'Bearer BQCelRNclAwBmAk28lDHLC0_vN3_yfKJ_P9Fo4kzPX_fQYmdOYj6Vh_d9-e8KgB7-OEzITtEPz3VCxKbz5U'
    });

    return this.http.get(url, {headers}); //retorna el observable
  }
  
  //Obtener nuevas canciones(estrenos)
  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map( data => data['albums'].items));//map -> Observable      
  }

  //Obtener Artistas
  getArtista(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist&limit=25`)
               .pipe(map(data =>  data['artists'].items));
  
  }
}
