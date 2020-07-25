import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

 tokenSpotify: string = 'Bearer BQDKGQr0pssEdSXO8TtO6nB6nc8XHyijbws0a6Fg0_gGq1moqdEVxSYwokNY-OnZIQjDHPzLcvkIvUk27dc';

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo!');
   }

   getQuery( query: string ){

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: this.tokenSpotify});

    return this.http.get( url, { headers } );

   }

  getNewReleases(){

    return this.getQuery( 'browse/new-releases?limit=20' )
              .pipe( map( data => data['albums'].items));

   }

   getArtista(termino: string){

    return this.getQuery( `search?q=${ termino }&type=artist&limit=15` )
              .pipe( map( data => data['artists'].items));

   }


}
