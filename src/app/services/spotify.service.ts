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
  
  //Obtener nuevas canciones(estrenos)
  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCelRNclAwBmAk28lDHLC0_vN3_yfKJ_P9Fo4kzPX_fQYmdOYj6Vh_d9-e8KgB7-OEzITtEPz3VCxKbz5U'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
                .pipe( map( data => data['albums'].items));//map -> Observable
          
  }

  //Obtener Artistas
  getArtista(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCelRNclAwBmAk28lDHLC0_vN3_yfKJ_P9Fo4kzPX_fQYmdOYj6Vh_d9-e8KgB7-OEzITtEPz3VCxKbz5U'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=25`, {headers})
              .pipe(map(data =>  data['artists'].items));
  
  }
}
