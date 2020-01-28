import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify Service Listo');
    
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBq5C_CyFvhyw_qTIgwhBUD7A90r96EqzZxtUQUPzWOTJCBB95T4B3QWFRxiu-yXzHCDscspccJZ_4LuGY'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=10', {headers})
        .subscribe(data => {//data desde spotify
          console.log(data);
          
        });
  }
}
